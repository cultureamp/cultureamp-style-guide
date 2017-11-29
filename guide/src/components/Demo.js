import React from 'react'
import HtmlString from './HtmlString'
import styles from './Demo.module.scss'

const MIN_CANVAS_WIDTH = 240

const SMALL = Symbol('small')
const MEDIUM = Symbol('medium')
const LARGE = Symbol('large')
const RANDOM = Symbol('random')
const FULL = Symbol('full')

export default class Demo extends React.Component {
  state = {
    selectedPreset: 0,
    assignedCanvasWidth: null,
    actualCanvasDimensions: {
      width: null,
      height: null,
    },
  }

  render() {
    return (
      <div className={styles.root}>
        {this.renderPresetList()}
        {this.renderCanvas()}
        <div className={styles.controls}>
          {this.renderSizePresets()}
          {this.renderCanvasDimensions()}
          {this.renderComponentTypes()}
        </div>
      </div>
    )
  }

  renderPresetList() {
    const { presets } = this.props
    const { selectedPreset } = this.state

    return (
      <div className={styles.selectPreset}>
        <select onChange={this.onSelectPreset} value={selectedPreset}>
          {presets.map((preset, index) => (
            <option key={index} value={index}>
              {preset.name}
            </option>
          ))}
        </select>
      </div>
    )
  }

  renderCanvas() {
    const Component = this.props.component

    return (
      <div className={styles.frame} ref={div => (this.frame = div)}>
        <div
          className={styles.canvas}
          style={{ width: this.state.assignedCanvasWidth }}
          ref={div => (this.canvas = div)}
        >
          <Component {...this.selectedPresetProps()} />
        </div>
      </div>
    )
  }

  selectedPresetProps() {
    const { props, htmlProps } = this.props.presets[this.state.selectedPreset]

    Object.keys(htmlProps || {}).forEach(key => {
      const html = htmlProps[key]
      props[key] = <HtmlString {...{ html }} />
    })

    return props
  }

  renderSizePresets() {
    return (
      <div className={styles.sizePresets}>
        <button onClick={this.onClickResizeTo(FULL)}>Full</button>
        <button onClick={this.onClickResizeTo(RANDOM)}>Random</button>
        <button onClick={this.onClickResizeTo(LARGE)}>Large</button>
        <button onClick={this.onClickResizeTo(MEDIUM)}>Medium</button>
        <button onClick={this.onClickResizeTo(SMALL)}>Small</button>
      </div>
    )
  }

  renderCanvasDimensions() {
    const { width, height } = this.state.actualCanvasDimensions

    return (
      width &&
      height && (
        <div className={styles.canvasDimensions}>
          <span className={styles.dimension}>{width}px</span>
          {' × '}
          <span className={styles.dimension}>{height}px</span>
          {' viewport'}
        </div>
      )
    )
  }

  renderComponentTypes() {
    return (
      <div className={styles.componentTypes}>
        <button>React</button>
      </div>
    )
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  onSelectPreset = e => {
    const selectedPreset = parseInt(e.target.value)
    this.setState({ ...this.state, selectedPreset })
  }

  onClickResizeTo(size) {
    return e => this.resizeToSize(size)
  }

  resizeToSize(size) {
    switch (size) {
      case FULL:
        this.resizeTo()
        break
      case RANDOM:
        this.resizeTo(randomBetween(MIN_CANVAS_WIDTH, this.maxCanvasWidth()))
        break
      case LARGE:
        this.resizeTo(randomBetween(800, 1200))
        break
      case MEDIUM:
        this.resizeTo(randomBetween(500, 800))
        break
      case SMALL:
        this.resizeTo(randomBetween(MIN_CANVAS_WIDTH, 500))
        break
    }
  }

  resizeTo(assignedCanvasWidth = null) {
    assignedCanvasWidth =
      assignedCanvasWidth &&
      Math.min(assignedCanvasWidth, this.maxCanvasWidth())

    if (this.state.assignedCanvasWidth === null && assignedCanvasWidth) {
      // prepare for CSS transition from width: auto
      this.setAssignedCanvasWidth(this.maxCanvasWidth())
    }

    window.requestAnimationFrame(() => {
      this.setAssignedCanvasWidth(assignedCanvasWidth)
    })
  }

  setAssignedCanvasWidth(assignedCanvasWidth) {
    this.setState({ ...this.state, assignedCanvasWidth })
    this.onResize()
  }

  maxCanvasWidth() {
    return this.frame.clientWidth
  }

  onResize = () => {
    if (this.resizing) return

    this.resizing = true
    window.requestAnimationFrame(this.onResizeFrame)
  }

  onResizeFrame = () => {
    if (this.isResizeComplete()) {
      this.resizing = false
      return
    }

    const { clientWidth, clientHeight } = this.canvas
    this.setState({
      ...this.state,
      actualCanvasDimensions: {
        width: clientWidth,
        height: clientHeight,
      },
    })

    window.requestAnimationFrame(this.onResizeFrame)
  }

  isResizeComplete() {
    const { clientWidth, clientHeight } = this.canvas
    const {
      assignedCanvasWidth,
      actualCanvasDimensions: { width: canvasWidth, height: canvasHeight },
    } = this.state

    return (
      clientWidth == canvasWidth &&
      clientHeight == canvasHeight &&
      (!assignedCanvasWidth || clientWidth == assignedCanvasWidth)
    )
  }
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

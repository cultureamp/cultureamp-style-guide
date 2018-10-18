import React from 'react';
import classnames from 'classnames';
import Grid from '../components/_Grid';
import Drop from '../components/_Drop';
import Code from '../../../../components/Code';
import './_AnimationSequences.scss';

class AnimationPresets extends React.PureComponent {
  state = {
    isAnimating: false,
  };

  replay = () => {
    this.setState({ isAnimating: false }, () => {
      setTimeout(() => {
        this.setState({ isAnimating: true });
      }, 0);
    });
  };

  render() {
    const { isAnimating } = this.state;

    return (
      <React.Fragment>
        <Grid className={classnames({ ['is-animating']: isAnimating })}>
          <Drop classes="spin-1" color="#43E699" onClick={this.replay} />
          <Drop classes="spin-2" color="#43E699" onClick={this.replay} />
          <Drop classes="spin-3" color="#43E699" onClick={this.replay} />
        </Grid>
        <div>
          <Code>{`$duration: $deliberate; // 700ms
$delay: -$slow; // -400ms (stagger effect)

@include ca-series {
  .spin-1 {
    @include ca-queue($duration, $delay, spin, fade($from: 0.75));
  }
  .spin-2 {
    @include ca-queue($duration, $delay, spin, fade($from: 0.5));
  }
  .spin-3 {
    @include ca-queue($duration, 0, spin, fade($from: 0.25));
  }
}`}</Code>
        </div>
      </React.Fragment>
    );
  }
}

export default AnimationPresets;

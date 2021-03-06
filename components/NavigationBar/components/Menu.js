// @flow
import * as React from 'react';

import styles from './Menu.module.scss';
import Tooltip from './Tooltip';
import Link from './Link';
import { MOBILE_QUERY } from '../constants';
import Media from 'react-media';
import { OffCanvas, OffCanvasContext } from '../../OffCanvas';
import IconButton from '../../Button/IconButton';
import backIcon from 'cultureamp-style-guide/icons/arrow-backward.svg';

export type MenuItem = {
  label: string,
  link: string,
  newWindow?: boolean,
  data?: { [key: string]: string },
};

type Props = {|
  children?: React.Element<any>,
  header?: React.Element<any>,
  items: Array<MenuItem>,
  automationId?: string,
  heading?: string,
|};

type State = {|
  open: boolean,
|};

export default class Menu extends React.Component<Props, State> {
  root: ?HTMLElement;

  static displayName = 'Menu';
  static defaultProps = {
    items: [],
  };

  state = { open: false };

  render() {
    const { children, automationId, heading } = this.props;

    return (
      <Media query={MOBILE_QUERY}>
        {matches =>
          matches ? (
            <React.Fragment>
              <OffCanvasContext.Consumer>
                {({ toggleVisibleMenu }) => (
                  <Link
                    text={heading ? heading : ''}
                    href="#"
                    onClick={() => toggleVisibleMenu(heading)}
                    hasMenu
                  />
                )}
              </OffCanvasContext.Consumer>
              {this.renderOffCanvas()}
            </React.Fragment>
          ) : (
            <nav className={styles.root} ref={root => (this.root = root)}>
              <button
                className={styles.button}
                onClick={this.toggle}
                aria-expanded={this.state.open}
                data-automation-id={automationId}
                onMouseDown={e => e.preventDefault()}
              >
                {children}
              </button>
              {this.state.open && this.renderMenu()}
            </nav>
          )
        }
      </Media>
    );
  }

  toggle = (e: SyntheticEvent<> | MouseEvent) => {
    const open = !this.state.open;
    this.setState({ open });
  };

  renderMenu() {
    const { header, items } = this.props;

    return (
      <div className={styles.menu}>
        <div>
          {header}
          {items.map(this.renderMenuItem)}
        </div>
      </div>
    );
  }

  renderOffCanvas() {
    const { items, heading } = this.props;

    return (
      <OffCanvas
        links={items.map(this.renderOffCanvasMenuItem)}
        heading={heading ? heading : 'Menu'}
        headerComponent={this.renderBackButton()}
        menuId={heading}
      />
    );
  }

  renderBackButton() {
    return (
      <OffCanvasContext.Consumer>
        {({ toggleVisibleMenu }) => (
          <IconButton
            label="Back"
            icon={backIcon}
            onClick={() => toggleVisibleMenu(this.props.heading)}
            reversed
          />
        )}
      </OffCanvasContext.Consumer>
    );
  }

  renderOffCanvasMenuItem = (item: MenuItem, index: number) => {
    return <Link key={index} text={item.label} href={item.link} />;
  };

  renderMenuItem = (item: MenuItem, index: number) => {
    const { newWindow } = item;

    if (newWindow) {
      return (
        <div key={index}>
          <Tooltip
            hideTooltip={false}
            tabIndex={null} // link inside takes focus instead
            tooltip="Opens in a new tab"
          >
            {this.renderMenuItemLink(item)}
          </Tooltip>
        </div>
      );
    }

    return (
      <React.Fragment key={index}>
        {this.renderMenuItemLink(item)}
      </React.Fragment>
    );
  };

  renderMenuItemLink = (item: MenuItem) => {
    const { label, link, newWindow, data = {} } = item;

    const dataAttributes = {};
    Object.keys(data).forEach(key => {
      dataAttributes[`data-${key}`] = data[key];
    });

    return (
      <a
        href={link}
        className={styles.menuItem}
        target={newWindow ? '_blank' : '_self'}
        {...dataAttributes}
      >
        {label}
      </a>
    );
  };

  componentDidMount() {
    document.addEventListener('click', this.clickDocument);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickDocument);
  }

  clickDocument = (e: MouseEvent) => {
    // We can't just stopPropagation of click events in the menu, because a
    // click in this menu may also need to dismiss another open menu.
    if (
      this.state.open &&
      this.root &&
      !(e.target instanceof Node && this.root.contains(e.target))
    ) {
      this.toggle(e);
    }
  };
}

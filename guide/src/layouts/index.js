import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import Breadcrumb from 'components/Breadcrumb';
import SubNav from 'components/SubNav';
import MainNav from './mainNav.js';
import HeaderBar from './headerBar.js';
import './index.scss';
import styles from './layout.module.scss';

class TemplateWrapper extends React.Component {
  state = {
    navOpen: false,
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <title>Kaizen</title>
          <meta
            name="description"
            content="Kaizen - Culture Amp's Style Guide"
          />
          <meta
            name="keywords"
            content="Culture Amp, design system, style guide"
          />
        </Helmet>
        <div
          className={classNames(styles.layout, {
            [styles.navOpen]: this.state.navOpen,
          })}
        >
          <div className={styles.nav}>
            <MainNav openNav={() => this.openNav()} />
          </div>
          <div className={styles.subnav}>
            <SubNav title="What" closeNav={() => this.closeNav()} />
          </div>
          <div
            className={styles.subnavBackdrop}
            onClick={() => this.closeNav()}
          />
          <div className={styles.header}>
            <HeaderBar toggleNav={() => this.toggleNav()} />
          </div>
          <div className={styles.content}>
            <div className={styles.pageContainer}>
              <Breadcrumb />
              {children()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  toggleNav() {
    this.setState({ navOpen: !this.state.navOpen });
  }

  closeNav() {
    this.setState({ navOpen: false });
  }

  openNav() {
    this.setState({ navOpen: true });
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

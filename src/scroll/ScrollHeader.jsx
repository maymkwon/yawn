import React, { Component } from 'react';
import _ from 'lodash';
import { Header } from '../style/components';

const delta = 5;

class ScrollHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      didScroll: true,
      lastScrollTop: 0,
      navClass: 'down'
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', _.throttle(this.hasScrolled, 250));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', _.throttle(this.hasScrolled, 250));
  }

  hideHeader = () => {
    this.setState({
      navClass: 'up'
    });
  };
  showHeader = () => {
    this.setState({
      navClass: 'down'
    });
  };
  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  hasScrolled = () => {
    const st = window.scrollY;
    if (Math.abs(this.state.lastScrollTop - st) <= delta) return;

    if (st > this.state.lastScrollTop && st > this.props.navbarHeight) {
      this.hideHeader();
    } else {
      if (st < this.getDocHeight()) {
        this.showHeader();
      }
    }

    this.setState({
      lastScrollTop: st
    });
  };

  handleScroll(event) {
    this.setState({
      didScroll: true
    });
  }

  render() {
    console.log(this.state);
    console.log(this.props.navbarHeight);
    return (
      <Header
        id="header"
        className={this.state.navClass}
        navHeight={this.props.navbarHeight}
      >
        <div>header</div>
      </Header>
    );
  }
}

export default ScrollHeader;

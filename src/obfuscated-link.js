import React from "react";
import isCallable from "is-callable";

export default class ObfuscatedLink extends React.PureComponent {
  state = {};

  componentDidMount() {
    const { href } = this.props;

    if (href) {
      this.setState({
        href
      });
    }
  }

  render() {
    const { children, href, ...rest } = this.props;
    const renderProps = {
      ...rest,
      ...this.state
    };

    if (isCallable(children)) {
      return children(renderProps);
    }

    return <a {...renderProps}>{children}</a>;
  }
}

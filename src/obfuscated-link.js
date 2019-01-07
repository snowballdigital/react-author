import React from 'react'
import isCallable from 'is-callable'

export default class ObfuscatedLink extends React.PureComponent {
  state = {}

  /**
   * By setting the href after the page is mounted, we stop
   * any crawler that pick up email addresses and don't
   * execute JS
   */
  componentDidMount () {
    const { href } = this.props

    if (href) {
      this.setState({
        href
      })
    }
  }

  render () {
    const { children, href, ...rest } = this.props
    const renderProps = {
      ...rest,
      ...this.state
    }

    if (isCallable(children)) {
      return children(renderProps)
    }

    return <a {...renderProps}>{children}</a>
  }
}

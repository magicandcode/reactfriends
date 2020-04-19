import React, { Component } from 'react'

class ErrorBoundry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }

  render() {
    const {hasError} = this.state
    if (hasError) {
        return <h2 className="title--error">Oops! Something went terribly wrong.</h2>
    }
    return this.props.children
  }
}
export default ErrorBoundry
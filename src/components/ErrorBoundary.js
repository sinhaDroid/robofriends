import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  componentDidCatch(_error, _info) {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      /* jshint ignore:start */
      return <h1>Something went wrong.</h1>;
      /* jshint ignore:end */
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
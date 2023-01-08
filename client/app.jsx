import React from 'react';
import Home from './pages/home';
import Prompt from './pages/prompt';
import Library from './pages/library';
import parseRoute from './lib/parse-route.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      const route = parseRoute(window.location.hash);
      this.setState({ route });
    });
  }

  render() {
    return (
      <>
        {this.state.route.path === '' && <Home />}
        {this.state.route.path === 'prompt' && <Prompt />}
        {this.state.route.path === 'library' && <Library />}
      </>
    );
  }
}

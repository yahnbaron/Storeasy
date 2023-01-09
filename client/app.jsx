import React from 'react';
import Home from './pages/home';
import Prompt from './pages/prompt';
import Library from './pages/library';
import NotFound from './pages/not-found';
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

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'prompt') {
      const title = route.params.get('title');
      return <Prompt title={title} />;
    }
    if (route.path === 'library') {
      return <Library />;
    }
    return <NotFound />;
  }

  render() {
    return (
      <>
        {this.renderPage()}
      </>
    );
  }
}

import React from 'react';
import Home from './pages/home';
import PromptCompose from './pages/prompt-compose';
import { Route, Routes } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/compose/:title' element={<PromptCompose />} />
      </Routes>
    );
  }
}

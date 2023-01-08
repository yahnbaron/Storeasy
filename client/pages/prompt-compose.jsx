import React from 'react';
import NavBar from '../components/nav-bar';
import { useParams } from 'react-router-dom';

const PromptCompose = () => {
  const { title } = useParams();
  return (
    <div>
      <NavBar />
      <h1>{title}</h1>
    </div>
  );
};

export default PromptCompose;

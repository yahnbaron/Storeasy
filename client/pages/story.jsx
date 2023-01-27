import React, { useState, useEffect } from 'react';
import NavBar from '../components/nav-bar';

function Story(props) {
  const [story, setStory] = useState({});
  useEffect(() => {
    fetch(`/api/getstory/${props.id}`)
      .then(res => res.json())
      .then(data => {
        setStory(data);
      });
  }, [props.id]);
  return (
    <div>
      <NavBar />
      <div className='container'>
        <h1 className='story-title'>{props.title}</h1>
        <div className='row wrap'>
          <p>{story.story}</p>
        </div>
      </div>
    </div>
  );
}
export default Story;

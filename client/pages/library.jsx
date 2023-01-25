import React, { useState, useEffect } from 'react';
import NavBar from '../components/nav-bar';

function Library() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    fetch('/api/getstories')
      .then(res => res.json())
      .then(data => {
        setStories(data.stories);
      });
  }, []);
  return (
    <div>
      <NavBar />
      <div className='container'>
        <h1 className='story-title' style={{ 'text-decoration': 'none' }}>Library</h1>
        <div className='row wrap'>
          {
          stories.map(story => (
            <div key={story.storyId} className='small-100-large-40 mapped-story'>
              <a href={`#story?title=${story.title}&id=${story.storyId}`}
              className='mapped-title'>{story.title}</a>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  );
}
export default Library;

import { React, useState, useEffect } from 'react';
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
        <h2>Library</h2>
        {
          stories.map(story => (
            <button key={story.storyId}>{story.title}</button>
          ))
        }
      </div>
    </div>
  );
}
export default Library;

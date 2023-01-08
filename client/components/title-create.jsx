import React from 'react';
import { useState, useHistory } from 'react-router-dom';

function TitleCreate(props) {
  const [title, setTitle] = useState('');
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    history.push(`/compose/${title}`);
  };

  return (
    <div className='title-create-component'>
      <div className='container'>
        <div className='row center-justify'>
          <div className='col-auto'>
            <h3>It all starts with a title:</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-auto relative'>
            <form className='title-submit' onSubmit={handleSubmit}>
              <input
                placeholder='Enter a title for your new story...'
                className='title-form'
                value={title}
                onChange={event => setTitle(event.target.value)}
              />
              <button type='submit' className='title-submit-button'>
                <i className='fa-solid fa-circle-right' />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleCreate;

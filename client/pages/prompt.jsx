import React from 'react';
import NavBar from '../components/nav-bar';

export default class Prompt extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { inputValue: '' };
  }

  handleSubmit(event) {
    event.preventDefault();
    // const title = event.target.elements.title.value;
    // window.location.hash = `#prompt?title=${title}`;
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className='container'>
          <div className='row'>
            <div className='column-auto'>
              <h1 className='story-title'>{this.props.title}</h1>
            </div>
          </div>
          <div className='row center-justify'>
            <div className='col-auto prompt-create'>
              <form>
                <label htmlFor='prompt-input'>What do you want the story to be about?</label>
                <textarea placeholder='Enter exactly what you would like your story to be about...' id='prompt-input' rows='4' />
                <label htmlFor='style-input'>Would you like the story to have any specific styles or themes?</label>
                <textarea placeholder='Sci-fi, silly fantasy, Dr. Seuss, animals, etc.' className='prompt-input' id='style-input' rows={1} />
                <div className='prompt-submit'><button className='prompt-submit-button' type='submit'>Let&apos;s Go!</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

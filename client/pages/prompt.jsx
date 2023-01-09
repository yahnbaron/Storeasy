import React from 'react';
import NavBar from '../components/nav-bar';

export default class Prompt extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      promptValue: '',
      styleValue: '',
      story: null,
      loading: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true });
    const promptValue = this.state.promptValue.toLowerCase();
    const styleValue = this.state.styleValue;
    let stringForAI = '';
    if (styleValue.length > 1) {
      stringForAI += 'Tell me a story about ' + promptValue + '\nWrite in the following style(s) and/or theme(s): ' + this.state.styleValue;
    } else {
      stringForAI += `Tell me a story about ${promptValue}`;
    }
    const data = { prompt: stringForAI };
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch('http://localhost:3000/api/storygenerate', init)
      .then(res => res.json())
      .then(data => {
        this.setState({
          story: data.story,
          loading: false
        });
      });

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className='container'>
          <div className='row'>
            <div className='column-auto'>
              <h1 className='story-title'>{this.props.title}</h1>
            </div>
          </div>
          {this.state.story &&
            <div className='container'>
              <p className='full-story'>{this.state.story}</p>
            </div> }
          {!this.state.story &&
            <div className='row center-justify'>
              <div className='col-auto prompt-create'>
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor='prompt-input'>What do you want the story to be about?</label>
                  <textarea
                  placeholder='Enter exactly what you would like your story to be about...'
                  id='prompt-input'
                  required
                  rows='4'
                  name='promptValue'
                  value={this.state.promptValue}
                  onChange={this.handleInputChange}
                />
                  <label htmlFor='style-input'>Would you like the story to have any specific styles or themes?</label>
                  <textarea
                  placeholder='Sci-fi, silly, fantasy, Dr. Seuss, animals, etc.'
                  className='prompt-input'
                  id='style-input'
                  rows='2'
                  name='styleValue'
                  value={this.state.styleValue}
                  onChange={this.handleInputChange}
                />
                  <div className='prompt-submit'>
                    {!this.state.loading && <button className='prompt-submit-button' type='submit'>Let&apos;s Go!</button>}
                    {this.state.loading && <button disabled className='prompt-submit-button-disabled' type='submit'>Loading...</button>}
                  </div>
                </form>
              </div>
            </div>
            }
        </div>
      </React.Fragment>
    );
  }
}

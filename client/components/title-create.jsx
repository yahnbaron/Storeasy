import React from 'react';

class TitleCreate extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { inputValue: '' };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.error('State: ', this.state);
  }

  render() {
    return (
      <div className='title-create'>
        <div className='container'>
          <div className='row center-justify'>
            <div className='col-auto'>
              <h3>It all starts with a title:</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-auto'>
              <form className='title-submit' onSubmit={event => this.handleSubmit(event)}>
                <input
                  placeholder='Enter a title for your new story...'
                  className='title-form'
                  value={this.state.inputValue}
                  onChange={event => this.setState({ inputValue: event.target.value })}
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
}

export default TitleCreate;

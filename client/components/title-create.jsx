import React from 'react';

class TitleCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  render() {
    return (
      <body className='title-create'>
        <div className='container'>
          <div className='row center-justify'>
            <div className='col-auto'>
              <h3>It all starts with a title:</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-auto'>
              <form className='title-submit'>
                <input placeholder='Enter a title for your new story...' className='title-form' />
                <i className='fa-solid fa-circle-right title-submit-button' />
              </form>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default TitleCreate;

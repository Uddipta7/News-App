import React, { Component } from 'react';
import loading from '../assets/loading.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        {/*for loading gif and import in ne
        ws.js */}
        
        <img className='my-3' src={loading} alt="loading" />
      </div>
    );
  }
}

export default Spinner;

import React, { Component } from 'react'
import loading from './Snake.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-2' src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner

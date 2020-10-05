import React, { Component } from 'react'

class Title extends Component {
  siteName = 'First React Component';
  render() {
    return (
      <div>
        <p>{this.siteName}</p>
      </div>
    )
  }
}
export default Title;
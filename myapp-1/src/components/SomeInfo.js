import React, { Component } from 'react'

class SomeInfo extends Component {
  render() {
    return (
      <div>
        <p>Components are an essential part of any React application. In this post, 
            we'll be learning how to create components to do whatever we want.
            Think of components as bite-size chunks of our application that we can reuse all over our site. 
            Let's pretend we're making a social network and want to put a like,
            share, and comment button below each post. We could write the code for this in each area we want it,
            but this is a hassle if we show it in 6 different locations and need to change it.</p>
      </div>
    )
  }
}
export default SomeInfo;
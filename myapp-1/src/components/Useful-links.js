import React, { Component } from 'react'

class UsefulLinks extends Component {
  someLinks = [
    {link:'https://jquery.com/', name:'JQuery'},
    {link:'https://reactjs.org/', name:'React'},
    {link:'https://getbootstrap.com/', name:'Bootstrap'},
    {link:'https://www.mongodb.com/', name:'MongoDB'},
    {link:'https://sass-lang.com/', name:'Sass'}
  ]

  render() {
    return (
      <div>
        <ol>
        <li><a href={this.someLinks[0].link}>{this.someLinks[0].name}</a></li>
        <li><a href={this.someLinks[1].link}>{this.someLinks[1].name}</a></li>
        <li><a href={this.someLinks[2].link}>{this.someLinks[2].name}</a></li>
        <li><a href={this.someLinks[3].link}>{this.someLinks[3].name}</a></li>
        <li><a href={this.someLinks[4].link}>{this.someLinks[4].name}</a></li>
        </ol>
      </div>
    )
  }
}
export default UsefulLinks;
import React, { Component } from 'react'

class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Angular</td>
              <td>React</td>
              <td>Vue</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>When you build an application with Angular, you break your app up into multiple components with nested, or child, components. 
                Each Angular component is broken into three files. The business logic for a component is written in the main file, 
                whereas the layout and styles related to this component are written in the other two files.</td>
              <td>React-based applications are divided into multiple components. 
                A single component file contains both business logic and HTML markup 
                (which is actually a JSX markup that’s transformed into JavaScript functions).</td>
              <td>Vue is worth considering instead of React is because of the Redux library that’s often used in large-scale React applications. 
                As explained in the React section, when a React+Redux app grows bigger, 
                you’ll spend a lot of time applying small changes to multiple files instead of actually working on features</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
export default Table;
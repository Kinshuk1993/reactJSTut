/*
USING STRICT MODE IN THE ES6 IS NOT NECESSARY
AS ALL JSX AND JS IS BY DEFAULT IN STRICT MODE
IN ES6
*/
// 'use strict';

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: 'Kinshuk',
          age: 26
        },
        {
          id: 2,
          name: 'Sanju',
          age: 21
        },
        {
          id: 3,
          name: 'Anil',
          age: 24
        }
      ]
    };
  }
  render() {
    // {/*Variable to display ternary operation handling in JSX*/}
    var i = 1;
    /* The no lone block is depricated now and will give a warning
    Lone blocks won't accept comments, only const, let,
    and class declarations
    */
    // {
    //   //Custom Styling...
    // }
    var customStyle = {
      fontSize: 20,
      color: 'rgb'
   }
    return (
<div className="App App-header">
  <img src={logo} className="App-logo" alt="logo" />
  Edit <code>src/App.js</code> and save to reload.
  <a className="App-link" href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer">
    Learn React
  </a>
  <h1>Header</h1>
  <h2 style={customStyle}>Sum is: {1+1.5}</h2>
  <h3>
  {i === 1 ? 'True!' : 'False'}
  </h3>
  <p>This is the content!</p>
  <Header/>
  <Content/>
  <table>
    <tbody>
      {
        this.state.data.map(
          (person, i) => <TableRow key={i} data={person}/>
        )
      }
    </tbody>
  </table>
</div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <h1>
          Kinshuk Header Class Displaying
        </h1>
      </div>
    );
  }
}

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>
          {
            this.props.data.id
          }
        </td>
        <td>
          {
            this.props.data.name
          }
        </td>
        <td>
          {
            this.props.data.age
          }
        </td>
      </tr>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div>
        <h3>
          Kinshuk Content Class Displaying
        </h3>
      </div>
    );
  }
}

export default App;

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
    //Using state for global data container - ALWAYS PREFERRED
    this.state = {
      header: 'State header',
      content: 'Content header',
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
    // Variable to display ternary operation handling in JSX
    var i = 1;
    /* The no lone block is depricated now and will give a warning
    Lone blocks won't accept comments, only const, let,
    and class declarations
    The use of multiline comment using {} can be done inside the HTML part  without
    getting any warnings
    */
    // {
    //   //Custom Styling...
    // }
    var customStyle = {
      fontSize: 20,
      color: 'rgb'
   }
  //  Class is replaced by className for applying the CSS propeerties
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
    {/* Using ternary operator or any value related operations, do it inside curly brases '{}' */}
  {i === 1 ? 'True!' : 'False'}
  </h3>
  <p>This is the content!</p>
  
  {/* State and props example where updating value in parent state and passing it in child */}
  <Header headerPropFromState={this.state.header} />
  <Content contentPropFromState={this.state.content} />

  {/* Stateful example */}
  <table>
    <tbody>
      {
        this.state.data.map(
          (person, i) => <TableRow key={i} data={person}/>
        )
      }
    </tbody>
  </table>

  {/* Using global state example */}
  <h4>
    {this.state.header}
    <br/>
    {this.state.content}
  </h4>

  {/* Using custom props */}
  <p>
    {this.props.propsOne}
    <br/>
    {this.props.propsTwo}
  </p>

  {/* Using default props */}
  <p>
    {this.props.defaultPropsOne}
    <br/>
    {this.props.defaultPropsTwo}
  </p>
</div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <h4>
          Header Class Displaying
          <br/>
          {/* State and props example where updating value in parent state and passing it in child */}
          {this.props.headerPropFromState}
        </h4>
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
        <h4>
          Content Class Displaying
          <br/>
          {/* State and props example where updating value in parent state and passing it in child */}
          {this.props.contentPropFromState}
        </h4>
      </div>
    );
  }
}

// Using default property values
App.defaultProps = {
  defaultPropsOne: 'Default props one',
  defaultPropsTwo: 'Default props two'
}

export default App;

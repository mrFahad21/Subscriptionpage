import logo from './logo.svg';
import React from 'react';
import './App.css';
import NewComp from './Component/NewComp';

class App extends React.Component {
  styles = {
    fontStyle : "bold",
    color: "teal"
  }
  render() {
    return (
    <div className="App">
      <h1 style={this.styles}> Hello!</h1>
      <NewComp />
    </div>
    );
  }
}

export default App;
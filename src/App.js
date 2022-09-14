import './App.css';
import Profile from './Profile';
import React from 'react';

class App extends React.Component {
  state = {
    show: false,
  };
  render () {
    return (
      <div className="App">
        <button onClick={() => this.setState({show: !this.state.show})}>{this.state.show === false ? "Show" : "Hide"}</button>
        {this.state.show && <Profile />}
      </div>
    );
  }
}

export default App;

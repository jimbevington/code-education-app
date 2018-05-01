import React, { Component } from 'react';
import Intro from './containers/Intro';
import Game from './containers/Game';
import Fact from './components/Fact';
import Quiz from './containers/Quiz';
import './App.css';

class App extends Component {
  state = { facts: [] }

  componentDidMount(){
    fetch('/facts')
    .then(res => res.json())
    .then(facts => this.setState({ facts }));
  }

  render() {
    if(!this.state.facts.length){
      return null;
    }
    return (
      <div className="App">
        <Intro />
        {/* Welcome */}
        <Fact facts={this.state.facts}/>
        <Game squaredSize={6}/>
        <Quiz facts={this.state.facts} />
        {/* BYE */}
      </div>
    );
  }
}

export default App;

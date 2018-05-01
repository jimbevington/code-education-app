import React, { Component } from 'react';
import Intro from './components/Intro';
import Game from './containers/Game';
import Fact from './components/Fact';
import Quiz from './containers/Quiz';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      facts: [],
      userName: ''
    }
  }

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
        <Intro handleNameSaveClick={this.saveName}/>
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

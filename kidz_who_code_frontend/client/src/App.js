import React, { Component } from 'react';
import Intro from './components/Intro';
import Game from './containers/Game';
import Fact from './components/Fact';
import Quiz from './containers/Quiz';
import Bye from './components/Bye';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      facts: [],
      userName: ''
    }
    this.saveName = this.saveName.bind(this);
  }

  componentDidMount(){
    fetch('/facts')
    .then(res => res.json())
    .then(facts => this.setState({ facts }));
  }

  saveName(name){
    this.setState({userName: name});
  }

  render() {
    if(!this.state.facts.length){
      return null;
    }
    return (
      <div className="App">
        <Intro handleNameSaveClick={this.saveName}/>
        <Fact facts={this.state.facts}/>
        <Game squaredSize={6}/>
        <Quiz facts={this.state.facts} />
        <Bye userName={this.state.userName} />  
      </div>
    );
  }
}

export default App;

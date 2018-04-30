import React, { Component } from 'react';
import Intro from './containers/Intro';
import Game from './containers/Game';
import Fact from './components/Fact';
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
    // debugger;
    // console.log(this.state.facts[0].info);
    return (
      <div className="App">
        <Intro />
        <h1>Facts</h1>

        <Fact facts ={this.state.facts}/>

        <ul>

          {this.state.facts[0].info.map(fact =>
          <div key={fact.id}>
          <li>{fact.question}</li>
          <li>{fact.answer}</li>
        </div>
      )}
    </ul>
    {/* Welcome */}
    {/* FACTS */}
    <Game />
    {/* QUIZ */}
    {/* BYE */}
  </div>


);
}

}

export default App;

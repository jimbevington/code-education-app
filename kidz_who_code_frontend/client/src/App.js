import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { facts: [] }

  componentDidMount(){
    fetch('/facts')
    .then(res => res.json())
    .then(facts => this.setState({ facts }));
  }

  render() {
    return (
      <div className="App">
        <h1>Facts</h1>
        <ul>
          {this.state.facts.map(fact =>
            <div>
              <li key={fact.id}>{fact.question}</li>
              <li>{fact.answer}</li>
            </div>
          )}
        </ul>
      </div>
    );
  }
}

export default App;

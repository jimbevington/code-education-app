import React from 'react';

class EnterYourName extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event){
    this.setState({name: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    const name = this.state.name.trim(); // trim whitespace
    // break if no name
    if(!name){
      return;
    }
    // send Name up to Parent Element
    this.props.handleSubmitClick(name);
    // reset state
    this.setState({name: ''});
  }

  render(){
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{margin: '25px'}}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleNameChange}
         />
        <input type="submit" value="Save" />
      </form>
    )
  }
}

export default EnterYourName;

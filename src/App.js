import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
class App extends Component { 
    state={
     Person:
      { name: "Deepak",age:'24'}
  }
    changeState=(newName)=>{
      this.setState({
        Person:
          { name: newName,age:'24'}
           
      })
    }
    InputChangeVal(event){
      this.setState({
        Person:
          { name: event.target.value,age:'24'}         
      })
    }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={()=>this.changeState("Ajay")}>Click me to change State</button>
         <Person name={this.state.Person.name} age={this.state.Person.age} cval={this.InputChangeVal.bind(this)}>|| My Hobby: Swimming</Person>
        </header>
      </div>
    );
  }
}
export default App;

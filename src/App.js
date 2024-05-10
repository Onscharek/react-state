import './App.css';
import React, { Component } from 'react'
import Person from './comp/Person';
import Time from './Time';

export default class App extends Component {
  //  istate
constructor(props){
  super(props)
  this.state={show: false};
}



show = ()=>{
  this.setState({show:! this.state.show})};
 
  render() {
    return (
      <div>
       
        <button onClick={this.show}><h1> Show/Hide The Profile
</h1></button>

{this.state.show ? <Person/> : null}
{this.state.show ? <Time/> : null}

      </div>
    )
  }
}



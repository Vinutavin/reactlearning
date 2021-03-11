import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
     increment:1
    };
    
  }
  increment (props){
   // this.props.increment = 1;
    //this.setState(
   // { count : this.state.count + 1 },
    //()=>{console.log(this.state.count)}
    //  )
    this.setState( (state, props) => ({
      count: state.count + state.increment}))
    //console.log(this.state.count)
  }
  incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }
  render(){
    return(<div>
      <div>Count - {this.state.count}</div>
      <button onClick={()=> this.incrementFive()}>Click to Increment</button>
    </div>)
  }
}

export default Counter

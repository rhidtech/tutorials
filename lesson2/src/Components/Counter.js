import { Component } from "react";

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
        }
    }
    increment(){
        this.setState({
            counter: this.state.counter + 1,
        })
    }
    render(){
        return(
           <div>
            <h3> Count Value Is :{this.state.counter}   </h3>

            <button onClick={ () => this.increment() }>click me</button>

           </div>
        ) ;
    }
}

export default Counter;
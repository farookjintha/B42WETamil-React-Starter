import { Component } from "react";
import ClassComponentB from "../ClassComponentB";
import './classComponent.css';

class ClassComponentA extends Component {
    constructor(props){
        super(props);
        console.log('Constructor called...')
        this.state = {
            counter: 0,
            name: '',
            age: null
        }
    }

    handleCounter = () => {
        this.setState({counter: this.state.counter + 1});
    }

    // handleAge = (input) => {
    //     this.setState({...this.state, age: input});
    // }


    componentDidMount(){
        console.log('Component Did mount called...')
    };

    componentDidUpdate(){
        console.log('Component Did Update Called...');
    }


    render(){
        console.log('Render called...')
        return(
            <div className="class-container">
                <h2>Class Component</h2>
                <h4>Counter: {this.state.counter}</h4>
                <button onClick={() => this.handleCounter()}>Click</button>
                {/* <input type="number" placeholder="Enter age" onChange={(e) => this.handleAge(e.target.value)} />
                {this.state.age && <h3>Age: {this.state.age}</h3>} */}
                {this.state.counter <= 10 && <ClassComponentB />}
            </div>
        )
    }
}

export default ClassComponentA;
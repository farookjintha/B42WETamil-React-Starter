import { Component } from "react";

class ClassComponentB extends Component{
    constructor(props){
        super(props);
    }

    componentWillUnmount(){
        console.log('Child Component Will Unmount Called..')
    }

    render(){
        console.log('Child render called...')
        return (
            <div>
                <h3>Showing Child Class Component</h3>
            </div>
        )
    }
}

export default ClassComponentB;
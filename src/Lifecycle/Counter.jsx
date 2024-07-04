import { Component } from "react";

export default class Counters extends Component{
    constructor(props){
        super(props)
        this.state={
            counter : 0
        };

        this.handleIncrement = this.handleIncrement.bind(this);
    }
    componentDidMount(){
        this.setState(()=>({
            counter : 2
        }))
    }

    handleIncrement() {
        this.setState((prev)=>({
            counter : prev.counter + 1
        }));

    }

    componentDidUpdate(){
        console.log(`counter is changed ${this.state.counter}`)
    }

    componentWillUnmount(){
        this.setState(()=>({
            counter : 0
        }))
        console.log(`counter WillUnmount ${this.state.counter}`)
    }

    render(){
        return <>
            <h1>counter incriments : {this.state.counter}</h1><br />
            <button onClick={this.handleIncrement}>Incrimenter counter</button>
        </>
    };

}
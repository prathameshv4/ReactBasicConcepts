import {Component, useState} from "react";

// state with functional component
export function State(){

    const [data, setData] = useState(0) // 0 = initial value 
    
    function btnClick(){
        console.log('btnClick - ');
        setData(data+1)
    }

    return (
        <div className="app">
            <h1>data = {data} -- State in React</h1>
            <button onClick={()=>btnClick()} >change state</button>
        </div>
    );
}
// export default State;


// state with class component
class StateClass extends Component{

    constructor(){
        super();
        this.state = {
            data: 0
        }
    }
    
        
    btnClick(){
        console.log('btnClick - ');
        this.setState({ data: this.state.data+1 })
    }

    render(){  // must for class component 
        return(
            <div>
                <h1>
                    state Classcomponent - data= {this.state.data}
                    <button onClick={()=>this.btnClick()} >update button</button>
                </h1>
            </div>
        )
    }
}

export default StateClass;
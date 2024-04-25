import React from 'react';

class Counter extends React.Component{

    state = {
        count : 10
    };

    onInc = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    onDec = () => {
        this.setState({
            count: this.state.count - 1
        });
    }


    render(){
        return(
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.onInc}>++</button>
                <button onClick={this.onDec}>--</button>
            </div>
        );
    };
};

export default Counter;
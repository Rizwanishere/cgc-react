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
                <h1 className='mb-4 mt-4 font-bold lg:text-4xl text-black'>Count:{this.state.count}</h1>
                <button className="bg-orange-500 px-2 py-1 m-1 text-white hover:bg-orange-600 rounded" onClick={this.onInc}>++</button>
                <button className="bg-orange-500 px-2 py-1 m-1 text-white hover:bg-orange-600 rounded"onClick={this.onDec}>--</button>
            </div>
        );
    };
};

export default Counter;
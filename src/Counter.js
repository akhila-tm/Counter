// import { useState } from "react";

// function Counter(){
//     const [count, setCount] = useState(0);

//     return (
//       <div >
//         <h2>Counter App</h2>
//         <p>Count: {count}</p>
//         <button onClick={() => setCount(count + 1)}style={{ marginRight:'10px'}}>Increment</button>
//         <button onClick={() => setCount(count - 1)}>Decrement</button>
//       </div>
//     );
// }
// export default Counter;
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h2>Counter App</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment} style={{ marginRight: '10px' }}>
          Increment
        </button>
        <button onClick={this.decrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;

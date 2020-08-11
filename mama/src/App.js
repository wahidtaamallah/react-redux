import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { increment , decrement  } from './Action/action'
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
    hello redux, the value of counter is :{props.counter}
     <div>
       <button onClick={props.increment}>+</button>
       <button onClick={ props.decrement}>-</button>
     </div>
      </header>
    </div>
  );
}

const mapStatetoProps =(state) =>({
counter:state.counter,  
});

const mapDispatchtoProps = (dispatch) => {
  return {

    increment : () => dispatch( increment()),
    decrement : () => dispatch(decrement())

  };
}

export default connect(mapStatetoProps , mapDispatchtoProps)(App);

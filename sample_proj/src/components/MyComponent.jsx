//updater function = A function passed as an argument to setState() usaully ex.setYear(arrow function)
//Allow for safe updates based on the previous state used with multiple state updates and asynchronous functions .GOod practice to use updater Function
import React,{useState} from 'react'

function MyComponent() {

    const [count, setCount] =useState(0);

    const increment =() => {


      //uses the current state to calculate the Next state
      //set functions do not trigger an update
      //React batches together state updates for performance reasons
      //Next state becmes the current state after an update

      //Takes the PENDING state to calculate the next state
      //React puts your updater function in a queue(waiting in line)
      //During the next render,it will call them in the same order

        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    const decrement =() => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }
    const reset =() => {
        setCount(c => c =0);
    }




  return (
    <div className="counter-container">
        <p className="count-display">{count}</p>
        <button className="counter-button" onClick={decrement}>Decrement</button>
        <button className="counter-button" onClick={reset}>Reset</button>
        <button className="counter-button" onClick={increment}>Increment</button>
    </div>
  )
}

export default MyComponent
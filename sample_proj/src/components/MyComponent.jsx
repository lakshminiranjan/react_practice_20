import React,{useState,useEffect} from 'react'
// useEffect() = React hook that tells React do some code when(pick one):
// this component re-renders--->useEffect(() => {})
// this component mounts------->useEffect(() => {},[])
// the state of a value------->useEffect(() => {},[value])
// 
// useEffect(function, [dependencies])
// uses:->event listeners                                   ->clean up when a component unmounts
// ->DOM manipulation
// ->subscriptions
// ->Fetching Data from API

function MyComponent() {

  const [count,setCount] =useState(0);
  const [color,setColor] =useState("green",);

  useEffect(() => {
    document.title = `Count :${count} ${color}`;

    return () => {
      //SOME CLEANUP CODE
    }
  },[count,color]);

  function addCount(){
    setCount(c => c+1);
  }
  function subtractCount(){
    setCount(c => c-1);
  }
  function changeColor(){
    setColor(c => c === "green" ? "red"  : "green");
  }
  return (
    <>
    <p style={{color: color}}>Count: {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subtractCount}>SUbtract</button> <br />
    <button onClick={changeColor}>Change Color</button>
    </>
  )
}

export default MyComponent
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


  const[width,setWidth] = useState(window.innerWidth);
  const[height,setHeight] = useState(window.innerHeight);



  useEffect(() => {
        window.addEventListener("resize",handleResize);
        console.log("Event listerner addded");

        return () =>{
          window.removeEventListener("resize",handleResize);
          console.log("Event listerner removeded");
        }
  },[]);

  useEffect(() => {
    document.title = `Size : ${width} x ${height}`; 
  },[{width,height}]);




  function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
    <p>Window Width : {width}px</p>
    <p>Window Height : {height}px</p>
    </>
  )
}
  

export default MyComponent;
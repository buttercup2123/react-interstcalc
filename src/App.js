import React from "react"
import ReactDOM from "react-dom"
import Display from "./Display"
import Buttons from "./Container"
import {useState} from "react"
function App(){
  let [count,setCount]=useState(0)
  return(
    <>
      <Display content="Counter Application"/>
      <Display content={count}/>
      &nbsp;<Buttons content="Increment" color="success" fun={()=>setCount(count+1)}/>
      &nbsp;<Buttons content="Decrement" color="danger" fun={()=>setCount(count-1)} con={count===0}/>
      &nbsp;<Buttons content="Reset" color="secondary" fun={()=>setCount(0)} con={count===0}/>
    </>
  )
}
export default App;
import React,{useState} from 'react'


export default function Hideshow() {
  const [data,setData]=useState(true)
  return (
    <div>
      <h1>2)Hide & Show</h1>
      
      {
        data?<h3>Hello</h3>:null
      }
      
      <button onClick={()=>setData(false)}>Hide</button>
      <button onClick={()=>setData(true)}>Show</button>
      <br></br><h6>or</h6>
      <button onClick={()=>setData(!data)}>Toggle</button>
      
    </div>
  )
}

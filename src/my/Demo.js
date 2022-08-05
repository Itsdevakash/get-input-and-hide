import React,{useState} from 'react'

export default function Demo() {
  const [data,setData] =useState("Akash")
  const [print,setPrint] =useState(false)
 function  getdata(val){
   setData(val.target.value)
   setPrint(false)
  }
   return (
    <div>
     <h1>1)Get Input value</h1>
      
        {
            print?
            <h1>{data}</h1>
            :null

        }
        
     <input type="text" onChange={getdata} />
     <button type="submit" onClick={()=>setPrint(true)} >Print Data</button>
     
    </div>
  )
}

 
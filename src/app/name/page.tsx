"use client"
import { FormEvent, useState } from "react"

export default function Name(){
  const [inputVal,setInputVal] = useState('')
  const handleSubmit=(event:FormEvent)=>{
    console.log(event)
    event.preventDefault()
  }
  console.log(inputVal)
  return (
    <div> 
      <div>
        <h1> 请输入你的名字 </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="输入你的名字..." onChange={(e)=>{
          setInputVal(e.target.value)
        }}/>
        <button type="submit">预测数据</button>
      </form>
    </div>
  )
}
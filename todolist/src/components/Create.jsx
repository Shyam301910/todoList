import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

const Create = () => {
  const [task,setTask]=useState("")
  const handleAdd=()=>{
    axios.post('http://localhost:5000/add',{task:task})
    .then(result=>{
      console.log(result)
      setTask("")
      toast.success("Task added successfully")
    })  
    .catch(err=>{
      console.log(err)
      toast.error("Failed to add task 🥺")
    })
  }
  return (
    <div className='create'>
        <input type="text" placeholder='Enter text' value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button type='button' onClick={handleAdd}>Add</button>  
    </div>
  )
}

export default Create
import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import { BsCircleFill,BsTrashFill,BsCheckCircleFill } from "react-icons/bs";
import { toast } from 'react-toastify';

const Home = () => {
    // eslint-disable-next-line no-unused-vars
    const [todos,setTodos]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/get")
        .then(res=>setTodos(res.data))
        .catch(err=>console.log(err))
    },[todos])

    const handleEdit=(id)=>{
        axios.put("http://localhost:5000/update/"+id)
        .then(res=>console.log(res)) //(res=>location.reload())
        .catch(err =>console.log(err))
    }

    const handleDelete=(id)=>{
        axios.delete("http://localhost:5000/delete/"+id)
        .then(res=>{
            console.log(res)
            toast.success("Task removed from the list")
        }) //(res=>location.reload())
        .catch(err => {
            console.log(err)
            toast.error("Failed to remove toast from the list")
        })
    }
  return (
    <div className='home'>
        <h2>Todo List</h2>
        <Create/>
        {
            todos.length===0
            ?
            <div><h2>No record</h2></div>
            :
            todos.map((todo,index)=>(
                <div class="task" key={index}>
                    <div class="checkbox" onClick={()=>handleEdit(todo._id)}>
                        {todo.done ?
                            <BsCheckCircleFill className='icon'></BsCheckCircleFill>
                        : <BsCircleFill className='icon'/>
                        }
                        <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                    </div>
                    <div>
                        <span><BsTrashFill className='icon' onClick={()=>handleDelete(todo._id)}/></span>
                    </div>
                </div>
            ))
        }
    </div>
    
  )
}

export default Home
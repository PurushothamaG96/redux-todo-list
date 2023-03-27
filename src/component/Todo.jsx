import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux"
import {add, deleteTodo, editTodo} from "../reduxStore/index"
function Todo(props) {
    const [data, setData] = useState("")
    const [err, setError] = useState("")
    const [btn, setBtn] = useState({edit:false, delete:false})
    const [index, setIndex] = useState(null)
    const selector = useSelector((state)=>state)
    const dispatch = useDispatch()
    const handleDispatch=()=>{
        if(data){
            setError("")
            dispatch(add(data))
        }
        else{
            setError("Field Must Be Filled")
        }
        setData("")
    }

    const handleEdit = (e)=>{
        setBtn({...btn, edit:true})
        setData(selector[e.target.id])
        setIndex(e.target.id)
    }
    const handleEditDispatch=()=>{
        setBtn({...btn, edit:false})
        console.log(index, data)
        dispatch(editTodo(index, data))
        setData("")
    }

    const handleDelete =(e)=>{
        dispatch(deleteTodo(e.target.id))
    }
    
    return (
        <div className="App">
         <h1>TO DO APP ON REDUX</h1>
         <div>
            <input type="text" placeholder='Enter the reminder' onChange={(e)=>setData(e.target.value)} value={data}/>
            <button onClick={handleDispatch}>ADD</button>
            {btn.edit?<button onClick={handleEditDispatch}>Edit</button>:""}
            
            <p>{err}</p>
            <ul>
              {selector.map((val, i)=>{
                return(
                  <li key={i}>{val}
                  <button id={i} onClick={handleEdit}>Edit</button>
                  <button id={i} onClick={handleDelete}>Delete</button></li>
                )
              })}
            </ul>
         </div>
        </div>
      );
  }
     
   
    
   

export default Todo;
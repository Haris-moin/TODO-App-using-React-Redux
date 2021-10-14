import React,{useState} from 'react'
import './style.css'

const Input = () => {
    const [input, setInput] = useState('');
    console.log(input);
  const  addTodo = ()=>{
        console.log(input)
    }
    return (
        <div className="input">
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
            <button onClick={addTodo}>Add</button>
        </div>
        
    )
}

export default Input

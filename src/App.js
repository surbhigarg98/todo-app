import React, { useState,useEffect } from 'react';
import {FormControl,Button,Input,InputLabel } from '@material-ui/core';
import firebase from 'firebase' 


import './App.css';
import Todo from './Todo';
import db from './firebase';

function App() {

  const [todos,setTodos]=useState([])
  const [input,setInput]=useState('')

  useEffect(() => {
  db.collection('todo').orderBy('timestamp','desc').onSnapshot(snapshot=>{ //here todos is the collection name
   
    setTodos(snapshot.docs.map(doc => ({id:doc.id , todo:doc.data().todo})))
    
  })
  }, [])

  const addTodo=(event)=>{
    event.preventDefault()
    db.collection('todo').add({
      todo:input,     //here todo is key and the input is value 
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
   setInput('')//will clear up the input after hitting submit
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      <form>
      
      <FormControl>
      <InputLabel>Write a todo</InputLabel>
      <Input  type='text' value={input} onChange={event=>setInput(event.target.value)} />
  
       </FormControl>
      <Button disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary">
       Add todo
       </Button>
      {/* <button type='submit' onClick={addTodo}>Add todo</button> */}

      </form>
      <ul>
        {todos.map(todo=>(
        <Todo text={todo}/>
        ))}
      </ul>

    </div>
  );
}

export default App;

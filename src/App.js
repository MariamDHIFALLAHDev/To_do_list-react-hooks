import React,{useState} from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Form from'./Form' ;

import FormEdit from './FormEdit'

export default()=> {

  const [todo,setTodo]=useState([]); 

  

  
  const removeTodo = index => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);      //fonction supprimer
    setTodo(newTodo);
  };

  const editToDo=(index,newTodo)=>{
    console.log(newTodo)

    setTodo(todo.map((task,k)=>index===k?    // fonction modifier
      {...todo,text:newTodo}:task));
  
    console.log(todo);
  
    }  
 




  return ( 

  <>
  <div className="App">


  <Form onSubmit={text=>setTodo([{text,complete:false},...todo])}/>    
  

  <div id="listtodo">

  
  <ul>




  {todo.map(({text,complete},i)=>(text!=""?
    
    
    (<li key={i}>{text} <button className="editBtn" onClick={()=>{


  
      var changeValue=prompt("entrez une nouvelle valeur");
      localStorage.setItem('newtask', changeValue); 
      var newTask = localStorage.getItem('newtask');
      editToDo(i,newTask);

    }}>edit </button>
    
    
    
    
    
    
    
    
    
    
    
    

    
    <button className="removeBtn" onClick={()=>{
      
    removeTodo(i);
    
    
    
    
    
    
    }}>X</button> </li>):""))}
  
  </ul>

  
  </div>

  {todo.length !=0?(

  <button id="reset" onClick={()=>setTodo([])}>reset</button>):"" }
  </div>

  <div id="edit">


  </div> 
  </>

  );
}  



import React,{useState} from "react";
import './Form.css';

const useInputValue=initialValue=>{

const [value,setValue]=useState(initialValue);

return {

value,

onChange:e=>setValue(e.target.value),

resetValue:()=>setValue("")



}};



export default({onSubmit}) => {

const{resetValue,... text}=useInputValue("");


    return(

    <div>

    <form id="myDIV" onSubmit={e=>{
    
    e.preventDefault();
    
    onSubmit(text.value);

    resetValue();
    
    }}>
    <input  {...text } placeholder="To-Do"/> 
    <button id="addbutton" className="addBtn">Add</button>
    </form>

</div>);
};
import React,{useState} from 'react';




const FormEdit = (props) =>{
    
    
const [value,setValue]=useState("");
console.log(value)

return(

    <div>
    
    
    <form onSubmit={(e)=>{
        
        e.preventDefault();
        
        props.editTodo(props.index,{value});
}}>
    <input
        type="text"
        value={value}
        placeholder={props.initialValue}
        onChange={e => setValue(e.target.value)}
    />
</form>
    </div>
    






);






}
export default FormEdit ;
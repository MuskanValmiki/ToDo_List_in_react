import React,{useState} from "react"
import './App.css';

function App() {
    const [table,settable]=useState("");
    const [list,setlist]=useState([]);
    const deleteItem=(index)=>{
      const newArr=[...list]
      newArr.splice(index,1)
      setlist(newArr)
    }
    const editItem=(index)=>{
      const newList=[...list]
      let editText=prompt("Enter the edited value")
      if (editText.trim().length>0){
      newList[index]=editText
      setlist(newList)}

    }
    const completeItem=(index)=>{
      let newArr=[...list]
      newArr[index]=<strike>{newArr[index]}</strike>
      setlist(newArr)     
    }

  return (
    <div id="table">
      <h2>ToDo List</h2>
      <input type="text" placeholder="Enter your ToDo" value={table} onChange={(e)=>{
        settable(e.target.value)
      }}/>

      <button onClick={()=>{
        let newList=[...list]
        if (table.trim().length>0){
        newList.push(table)
        setlist(newList)}
        settable("")
        }}> Enter </button>

      {
        list.map((item,index)=>{
          return(
            <div key={index}>
              <h4>{item}</h4>
              <button onClick={()=>{deleteItem(index)}}>Delete</button>
              <button onClick={()=>{editItem(index)}}>Edit</button>
              <button onClick={()=>{completeItem(index)}}>Complete</button>
            </div>
          )
        })
      }
      </div>
  );
}

export default App;


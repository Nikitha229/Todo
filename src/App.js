import React,{useState} from 'react'
import Todolist  from './Todolist';
const App = () => {
  const [task,setTask]=useState('');
  const [data,setData]=useState([]);
  const handler=e=>{
    setTask(e.target.value);
  }
  const submitHandler=e=>{
    e.preventDefault();
    const newTodo=[...data,task];
    setData(newTodo);
    setTask("");
  }
  const deleteHandler=(indexvalue)=>{
    const newTodo=data.filter((todo,index)=> index !== indexvalue);
    setData(newTodo);
  }
  return (
    <div>
      <center>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Todo Management Application</h5>
          <form onSubmit={submitHandler}>
            <input type="text" value={task} onChange={handler}/>&nbsp; &nbsp;
            <input type="submit" value="Add" name="Add"/>
          </form>
          <Todolist todolist={data} deleteHandler={deleteHandler}/>
        </div>
      </div>
      </center>
    </div>
  )
}

export default App

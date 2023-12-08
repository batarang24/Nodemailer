import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import axios from 'axios'


function App() {
  const [email,semail]=useState('');
  const [sub,ssub]=useState('');
  const [content,scontent]=useState('');
  const clicker= async()=>{
      const obj={
        'mail':email,
        'sub':sub,
        'cont':content
      }
      axios.post('http://localhost:3001/post',obj).then((res)=>console.log(res))    
  }
  return (
    <div className="App">
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'90vh'}}>
          <div style={{width:'300px',padding:'50px',backgroundColor:'#ffffff91'}} >
            <input placeholder="Enter the email" style={{height:'30px',width:'200px'}} onChange={(e)=>{semail(e.target.value)}}></input><br/><br/> 
            <input placeholder="Subject"  style={{height:'30px',width:'200px'}} onChange={(e)=>{ssub(e.target.value)}}></input><br/><br/>
            <textarea placeholder="Write something...."  style={{resize:'none',height:'100px',width:'300px'}} onChange={(e)=>{scontent(e.target.value)}}></textarea><br/><br/>
            <button style={{height:'30px',backgroundColor:'black',color:'white',cursor:'pointer'}} onClick={clicker}>Send mail</button>
          </div>
        </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'90vh'}}>
          <div style={{width:'300px',padding:'50px',backgroundColor:'#ffffff91'}} >
            <input placeholder="Enter the email" style={{height:'30px',width:'200px'}}></input><br/><br/> 
            <input placeholder="Subject"  style={{height:'30px',width:'200px'}}></input><br/><br/>
            <textarea placeholder="Write something...."  style={{resize:'none',height:'100px',width:'300px'}} ></textarea><br/><br/>
            <button style={{height:'30px',backgroundColor:'black',color:'white',cursor:'pointer'}}>Send mail</button>
          </div>
        </div>
    </div>
  );
}

export default App;

import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [counter,setCounter] = useState(0);
  const [value,setValue] = useState(0);
  useEffect(()=>{
    console.log("useEffect one")
  },[])

  useEffect(()=>{
    console.log("useEffect two",)
  },[counter])  //값이 하나라도 바뀌면 한번 실행댐.
  return (
    <div>
       {console.log("useEffect")}
        <div>
          counter:{counter}
        </div>
       <button onClick={() => setCounter(counter+1) }>
          클릭!!
       </button>
    </div>

      //하나로 묶어서 반환.
  );
}

export default App;

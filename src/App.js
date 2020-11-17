import React, {useState} from 'react';
import { yes, no } from './objects';
import './App.css';
function App() {
  const [toggle, setToggle] = useState(false)
  return  ( 
    <>
    {toggle ? <h1>{yes["yes-statement"]}</h1> : <h1> {no["no-statement"]}</h1> }
    <img onClick ={() => setToggle(!toggle)} src={toggle ? yes["yes-image"] : no['no-image']} alt="yes image" srcset=""/>
    </>
    )
}

export default App;

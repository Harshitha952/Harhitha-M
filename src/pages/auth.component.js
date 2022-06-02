//import './Pages/Authpage/Auth.styles.css';
import {ref , set } from 'firebase/database';


import { async } from '@firebase/util';

import { createUserWithEmailAndPassword} from 'firebase/auth';
import { firebaseAuth } from '../backend/firebase-handler';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import './auth.style.css';
import '../pages/auth.style.css';

function Authpage() {
  const [userInput ,setuserInput] = useState({emailId:"",password:""})
  const nav =useNavigate();


  const handleClick=async()=>{
    try{
      await createUserWithEmailAndPassword(firebaseAuth, userInput.emailId ,userInput.password);
      alert("acount created")
      nav("/studentdetails")
      
    }catch(err){
      alert(err);
      
    }
  }

  const handleChange =(event) => {
    const {name , value }=event.target;

    setuserInput({
      ...userInput,
      [name]:value
    })
  }
  return (
    <div className='edata'>
    
    <div className='data'>
    <h2>Student Sign up Page</h2>
      <label>Email Id:</label>
  
      <input className='input' placeholder='Enter your Email Id' name ='emailId' type={'email'} value = {userInput.emailId} onChange={handleChange} />
      <br></br>
      <label>Password:</label>
     
      <input className='input' placeholder='Enter your Password' name ='password' type={'password'} value = {userInput.password} onChange={handleChange}/>
      <br></br>
 <button className="submit" onClick={handleClick}>Create Account</button>
    </div>
    </div>
  );
}
export default Authpage;


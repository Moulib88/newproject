import { useNavigate } from 'react-router-dom';
import React from 'react'
import './style.css'
export var Mouli = () => {
    const Navigate=useNavigate();
  return (
    <div className='main-card'>
        <div className='main-cardinner'>
            <div className='card-text'>LOGIN HERE </div>
            <div className='filedsplace'>
                
                    <input style={{width:'50%',height:'40px',color:'red',backgroundClip:'green'}} placeholder='Enter username'></input>
                
                </div>
                <div className='filedsplace'>
                
                    <input type="password" placeholder='Password' style={{width:'50%',height:'40px',color:'blue'}}></input>
               
                </div>
            <div className='logindiv'>
                    <button className='loginbutton' onClick={()=>{Navigate('/dashboard')}}>Login</button>
            </div>
        </div>
        
    </div>
  )
}
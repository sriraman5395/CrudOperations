import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate , Link } from 'react-router-dom';

export default function AddUser() {

    let navigate = useNavigate();
    const[user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })

    const onInputChangee=(e)=>{
        
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
        console.log([e.target.value]);
    }

    const{name,username,email}=user

    const onSubmit = async (e) =>{
        e.preventDefault();
        
        await axios.post("http://localhost:8080/user",user);
        navigate("/");
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Register user</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    
                    <label htmlFor='Name' className='form-label'>
                        Name
                    </label>
                    <input 
                    type={"text"} 
                    className='form-control' 
                    placeholder='Enter your name' 
                    name='name' 
                    value={name} 
                    onChange={onInputChangee}/>

                </div>

                <div className='mb-3'>
                    <label htmlFor='Username' className='form-label'>
                        Username
                    </label>
                    <input 
                    type={"text"} 
                    className='form-control' 
                    placeholder='Enter your username' 
                    name='username' 
                    value={username} 
                     onChange={onInputChangee}/>

                </div>

                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'>
                        Email
                    </label>
                    <input type={"text"} className='form-control' placeholder='Enter your email' name='email' value={email}  onChange={onInputChangee}/>

                </div>
                
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <Link  className='btn btn-outline-danger mx-2' to="/">Cancel</Link>

                </form>
               
            </div>
           
        </div>
        
        </div>
  )
}

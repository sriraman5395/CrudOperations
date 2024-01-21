import React, { useDebugValue, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate , Link, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigate = useNavigate();
    const {id} = useParams();

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


    useEffect(() =>{
      loadUsers();
    } , []);

    const onSubmit = async (e) =>{
        e.preventDefault();
        
        await axios.put(`http://localhost:8080/user/${id}`,user);
        navigate("/");
    }

    const loadUsers = async () =>{
      const result = await axios.get(`http://localhost:8080/user/${id}`,user);
      setUser(result.data);
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Edit user</h2>
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

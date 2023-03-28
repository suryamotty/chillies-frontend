import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

  const [email,setEmail]=useState('')
  const [password,setPswd]=useState('')

  let nav = useNavigate()
  
 const handleSubmit= async (e)=>{
  e.preventDefault()
  const body={
    
    email,
    password
  
  }
  console.log(body)

  //api call
  const result=  await axios.post('http://localhost:8000/login',body)
  alert(result.data.message)
  nav('/')

}

  return (
    <div>
        <div className='container border mt-5 p-5'>
      <form >
  
    <div className="mb-3">
      <label for="email" className="form-label">Email address</label>
      <input type="email" className="form-control" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
     
    </div>
    <div className="mb-3">
      <label for="password" className="form-label">Password</label>
      <input type="password" className="form-control" placeholder="Enter Password" onChange={(e)=>setPswd(e.target.value)}/>
    </div>
   
   
   
    <button type="submit" className="btn btn-success" onClick={(e)=>handleSubmit(e)}><b>Submit</b></button>
    <Link to='/add-user' className=' btn btn-warning m-3'><b>Signup</b></Link>
  </form>
   </div>
    </div>
  )
}

export default Login
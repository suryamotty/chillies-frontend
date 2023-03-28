import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';

function Signup() {

 
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPswd]=useState('')
  const [location,setLoc]=useState(0)

  let nav = useNavigate()

 const handleSubmit= async (e)=>{
  e.preventDefault()

  const body={
    name,
    email,
    password,
    location
  }
  console.log(body)

  //api call
  const result=  await axios.post('http://localhost:8000/add-user',body)
  alert(result.data.message)
  nav('/login')
  }
  return (
    <>

   <div className='container border mt-5 p-5'>
      <form >
      <div className="mb-3">
      <label for="exampleInputName" className="form-label">Name</label>
      <input type="text" className="form-control" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
     
    </div>
    <div className="mb-3">
      <label for="email" className="form-label">Email address</label>
      <input type="email" className="form-control" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
     
    </div>
    <div className="mb-3">
      <label for="password" className="form-label">Password</label>
      <input type="password" className="form-control" placeholder="Enter Password" onChange={(e)=>setPswd(e.target.value)}/>
    </div>
    <div className="mb-3">
      <label for="location" className="form-label">Location</label>
      <input type="password" className="form-control" placeholder="Enter Location" onChange={(e)=>setLoc(e.target.value)}/>
    </div>
   
    <button type="submit" className="btn btn-success" onClick={(e)=>handleSubmit(e)}><b>Submit</b></button>
    <Link to='/login' className=' btn btn-warning m-3'><b>Already a User</b></Link>
  </form>
   </div>
    </>
  )
}

export default Signup
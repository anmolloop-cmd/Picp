import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
import Login from '../Cars/Login';

function Register() {
  const[user,setUser]=useState({
    name:"",email:"",password:""
  });
  const handleChange=(e)=>{
    console.log(e);
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
  }));
  };
  return (
    <div className="container1">
   <form>
  <div className="form-outline mb-4">
  <label className="form-label" for="form2Example1">Name </label>
    <input type="text" id="form2Example1" value={user.name}  name="name"
    onChange={handleChange}
    className="form-control" />
  <label className="form-label" for="form2Example1">Choose login Id</label>
    <input type="email" id="form2Example1" value={user.email}  name="email"
    onChange={handleChange}
    className="form-control" />
<label className="form-label" for="form2Example1">Login Id is Required at Time of Login </label>
  </div>
  <select id="op1" className="form-select" aria-label="Default select example">
  <option selected>Select Category</option>
  <option value="1">Car</option>
  <option value="2">Choclate</option>
  <option value="3">Color</option>
</select>
<br/>
  <Login data={user}/>
  {/* <div className="d-grid gap-2">
  <button onClick={()=> {
    let selectElement = document.querySelector('#op1');
    let output = selectElement.value;
    if(output==='1'){
      window.open('/login/imagecars','_self');
  }}}
  className="btn btn-danger" type="button" >Choose Password</button>
  <button onClick={()=> {window.history.back();}}
  className="btn btn-warning" type="button">Move Back</button>
  <button onClick={()=> {window.open('/login','_self')}}
  className="btn btn-success" type="button">Reset</button>
</div> */}
  <div className="text-center">
    <p>Not a member? <a href="./create-a-account">Register</a></p>
  </div>
    </form>
    </div>
  );
}

export default Register;

import 'bootstrap/dist/css/bootstrap.min.css';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
import './App.css'

function Login() {
  return (
    <div className="container1">
   <form>
  <div className="form-outline mb-4">
  <label className="form-label" for="form2Example1">Enter login Id</label>
    <input type="email" id="form2Example1" className="form-control" />
    <label className="form-label" for="form2Example1">Login Id is Unique Created at time of Account Creation</label>
  </div>
  <select id="op1" className="form-select" aria-label="Default select example">
  <option selected>Select Category</option>
  <option value="1">Car</option>
  <option value="2">Choclate</option>
  <option value="3">Color</option>
</select>
<br/>
  <div className="d-grid gap-2">
  <button onClick={()=> {
    let selectElement = document.querySelector('#op1');
    let output = selectElement.value;
    if(output==='1')
    window.open('/login/imagecars','_self');
  }}
  className="btn btn-danger" type="button" >Choose Picture</button>
  <button onClick={()=> {window.history.back();}}
  className="btn btn-warning" type="button">Move Back</button>
  <button onClick={()=> {window.open('/login','_self')}}
  className="btn btn-success" type="button">Reset</button>
</div>
  <div className="text-center">
    <p>Not a member? <a href="./create-a-account">Register</a></p>
  </div>
    </form>
    </div>
  );
}

export default Login;

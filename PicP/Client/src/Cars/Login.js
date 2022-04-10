import React, { useState } from 'react';
import white from './white.png';
import pCar1 from './Cars/1.png';
import pCar2 from './Cars/2.png';
import pCar3 from './Cars/3.png';
import pCar4 from './Cars/4.png';
import pCar5 from './Cars/5.png';
import pCar6 from './Cars/6.png';
import pCar7 from './Cars/7.png';
import pCar8 from './Cars/8.png';
import pCar9 from './Cars/9.png';
import pCar10 from './Cars/10.png';
import pCar11 from './Cars/11.png';
import pCar12 from './Cars/12.png';
import pCar13 from './Cars/13.png';
import pCar14 from './Cars/14.png';
import pCar15 from './Cars/15.png';
import pCar16 from './Cars/16.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
import './App.css';
var p;
const  PostData=async(e)=>{
  e.preventDefault();
  const{name,login,password}=p.data;
  // const res=await fetch("/register",{
  //   method:"POST",
  //   headers:{
  //     "Content-Type":"application/json"
  //   },
  //   body:JSON.stringify({
  //     name,login,password
  //   })});
  //   const data=await res.json();
  //     console.log("anmol");
  }
function Login(props) {
  p=props;
  const [count, setCount] = useState(0);
  const [password, setPassword] = useState("");
  return (
      <div class="container">
      <table id="pics">
      <tr>
      <td><img id="first" className='pCar1' src={pCar1} onClick={()=>{document.getElementsByClassName("pCar1").first.src=white
      ;setCount(count+1);
      setPassword(password+"1");
      }} alt="img"/></td>
      <td><img id="first" className='pCar2' src={pCar2} onClick={()=>{document.getElementsByClassName("pCar2").first.src=white
      ;setCount(count+1);
      setPassword(password+"2");
      }}
      alt="img"/></td>
      <td><img id="first" className='pCar3' src={pCar3} onClick={()=>{document.getElementsByClassName("pCar3").first.src=white
      ;setCount(count+1);
      setPassword(password+"3");
      }}
      alt="img"/></td>
      <td><img id="first" className='pCar4' src={pCar4} onClick={()=>{document.getElementsByClassName("pCar4").first.src=white
      ;setCount(count+1);
      setPassword(password+"4");
      }}
      alt="img"/></td>
    </tr>
    <tr>
      <td><img id="first" className='pCar5' src={pCar5} onClick={()=>{document.getElementsByClassName("pCar5").first.src=white
      ;setCount(count+1);
      setPassword(password+"5");
      }}
      alt="img"/></td>
      <td><img id="first" className='pCar6' src={pCar6} onClick={()=>{document.getElementsByClassName("pCar6").first.src=white
      ;setCount(count+1);
      setPassword(password+"6");
      }}
      alt="img"/></td>
      <td><img id="first" className='pCar7' src={pCar7} onClick={()=>{document.getElementsByClassName("pCar7").first.src=white
      ;setCount(count+1);
      setPassword(password+"7");
      }}
      alt="img"/></td>
      <td><img id="first" className='pCar8' src={pCar8} onClick={()=>{document.getElementsByClassName("pCar8").first.src=white
      ;setCount(count+1);
      setPassword(password+"8");
      }}
      alt="img"/></td>
    </tr>
    <tr>
      <td><img id="first" className='pCar9' src={pCar9} onClick={()=>{document.getElementsByClassName("pCar9").first.src=white
      ;setCount(count+1);
      setPassword(password+"9");
      }}
      alt="img"/></td>
      <td><img id="first" className='pCar10' src={pCar10} onClick={()=>{document.getElementsByClassName("pCar10").first.src=white
      ;setCount(count+1);
      setPassword(password+"10");
      }}
      alt="img"/></td>
      <td><img id="first" className='pCar11' src={pCar11} onClick={()=>{document.getElementsByClassName("pCar11").first.src=white
      ;setCount(count+1);
      setPassword(password+"11");
      }}
      alt="img"/></td>
      <td><img id="first" className='pCar12' src={pCar12} onClick={()=>{document.getElementsByClassName("pCar12").first.src=white
      ;setCount(count+1);
      setPassword(password+"12");
      }}
      alt="img"/></td>
    </tr>
    <tr>
      <td><img id="first" className='pCar13' src={pCar13} onClick={()=>{document.getElementsByClassName("pCar13").first.src=white
      ;setCount(count+1);
      setPassword(password+"13");
      }}
      alt="img"/></td>
      <td><img id="first" className='pCar14' src={pCar14} onClick={()=>{document.getElementsByClassName("pCar14").first.src=white
      ;setCount(count+1);
      setPassword(password+"14");
      }}
      alt="img"/></td>
      <td><img id="first" className='pCar15' src={pCar15} onClick={()=>{document.getElementsByClassName("pCar15").first.src=white
      ;setCount(count+1);
      setPassword(password+"15");
      }}
      alt="img"/></td>
      <td><img id="first" className='pCar16' src={pCar16} onClick={()=>{document.getElementsByClassName("pCar16").first.src=white
      ;setCount(count+1);
      setPassword(password+"16");
      }}
      alt="img"/></td>
      </tr>
      <tr>
      <td colspan="4"><br/></td>
      </tr>
      <tr>
      <td colspan="4"><div class="d-grid gap-2 col-16 mx-auto">
        <button class="btn btn-primary" type="button" onClick={PostData}>CreateAccount</button>
        </div></td>
      </tr>
      <tr>
      <td colspan="4"><div class="d-grid gap-2 col-16 mx-auto">
        <button onClick={()=> {window.open('/create-a-account','_self')}}
        class="btn btn-warning" type="button">Reset</button>
        </div></td>
      </tr>
  </table>
    </div>
  );
}

export default Login;

import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import App from '../Home/App.js';
import About from './About.js';
import Cars from './Cars.js';
import Login from './Login.js';

import CreateAccount from './CreateAccount.js';

function Home() {
  return (
    <div>
      <Routes>
     <Route exact path="/" element={<App/>}/>
     <Route exact path="/aboutus" element={<About/>}/>
     <Route exact path="/login" element={<Login/>}/>
     <Route exact path="/login/imagecars" element={<Cars/>}/>
     <Route exact path="/create-a-account" element={<CreateAccount/>}/>
     </Routes>
    </div>
  );
}

export default Home;

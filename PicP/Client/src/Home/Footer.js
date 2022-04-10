import 'bootstrap/dist/css/bootstrap.min.css';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
import logo from './images/logo.png'

function Footer() {
  return (
    <div>
    <div className="text-center text-black p-3">
      © 2022 Copyright:
      <img src={logo} alt="" width="30" height="24"/>
      <a className="text-black" href="./">PicP Team</a>
    </div>
    </div>
  );
}

export default Footer;

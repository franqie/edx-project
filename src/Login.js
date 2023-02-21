import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiBankFill } from'react-icons/ri';
// import { AiFillEye, AiFillEyeInvisible } from'react-icons/ai';
import img1 from './visible.svg';
import img2 from './invisible.svg';

const Login = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="content">
      <form>
        <div>
          <input type="text" id="useremail" name="useremail" placeholder=" " required />
          <label htmlFor="useremail"
          className="label">
            Username or email
          </label>
        </div>
        <div>
          <input type={`${visible ? "text" : "password"}`} id="password" name="password" placeholder=" " required />
          <label htmlFor="password"
          className="label">
            Password
          </label>
          <button 
            type="button"
            className="visible"
            onClick={() => setVisible(!visible)}>
            { visible ? <img src={img1} alt="" /> : <img src={img2} alt="" />}
          </button>
        </div>
        <div className="buttons">
          <button type="submit">Sign in</button>
          <Link to="/reset">Forgot password</Link>
        </div>
      </form>
      <div className="options">
        <h3>Or register with:</h3>
        <a href="#" className="other">
          <RiBankFill />
          <span>Company or school credentials</span>
        </a>
        <div className="socials">
          <a href="" className="apple">
            <img 
              src="https://edxuploads.s3.amazonaws.com/Left_White_Logo_Large2x.png"
              alt=""
            />
            <span>Apple</span>
          </a>
          <a href="" className="facebook">
            <img 
              src="https://edxuploads.s3.amazonaws.com/f_logo_RGB-White_58.png"
              alt=""
            />
            <span>Facebook</span>
          </a>
          <a href="" className="google">
            <img 
              src="https://edxuploads.s3.amazonaws.com/btn_google_light.svg"
              alt=""
            />
            <span>Google</span>
          </a>
          <a href="" className="microsoft">
            <img 
              src="https://edxuploads.s3.amazonaws.com/MSFT-logo-only.png"
              alt=""
            />
            <span>Microsoft</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login;
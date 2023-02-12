import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from'react-icons/ai';
import Dropdown from './Dropdown';

const Register = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="content">
      <form>
        <div>
          <input type="text" id="fullname" name="fullname" placeholder=" " required />
          <label htmlFor="fullname"
           className="label">
            Full name
          </label>
        </div>
        <div>
          <input type="email" id="email" name="email" placeholder=" " required />
          <label htmlFor="email"
           className="label">
            Email
          </label>
        </div>
        <div>
          <input type="text" id="username" name="username" placeholder=" " required />
          <label htmlFor="username"
           className="label">
            Public username
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
            { visible ? <AiFillEyeInvisible /> : <AiFillEye/>}
          </button>
        </div>
        <div>
          <Dropdown />
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="checkbox" className="checkbox"/>
          <label className="checkbox-label" htmlFor="checkbox">I agree that edX may send me marketing messages.</label>
        </div>
        <p>
        By creating an account, you agree to the <a>Terms
         of Service and Honor Code</a> in a new tab and you 
         acknowledge that edX and each Member process 
         your personal data in accordance with the 
         <a>Privacy Policy</a>.
        </p>
        <button type="submit">Create an account for free</button>
      </form>
      <div className="options">
        <h3>Or register with:</h3>
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

export default Register;
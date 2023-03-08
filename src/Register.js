import React, { useState } from 'react';
// import { AiFillEye, AiFillEyeInvisible } from'react-icons/ai';
import Dropdown from './Dropdown';
// import img1 from './visible.svg';
// import img2 from './invisible.svg';
import InputComponent from './InputComponent';

const Register = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="content">
      <form>
        <InputComponent
          type="text"
          name="fullname"
          label="Full name"
          msg="This name will be used by any certificates that you earn."
          errorMsg="Enter your full name" 
        />
        <InputComponent
          type="email"
          name="email"
          label=" Email"
          msg="For account activation and important updates"
          errorMsg="Enter your email" 
        />
        <InputComponent
          type="text"
          name="username"
          label="Public Username"
          msg="The name that will identify you in your course"
          errorMsg="Username must be between 2 and 30 characters" 
        />
        <InputComponent
          type={`${visible ? "text" : "password"}`}
          name="password"
          label=" Password"
          errorMsg="Password criteria has not been met"
          visible={visible}
          setVisible={setVisible} 
        />
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
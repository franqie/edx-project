import React from 'react';
import InputComponent from './InputComponent';

const Reset = () => {
  return (
    <div className="content">
      <div className="header">
        <h3>Reset password</h3>
        <p>
          Please enter your email address below and 
          we will send you an email with instructions 
          on how to reset your password.
        </p>
      </div>
      <form>
      <InputComponent
          type="email"
          name="email"
          label=" Email"
          msg="The email address you used to register with edX"
          errorMsg="Enter your email" 
        />
        <div className="buttons">
          <button type="submit">Submit</button>
          <a href="">Need help signing in?</a>
        </div>
      </form>
      <div className="additional">
        <p>For additional help, contact edX support at <a>info@edx.org</a></p>
      </div>
    </div>
  )
}

export default Reset;
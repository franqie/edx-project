import React from 'react';

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
        <div>
          <input type="email" id="email" name="email" placeholder=" " required />
          <label htmlFor="email"
          className="label">
            Email
          </label>
        </div>
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
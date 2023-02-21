import React, { useState } from 'react';
import img1 from './visible.svg';
import img2 from './invisible.svg';

const InputComponent = ({type, name, label, msg, errorMsg, visible, setVisible}) => {
    const [showMsg, setShowmsg] = useState(false);
    const [error, setError] = useState(false);

    const handleFocus = () => {
        setShowmsg(true);
        setError(false);
    }

    const handleBlur = (e) => {
        const val = e.target.value.trim();

        if (val.length <= 0) {
            setShowmsg(false);
            setError(true);
        }
    }
  return (
    <div>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`${error ? 'empty' : null}`}
        type={type}
        id={name}
        name={name}
        placeholder=" "
        required />
      <label htmlFor={name} className="label">{ label }</label>
      { name === "password" &&
          <button
            type="button"
            className="visible"
            onClick={() => setVisible(!visible)}>
            { visible ? <img src={img1} alt="" /> : <img src={img2} alt="" />}
          </button>}
      <span className={`${showMsg ? 'show' : null}`}>{msg}</span>
      <span className={`${error ? 'error show' : 'error'}`}>{errorMsg}</span>
    </div>
  )
}

export default InputComponent;
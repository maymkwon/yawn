import React from 'react';

const InputTest = ({ onblur, onfocus, top, size, opacity, show}) => {
  return (
    <div className="col-3 input-effect" style={{}}>
      <input 
        className="effect-16"
        type="text"
        placeholder=""
        onFocus={() => onfocus()}
        onBlur={() => onblur()} />
      <label 
        style={{ 
          transform: `translateY(-${top}px)`,
          display: 'inline-block',
          fontSize: size
        }}>
        First Name
      </label>
      {show ? <span style={{ opacity, transform: `translateY(${top}px)`, display: 'block' }}>on!!!</span> : null}
      <span className="focus-border"></span>
      <input 
        className="effect-16"
        type="text"
        placeholder=""
        onFocus={() => onfocus()}
        onBlur={() => onblur()} />
      <label 
        style={{ 
          transform: `translateY(-${top}px)`,
          display: 'inline-block',
          fontSize: size
        }}>
        First Name
      </label>
      {show ? <span style={{ opacity, transform: `translateY(${top}px)`, display: 'block' }}>on!!!</span> : null}
      <span className="focus-border"></span>
    </div>
  );
};

export default InputTest;
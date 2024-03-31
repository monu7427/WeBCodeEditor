import React, { useRef } from 'react';

function TextArea(props) {
  return (
    <div>
      <label htmlFor="" className='labelLang'>
        <i className={`bx ${props.iconSrc}`} ></i>{props.label}
      </label>
      <textarea autoFocus={props.autofocus} onKeyUp={props.run} spellCheck="false" ref={props.Ref}></textarea>
    </div>
  );
}

export default TextArea;


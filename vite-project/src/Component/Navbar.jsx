import React from 'react';

function Navbar(props) {
  return (
    <div className="nav">
      <h3 id="head3">
        <i className="bx bxs-user"></i> {props.username}
      </h3>
      <h1 className="MainHeading">
        <i className="bx bx-code-alt" id="i1"></i>{props.h2text}
        <i className="bx bx-code-alt" id="i2"></i>
      </h1>
    </div>
  );
}

export default Navbar;

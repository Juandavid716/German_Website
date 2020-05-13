import React from 'react';
import '../css/box.css';

function Boxadj(props) {
  return (
    <div className="box-father-adj">
      <div className="box-adj">
        <h3> {props.c1}</h3>
        <p>
          <em> {props.c2}</em>
        </p>
      </div>
    </div>
  );
}

export default Boxadj;

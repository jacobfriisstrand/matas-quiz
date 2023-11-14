import React from "react";

function PText(props) {
  return (
    <div>
      <p className="font-semibold">{props.brand}</p>
      <p>{props.title}</p>
    </div>
  );
}

export default PText;

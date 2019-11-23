import React from "react";

function Result(props) {
  console.log("props in Result:", props);
  return <div>{props.result}</div>;
}

export default Result;

import React from "react";
import Result from "./Result";

export default function SearchForm(props) {
  return (
    <div>
      {props.results.map((result, i) => {
        return <Result key={i} result={result} />;
      })}
    </div>
  );
}

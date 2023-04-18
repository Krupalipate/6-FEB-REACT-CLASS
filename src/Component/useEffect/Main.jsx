import React, { Component, useEffect, useState } from "react";

function Main() {
  // useEffect pachu run thase jyare update thase tyare EX:- number
  // and whenever the state change the useEffect will run again       component update
  const [number, setnumber] = useState(0);

  const [isShowing, setIsShowing] = useState("false");

  // useEffect tyare run thase jyare Component mount thase   uper jate j inport thai jase .
  // useEffect 1 function che .te jate j call thai jase

  //***** */ when ever component mount at that time the useEffect   ***
  useEffect(() => {
    console.log("component mount");
  }, [number]);
  // if you want to run useEffect only the first time then you can give an empty dependancy.
  // useEffect just 1 j var run karavu hoi to [ ]  array aapi devu

  return (
    <div className="container">
      <h2>Learning useEffect</h2>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h1>{number}</h1>
            <button
              className="btn btn-primary"
              onClick={() => setnumber(number + 1)}
            >
              +
            </button>

            <button
              className="btn btn-danger"
              onClick={() => setnumber(number - 1)}
            >
              -
            </button>
          </div>
          <button
            className="btn btn-success"
            onClick={() => setIsShowing(!isShowing)}
          >
            Hide/show
          </button>
          {isShowing ? <h2>hello is i am showing</h2> : null}
        </div>
      </div>
      </div>
      

  );
}

export default Main;

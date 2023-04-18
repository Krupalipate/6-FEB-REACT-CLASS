import React from "react";
import Image from "./Image";
import { useState } from "react";

function Main() {
  const [isshowing, setIsShowing] = useState(false);
  return (
    <div className="container py-5">
      <button
        className="btn btn-primary mb-5 "
        onClick={() => setIsShowing(!isshowing)}
      >
        Hide/show
      </button>
      {isshowing ? <Image /> : null}
      {/* <Image /> */}
    </div>
  );
}

export default Main;

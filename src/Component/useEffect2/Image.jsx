import React, { useEffect } from "react";

function Image() {
    useEffect(() => {
    //   this code will executed when ever the component mount or any state value change .
    console.log("img component has been mount!");

        // when component get destroy then return function will run.
    return () => {
      console.log("img component has been unmount");
    };
  }, []);

  return (
    <div>
      <img
        src="https://images.indianexpress.com/2021/02/tom-and-jerry-1200.jpg"
        alt=""
        style={{ width: "600px", height: "50vh" }}
      />
    </div>
  );
}

export default Image;

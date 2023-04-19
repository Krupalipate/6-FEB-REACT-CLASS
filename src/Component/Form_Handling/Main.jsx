import React from "react";
import { useState } from "react";

function Main() {
  const [FirstName, setFirstNmae] = useState("krupali "); //('krupali')sting ni under value hoi to te  static value kevai ,  but daynamic karvani che .

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5 p-5 shadow">
          <form action="">
            <div className="mb-3">
              {/* label ni under for atribute aave but jsx ma htmlfor no use thai che  */}
              <label htmlFor="">First Name</label>
              {/* FirstName ni value empty string hoi to input ma value add kari
              devi */}
              {/* input ni under value karine attribute aave che jo aapne default
              value joiye */}
              <input
                type="text"
                className="form-control"
                value={FirstName}
                //   same process in html page vali
                onChange={(event) => setFirstNmae(event.target.value)}
                // uper string ma j krupali kari ne value lakhi che tene get karvani che to tena mate event.target.value
              />
            </div>
            <button className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Main;

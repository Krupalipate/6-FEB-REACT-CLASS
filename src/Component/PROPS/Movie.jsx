import React from "react";
// import { MovieList } from "./MovieList";
// import { MoviesList } from "./MoviesList";
// main.jsx no badho j data aa (props ) mathi  madi rese
const Movie = (props) => {
  // props vare vare ni lakhavu hoi to desructure karvu pade
  const { movieName, description, link ,addToWatchList} = props;     // ahiya bhi movies list
  // a data props through ave so teno props main mathi ave
  // a taru ui kevay 1 type movies .jsx che a


  return (
    <div className="col-md-4 mb-4">
      <div className="card" style={{ height: "100%" }}>
        <div className="card-body">
          <h3>
            Movie Name : {movieName}
            {/* Movie Name :{props.movieName}  vare vare props lakhavani jarur nathi*/}
          </h3>
          <p>
            {/* props 1 object jema aapde key ne access karvani che key nu name "description" che */}
            {description}
            {/* {props.description} */}
          </p>
        </div>
        <div className="card-footer">
          <a
            target="_new"
            href={link}
            // href={props.link}
            className="btn btn-primary"
          >
            More Details
          </a>

        <button className="btn btn-warning ms-5" onClick={() =>addToWatchList(movieName)}>Watchlist</button>
        </div>
      </div>
    </div>
  );
};

export default Movie;

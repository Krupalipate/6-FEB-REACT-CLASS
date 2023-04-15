import React, { useState } from "react";
import Movie from "./Movie";
import { MoviesList } from "./MoviesList";

// porps => its passes data from one component to another component
function Main  ()  {
  // console.log("movie list", movieList);
       
      // component 1 movielist show 
  const [movieData, setMovieData] = useState(MoviesList);

    //  component 2  je movie par click kare tenu name dekhavu joiye 
  const [selectedMovie, setSelectedMovie] = useState([]);
  function addToWatchList(singalMovieName) {
    
    setSelectedMovie([...selectedMovie,singalMovieName])
      // console.log("singalMovieName",singalMovieName)
         
  }

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="col-md-12">
        <div className="row">
      <title text="top 5 Movie Name"></title>
          
        {movieData.map((item) => {
          // console.log("item", item);
          const { id, movieName, description,link } = item;
          return (
            <Movie            // ahiya te Movies list map kryu htu
              key={id}
              movieName={movieName}
              description={description}        
              link={link}
              addToWatchList={addToWatchList}
            />
          );
        })}
      </div>
      </div>
        </div>
      <div className="col-md-4">
        <ul className="list-group">
          {
            selectedMovie.map((item, index) => {
              return (
                <li className="list-group-item" key={index}>{item}</li>
              );
            })}
        </ul>
       
      </div>
    </div>
      
    
  );
}

export default Main;

.container-fluid>.container>.row>.col-md-4
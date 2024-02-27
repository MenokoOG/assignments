// Movie.js
import React from "react";

function Movie(props) {
    const { title, genre, _id } = props;
    return (
        <div className="movie-card"> 
            <h1 className="movie-title">Title: {title}</h1> 
            <p className="movie-description">Genre: {genre}</p> 
        </div>
    );
}

export default Movie;
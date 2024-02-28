
import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";

function Movie(props) {
  const { title, genre, _id } = props;
  const [editToggle, setEditToggle] = useState(false);
  return (
    <div className="movie-card">
      {!editToggle ? (
        <>
          <h1 className="movie-title">Title: {title}</h1>
          <p className="movie-description">Genre: {genre}</p>
          <button
            className="delete-button"
            onClick={() => props.deleteMovie(_id)}
          >
            Delete
          </button>
          <button
            className="edit-btn"
            onClick={() => setEditToggle((prevToggle) => !prevToggle)}
          >
            Edit
          </button>
        </>
      ) : (
        <>
          <AddMovieForm
            title={title}
            genre={genre}
            _id={_id}
            btnText="Submit Edit"
            submit={props.editMovie}
          />
          <button
            className="close-btn"
            onClick={() => setEditToggle((prevToggle) => !prevToggle)}
          >
            Close
          </button>
        </>
      )}
    </div>
  );
}

export default Movie;

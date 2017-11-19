import React from 'react';
import Movie from './Movie';
import { Route } from 'react-router-dom';

const MovieCatalogue = (props) => {
    return (
        <div>
            <div className="movie-catalogue">
                {props.movies.map(movie => <Movie match={props.match} key={movie._id} fetchMovies={props.fetchMovies} {...movie} />)}
            </div>
        </div>
    );
};

export default MovieCatalogue;
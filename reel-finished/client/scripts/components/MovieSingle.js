import React from 'react';

class MovieSingle extends React.Component {
    constructor() {
        super();
        this.state = {
            _id: "",
            plot: "",
            director: "",
            year: 0,
            posterUrl: "",
            title: "",
        };
    }
    componentDidMount() {
        fetch(`/api/movies/${this.props.match.params.movieId}`, {

        })
        .then(response => response.json())
        .then((data) => {
            this.setState(data);
        });
    }
    render() {
        const { _id, plot, director, title, year, posterUrl } = this.state;
        return (
            <div>
               <h2>{title} ({year})</h2>
               <h3>{director}</h3>
               <img src={posterUrl} />
               <p>{plot}</p>
            </div>
        );
    }
}

export default MovieSingle;
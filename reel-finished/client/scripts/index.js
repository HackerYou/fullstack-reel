import React from 'react';
import { render } from 'react-dom';
import MovieCatalogue from './components/MovieCatalogue';
import Form from './components/Form';
import MovieSingle from './components/MovieSingle';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Replace this with your own components
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
        }
        this.fetchMovies = this.fetchMovies.bind(this);
    }
    render() {
        return (
            <Router>
                <div>
                    <header>
                        <h1>Reel</h1>
                        <Form fetchMovies={this.fetchMovies} />                
                    </header>
                    <Route exact path="/catalogue" render={(props) => <MovieCatalogue movies={this.state.movies.reverse()} {...props} />} />
                    <Route path="/catalogue/:movieId" component={MovieSingle} />
                </div>
            </Router>
        )
    };
    componentDidMount() {
        this.fetchMovies();
    }
    fetchMovies() {
        fetch('/api/movies')
            .then(resp => resp.json())
            .then(json => this.setState({ movies: json }));
    }
}

render(<App />, document.getElementById('app'));

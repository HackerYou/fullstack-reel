const Movie = require('./model.js');
const movies = {};

// GET
movies.getMovies = (req, res) => {
    Movie.find(function(err, docs) {
        if (err) {
            res
                .status(400)
                .send(err)
        } else {
            res
                .status(200)
                .send(docs)
        }
    });
};

movies.getMovieById = (req, res) => {
    const movieId = req.params.id;
    Movie.findById(movieId)
        .then(doc => {
            res
                .status(200)
                .send(doc);
        });
}

// POST
movies.postMovie = (req, res) => {
    const movieModel = new Movie();
    const movie = Object.assign(movieModel, req.body);
    movie.save((err, doc) => {
        if (err) {
            res
                .status(500)
                .send(err);
        }
        res
            .status(200)
            .send(doc);
    });
}

// DELETE
movies.deleteMovie = (req, res) => {
    const movieId = req.params.id;
    Movie.remove({ _id: movieId }, (err, doc) => {
        if (err) {
            res
                .status(500)
                .send(err);
        } else {
            res
                .status(200)
                .json({ message: 'Successfully Deleted!'});
            }
    });
}

//UPDATE
movies.updateMovie = (req, res) => {
    const model = req.body;
    console.log('body:', req.body);
    const movie = Movie.findById(req.params.id, (err, doc) => {
        if (err) {
            res
                .status(500)
                .send(err);
        } else {
            delete req.body._id;
            const updatedMovie = Object.assign(doc, model);
            updatedMovie.save((err, doc) => {
                if (err) {
                    res
                        .status(500)
                        .send(err);
                } else {
                    res
                        .status(200)
                        .send(doc);
                }
            });
        }
    });
}

module.exports = movies;
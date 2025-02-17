const movies = [];

const resolvers = {
  Query: {
    getAllMovies: () => movies,
    getMovieById: (_, { id }) => movies.find(movie => movie.id === id),
  },
  Mutation: {
    addMovie: (_, { name, director_name, production_house, release_date, rating }) => {
      const newMovie = { id: String(movies.length + 1), name, director_name, production_house, release_date, rating };
      movies.push(newMovie);
      return newMovie;
    },
    updateMovie: (_, { id, name, director_name, production_house, release_date, rating }) => {
      const movieIndex = movies.findIndex(movie => movie.id === id);
      if (movieIndex === -1) return null;
      
      const updatedMovie = { ...movies[movieIndex], name, director_name, production_house, release_date, rating };
      movies[movieIndex] = updatedMovie;
      return updatedMovie;
    },
    deleteMovie: (_, { id }) => {
      const movieIndex = movies.findIndex(movie => movie.id === id);
      if (movieIndex === -1) return "Movie not found";
      movies.splice(movieIndex, 1);
      return "Movie deleted successfully";
    }
  }
};

module.exports = resolvers;

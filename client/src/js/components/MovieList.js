var React = require('react');
var Movie = require('./Movie');
var MovieList = React.createClass({
  render: function() {
    var movieNodes = this.props.dataBox.map(function(movie) {
       return (
         <Movie allMovies={movie} key={movie.imdbID}>
         </Movie>
        );
      });

       return(
      <div className="movieList">
        {movieNodes}
      </div>
    );

  }
});

module.exports = MovieList;

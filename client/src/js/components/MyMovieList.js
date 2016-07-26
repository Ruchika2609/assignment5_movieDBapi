var React = require('react');
var MyMovie = require('./MyMovie');
var MyMovieList = React.createClass({
  render: function() {
    var movieNodes = this.props.dataBox.map(function(movie) {
       return (
         <MyMovie allMovies={movie} key={movie.imdbID}>
         </MyMovie>
        );
      });

       return(
      <div className="mymovieList">
        {movieNodes}
      </div>
    );

  }
});

module.exports = MyMovieList;

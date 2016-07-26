var React = require('react');
var MyMovie = React.createClass({
  updateMovie:function(){
      $.ajax({
    url:"http://localhost:8080/movies/update/?Title="+this.props.allMovies.Title,
  type:"POST",
  datatype:"JSON",
  data:this.props.allMovies,
  success: function(data)
  {
    console.log('Movie updated sucessfully');
  }.bind(this),
  error: function(err)
  {
    console.log(err);
  }.bind(this)
  });
  },

  deleteMovie:function(){
      $.ajax({
  url:"http://localhost:8080/movies/delete/?Title="+this.props.allMovies.Title,
  type:"POST",
  datatype:"JSON",
  data:this.props.allMovies,
  success: function(data)
  {
    console.log('Movie deleted from my movie list');
  }.bind(this),
  error: function(err)
  {
    console.log(err);
  }.bind(this)
 });
},
  render: function() {
    return (
      <div className="movie">
         <div className="col-md-12">
           <div className ="col-sm-6">
              <img src ={this.props.allMovies.Poster}/>
           </div>
           <div className ="col-sm-6">
               <h2 className="movieTitle">
                {this.props.allMovies.Title}
              </h2>
               <h3>
               Year: {this.props.allMovies.Year}
               </h3>
               <input type="submit" className="btn btn-block btn-info" value="Update" onClick={this.updateMovie}/>
               <input type="submit" className="btn btn-block btn-danger" value="Delete" onClick={this.deleteMovie}/>
            </div>
         </div>
      </div>
    );
  }
});
module.exports = MyMovie;

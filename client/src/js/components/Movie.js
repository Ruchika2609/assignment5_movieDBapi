var React = require('react');
var Movie = React.createClass({
  submitMovie:function(){

      $.ajax({
  url:"http://localhost:8080/movies/add",
  type:"POST",
  datatype:"JSON",
    data:this.props.allMovies,
  success: function(data)
  {
    console.log('Movie added to my movie list');
    console.log(data);
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
                <input type="submit" className="btn btn-block btn-warning" value="Add this movie to my list" onClick={this.submitMovie}/>
            </div>

         </div>



      </div>
    );
  }
});
module.exports = Movie;

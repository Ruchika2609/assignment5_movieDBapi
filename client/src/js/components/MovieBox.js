var React = require('react');
var MovieForm = require('./MovieForm');
var MovieList = require('./MovieList');
var MovieBox = React.createClass({
  getInitialState: function(){
     return{AllData:[]}
  },
  submitTitleData:function(movie){
    console.log(movie.Title);
    $.ajax({
  url:"http://www.omdbapi.com/?s="+movie.Title,
  type:'GET',
  datatype:"JSON",
  success: function(data)
  {
    console.log(data);
    this.setState({AllData:data.Search});

  }.bind(this),
  error: function(err)
  {
    console.log(err);
  }.bind(this)
});
  },
  render: function() {
    return (
      <div className="movieBox">

        <MovieForm handleSubmitTitle = {this.submitTitleData}/>
        <MovieList dataBox = {this.state.AllData}/>
      </div>
    );
  }
});
module.exports = MovieBox;

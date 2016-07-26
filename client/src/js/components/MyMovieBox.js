var React = require('react');
var MyMovieList = require('./MyMovieList');
var MyMovieBox = React.createClass({
  getInitialState: function(){
     return{AllData:[]}
  },
  render: function() {
    $.ajax({
  url:"http://localhost:8080/movies",
  type:'GET',
  datatype:"JSON",
  success: function(data)
  {
    console.log(data);
    this.setState({AllData:data});

  }.bind(this),
  error: function(err)
  {
    console.log(err);
  }.bind(this)
});
    return (
      <div className="movieBox">
        <MyMovieList dataBox = {this.state.AllData}/>
      </div>
    );
  }
});
module.exports = MyMovieBox;

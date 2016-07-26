var React=require('react');
var ReactDom=require('react-dom');
var MovieBox=require('./Components/MovieBox');
var MyMovieBox=require('./Components/MyMovieBox');
var {browserHistory, Router, Route, IndexRoute}=require('react-router');
var NavBar=require('./Components/NavBar');
var Home=require('./Components/Home');

var MainComponent = React.createClass({
  render:function() {
        return (
        <div className="MainComponent">
        <NavBar />
        <br/>
        {this.props.children}
        </div>
      );
    }
  });
ReactDom.render (
  <Router history = {browserHistory}>
    <Route path='/' component={MainComponent}>
      <IndexRoute component={Home}/>
      <Route path='search' component={MovieBox}/>
      <Route path='mymovies' component={MyMovieBox}/>
    </Route>
  </Router>,  document.getElementById('app')
);

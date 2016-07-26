var React = require('react');
var MovieForm = require('./MovieList');
var MovieForm = React.createClass({
 getInitialState: function(){
   return{Title:''}
 },

  handleTitleChange:function(e){
    this.setState({Title:e.target.value});
    },
submitTitle:function(e){
  e.preventDefault();
      this.props.handleSubmitTitle({Title:this.state.Title});
    },
  render: function() {
    return (
      <div>
         <form className="form-horizontal" onSubmit={this.submitTitle} >
           <fieldset>
        <center>
           <legend>Search Your Movie Here From OMBD</legend>
       </center>
           <div className="MovieForm">
             <div className="col-md-12">
             <input id="textInput" name="Title" type="text" placeholder="Enter Movie Name" className="form-control input-md"
             value= {this.state.Title} onChange={this.handleTitleChange}/>
               <input type="submit" className="btn btn-block btn-success" value="Enjoy!!"/>
             </div>
           </div>

           </fieldset>
         </form>
       </div>
    );
  },


});
module.exports = MovieForm;

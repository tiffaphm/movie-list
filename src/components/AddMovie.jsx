const AddMovie = (props) => (
  <div className="input-bar form-inline">
    <input className="form-control" type="text" onChange={props.getMovieValue}/>
    <button className="btn hidden-sm-down" onClick={props.addMovieToList}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

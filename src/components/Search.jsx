const Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={props.getSearchValue}/>
    <button className="btn hidden-sm-down" onClick={props.submitSearch}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
)
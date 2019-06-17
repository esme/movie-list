const Search = (props) => (
  <div className="Search">
    <input placeholder="Search..." 
      onChange={props.searchChangeHandler} 
      value={props.searchText}></input>
    <button className="btn-primary" onClick={() => {props.searchSubmitHandler()}}>Go</button>
  </div>
);

export default Search;
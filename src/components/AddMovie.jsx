const AddMovie = (props) => (
  <div className="AddMovie">
    <input placeholder="Add movie title here" 
      value={props.addMovieText}
      onChange={props.addChangeHandler}></input>
    <button className="btn-success" onClick={props.addSubmitHandler}>Add</button>
  </div>
);

export default AddMovie;
class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieClicked: false
    }
    this.movieClickedHandler = this.movieClickedHandler.bind(this);
  }

  movieClickedHandler() {
    console.log('clicked')
    this.setState({
      movieClicked: !this.state.movieClicked
    })
  }

  render() {
    let movieInfo =
    <div>
    </div>

    if(this.state.movieClicked) {
      movieInfo =
      <div className="MovieInfo">
        <img src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`}></img>
        <li>Year: {this.props.movie.release_date.slice(0,4)}</li>
        <li>Popularity: {this.props.movie.popularity}</li>
        <li>Vote Average: {this.props.movie.vote_average}</li>
        <li>Vote Count: {this.props.movie.vote_count}</li>
        <label>Watched: </label>
        <input type="radio" 
          checked={this.props.watchedList ? true : false}
          onChange={() => this.props.addWatchedHandler(this.props.movie, this.props.watchedList)}/>
        
        {/* <p><button 
          className={this.props.watchedList ? "btn-success" : "btn-outline-success"}
          onClick={() => this.props.addWatchedHandler(this.props.movie, this.props.watchedList)}>
          {this.props.watchedList ? 'watched' : 'watch'}</button></p> */}
      </div>
    }
    return (
      <div className="Movie">
      <li className="MovieTitle"
        onClick={this.movieClickedHandler}>{this.props.movie.title}</li>
      {movieInfo}
      </div>
    );
  }
}

export default Movie;
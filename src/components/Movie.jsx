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
        <li>Year: 1995</li>
        <li>Runtime: 107 min</li>
        <li>Metascore: 46</li>
        <li>IMDB Rating: 6.2</li>
        <p><button 
          className={this.props.watchedList ? "btn-success" : "btn-outline-success"}
          onClick={() => this.props.addWatchedHandler(this.props.movie, this.props.watchedList)}>
          {this.props.watchedList ? 'watched' : 'watch'}</button></p>
      </div>
    }
    return (
      <div className="MovieTitle">
      <li onClick={this.movieClickedHandler}>{this.props.movie.title}</li>
      {movieInfo}
      </div>
    );
  }
}

export default Movie;
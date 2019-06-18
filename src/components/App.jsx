import Movie from './Movie.js';
import Search from './Search.js'
import AddMovie from './AddMovie.js';

// var movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      addMovieText: '',
      watchedMovies: [],
      toWatchMovies: [],
      movies: [],
      watchedList: false,
      loaded: false
    }
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
    this.searchSubmitHandler = this.searchSubmitHandler.bind(this);
    this.addChangeHandler = this.addChangeHandler.bind(this);
    this.addSubmitHandler = this.addSubmitHandler.bind(this);
    this.addWatchedHandler = this.addWatchedHandler.bind(this);
    this.filterWatchedHandler = this.filterWatchedHandler.bind(this);
    this.filterToWatchHandler = this.filterToWatchHandler.bind(this);
  }

  componentDidMount() {
    console.log('mounted!')
    this.props.getMovieData((response) => {
      this.setState({
        watchedMovies: response.slice(15,20),
        toWatchMovies: response.slice(0,15),
        movies: response.slice(0,15),
        loaded: true
      })
    })
  }

  searchChangeHandler(e) {
    console.log(e.target.value)
    this.setState({
      searchText: e.target.value
    });
  }

  searchSubmitHandler() {
    console.log('submit!')
    this.setState({
      movies: this.state.movies.filter(el => el.title.toLowerCase().includes(this.state.searchText.toLowerCase())),
      searchText: ''
    })
  }

  addChangeHandler(e) {
    console.log(e.target.value)
    this.setState({
      addMovieText: e.target.value
    });
  }

  addSubmitHandler() {
    console.log('add!');
    let toWatchArr = [...this.state.toWatchMovies];
    console.log(toWatchArr);
    toWatchArr.push({title: this.state.addMovieText});
    this.setState({
      toWatchMovies: toWatchArr,
      addMovieText: ''
    })
  }

  addWatchedHandler(el, watchedState) {
    console.log(el, watchedState);

    // if video hasn't been watched, add video to watched list
    if(!watchedState) {
      // array to store watched movies
      let watchedArr = [...this.state.watchedMovies];
      // array to store towatch movies
      let towatchArr = [];

      watchedArr.push(el);

      for(let movie of this.state.movies) {
        if(movie.title !== el.title) {
          towatchArr.push(movie);
        }
      }
      this.setState({
        watchedMovies: watchedArr,
        toWatchMovies: towatchArr,
        movies: towatchArr
      })
    // if video has been watched, add video to towatch list
    } else {
      // array to store watched movies
      let watchedArr = [];
      // array to store towatch movies
      let towatchArr = [...this.state.toWatchMovies];

      towatchArr.push(el)

      for(let movie of this.state.movies) {
        if(movie.title !== el.title) {
          watchedArr.push(movie);
        }
      }
      this.setState({
        watchedMovies: watchedArr,
        toWatchMovies: towatchArr,
        movies: watchedArr
      })      
    }
  }

  filterWatchedHandler() {
    console.log('filter!')
    if(!this.state.watchedList) {
      this.setState({
        movies: this.state.watchedMovies,
        watchedList: !this.state.watchedList
      })
    }
  }

  filterToWatchHandler() {
    console.log('filter!')
    if(this.state.watchedList) {
      this.setState({
        movies: this.state.toWatchMovies,
        watchedList: !this.state.watchedList
      })
    }
  }

  render() {
    let movieList = <div>Loading...</div>
    if(this.state.loaded) {
      movieList = <ul className="MovieList">
      {this.state.movies.map((el, i) => 
        <Movie 
          movie={el} 
          key={el.title}
          watchSubmitHandler={this.watchSubmitHandler} 
          addWatchedHandler={this.addWatchedHandler} 
          watchedList={this.state.watchedList} />)}
      </ul>
    }
    return (
      <div className="Movies">
      <p className="Title">Movie List</p>
      <div>
        <div className="AddMovie">
          <AddMovie 
            addSubmitHandler={this.addSubmitHandler}
            addChangeHandler={this.addChangeHandler}
            addMovieText={this.state.addMovieText} />
        </div>
        <div className="Header">
          <button
            onClick={this.filterWatchedHandler}
            className={this.state.watchedList ? "btn-active" : "btn-inactive"}>Watched</button>
          <button
            onClick={this.filterToWatchHandler}
            className={this.state.watchedList ? "btn-inactive" : "btn-active"}>To Watch</button>
          <Search 
            searchChangeHandler={this.searchChangeHandler} 
            searchSubmitHandler={this.searchSubmitHandler}
            searchText={this.state.searchText} />
        </div>
        {movieList}
      </div>
    </div>
    );
  }
}

export default App;
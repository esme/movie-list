import Movie from './Movie.js';
import Search from './Search.js';
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
    };
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
    this.searchSubmitHandler = this.searchSubmitHandler.bind(this);
    this.addChangeHandler = this.addChangeHandler.bind(this);
    this.addSubmitHandler = this.addSubmitHandler.bind(this);
    this.addWatchedHandler = this.addWatchedHandler.bind(this);
    this.filterWatchedHandler = this.filterWatchedHandler.bind(this);
    this.filterToWatchHandler = this.filterToWatchHandler.bind(this);
  }

  componentDidMount() {
    console.log('mounted!');
    this.props.getMovieData(response => {
      this.setState({
        watchedMovies: response.slice(15, 20),
        toWatchMovies: response.slice(0, 15),
        movies: response.slice(0, 15),
        loaded: true
      });
    });
  }

  searchChangeHandler(e) {
    console.log(e.target.value);
    this.setState({
      searchText: e.target.value
    });
  }

  searchSubmitHandler() {
    console.log('submit!');
    this.setState({
      movies: this.state.movies.filter(el => el.title.toLowerCase().includes(this.state.searchText.toLowerCase())),
      searchText: ''
    });
  }

  addChangeHandler(e) {
    console.log(e.target.value);
    this.setState({
      addMovieText: e.target.value
    });
  }

  addSubmitHandler() {
    console.log('add!');
    let toWatchArr = [...this.state.toWatchMovies];
    console.log(toWatchArr);
    toWatchArr.push({ title: this.state.addMovieText });
    this.setState({
      toWatchMovies: toWatchArr,
      addMovieText: ''
    });
  }

  addWatchedHandler(el, watchedState) {
    console.log(el, watchedState);

    // if video hasn't been watched, add video to watched list
    if (!watchedState) {
      // array to store watched movies
      let watchedArr = [...this.state.watchedMovies];
      // array to store towatch movies
      let towatchArr = [];

      watchedArr.push(el);

      for (let movie of this.state.movies) {
        if (movie.title !== el.title) {
          towatchArr.push(movie);
        }
      }
      this.setState({
        watchedMovies: watchedArr,
        toWatchMovies: towatchArr,
        movies: towatchArr
      });
      // if video has been watched, add video to towatch list
    } else {
      // array to store watched movies
      let watchedArr = [];
      // array to store towatch movies
      let towatchArr = [...this.state.toWatchMovies];

      towatchArr.push(el);

      for (let movie of this.state.movies) {
        if (movie.title !== el.title) {
          watchedArr.push(movie);
        }
      }
      this.setState({
        watchedMovies: watchedArr,
        toWatchMovies: towatchArr,
        movies: watchedArr
      });
    }
  }

  filterWatchedHandler() {
    console.log('filter!');
    if (!this.state.watchedList) {
      this.setState({
        movies: this.state.watchedMovies,
        watchedList: !this.state.watchedList
      });
    }
  }

  filterToWatchHandler() {
    console.log('filter!');
    if (this.state.watchedList) {
      this.setState({
        movies: this.state.toWatchMovies,
        watchedList: !this.state.watchedList
      });
    }
  }

  render() {
    let movieList = React.createElement(
      'div',
      null,
      'Loading...'
    );
    if (this.state.loaded) {
      movieList = React.createElement(
        'ul',
        { className: 'MovieList' },
        this.state.movies.map((el, i) => React.createElement(Movie, {
          movie: el,
          key: el.title,
          watchSubmitHandler: this.watchSubmitHandler,
          addWatchedHandler: this.addWatchedHandler,
          watchedList: this.state.watchedList }))
      );
    }
    return React.createElement(
      'div',
      { className: 'Movies' },
      React.createElement(
        'p',
        { className: 'Title' },
        'Movie List'
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'AddMovie' },
          React.createElement(AddMovie, {
            addSubmitHandler: this.addSubmitHandler,
            addChangeHandler: this.addChangeHandler,
            addMovieText: this.state.addMovieText })
        ),
        React.createElement(
          'div',
          { className: 'Header' },
          React.createElement(
            'button',
            {
              onClick: this.filterWatchedHandler,
              className: this.state.watchedList ? "btn-active" : "btn-inactive" },
            'Watched'
          ),
          React.createElement(
            'button',
            {
              onClick: this.filterToWatchHandler,
              className: this.state.watchedList ? "btn-inactive" : "btn-active" },
            'To Watch'
          ),
          React.createElement(Search, {
            searchChangeHandler: this.searchChangeHandler,
            searchSubmitHandler: this.searchSubmitHandler,
            searchText: this.state.searchText })
        ),
        movieList
      )
    );
  }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWUiLCJTZWFyY2giLCJBZGRNb3ZpZSIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwic2VhcmNoVGV4dCIsImFkZE1vdmllVGV4dCIsIndhdGNoZWRNb3ZpZXMiLCJ0b1dhdGNoTW92aWVzIiwibW92aWVzIiwid2F0Y2hlZExpc3QiLCJsb2FkZWQiLCJzZWFyY2hDaGFuZ2VIYW5kbGVyIiwiYmluZCIsInNlYXJjaFN1Ym1pdEhhbmRsZXIiLCJhZGRDaGFuZ2VIYW5kbGVyIiwiYWRkU3VibWl0SGFuZGxlciIsImFkZFdhdGNoZWRIYW5kbGVyIiwiZmlsdGVyV2F0Y2hlZEhhbmRsZXIiLCJmaWx0ZXJUb1dhdGNoSGFuZGxlciIsImNvbXBvbmVudERpZE1vdW50IiwiY29uc29sZSIsImxvZyIsImdldE1vdmllRGF0YSIsInJlc3BvbnNlIiwic2V0U3RhdGUiLCJzbGljZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlciIsImVsIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwidG9XYXRjaEFyciIsInB1c2giLCJ3YXRjaGVkU3RhdGUiLCJ3YXRjaGVkQXJyIiwidG93YXRjaEFyciIsIm1vdmllIiwicmVuZGVyIiwibW92aWVMaXN0IiwibWFwIiwiaSIsIndhdGNoU3VibWl0SGFuZGxlciJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixZQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsYUFBbkI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGVBQXJCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47O0FBRUEsU0FBS0MsS0FB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LG9CQURoQjtBQUVFLHlCQUFXLEtBQUtkLEtBQUwsQ0FBV00sV0FBWCxHQUF5QixZQUF6QixHQUF3QyxjQUZyRDtBQUFBO0FBQUEsV0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFLHVCQUFTLEtBQUtTLG9CQURoQjtBQUVFLHlCQUFXLEtBQUtmLEtBQUwsQ0FBV00sV0FBWCxHQUF5QixjQUF6QixHQUEwQyxZQUZ2RDtBQUFBO0FBQUEsV0FKRjtBQU9FLDhCQUFDLE1BQUQ7QUFDRSxpQ0FBcUIsS0FBS0UsbUJBRDVCO0FBRUUsaUNBQXFCLEtBQUtFLG1CQUY1QjtBQUdFLHdCQUFZLEtBQUtWLEtBQUwsQ0FBV0MsVUFIekI7QUFQRixTQVBGO0FBbUJHcUM7QUFuQkg7QUFGQSxLQURGO0FBMEJEO0FBMUsrQjs7QUE2S2xDLGVBQWUzQyxHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZSBmcm9tICcuL01vdmllLmpzJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2guanMnXG5pbXBvcnQgQWRkTW92aWUgZnJvbSAnLi9BZGRNb3ZpZS5qcyc7XG5cbi8vIHZhciBtb3ZpZXMgPSBbXG4vLyAgIHt0aXRsZTogJ01lYW4gR2lybHMnfSxcbi8vICAge3RpdGxlOiAnSGFja2Vycyd9LFxuLy8gICB7dGl0bGU6ICdUaGUgR3JleSd9LFxuLy8gICB7dGl0bGU6ICdTdW5zaGluZSd9LFxuLy8gICB7dGl0bGU6ICdFeCBNYWNoaW5hJ30sXG4vLyBdO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hUZXh0OiAnJyxcbiAgICAgIGFkZE1vdmllVGV4dDogJycsXG4gICAgICB3YXRjaGVkTW92aWVzOiBbXSxcbiAgICAgIHRvV2F0Y2hNb3ZpZXM6IFtdLFxuICAgICAgbW92aWVzOiBbXSxcbiAgICAgIHdhdGNoZWRMaXN0OiBmYWxzZSxcbiAgICAgIGxvYWRlZDogZmFsc2VcbiAgICB9XG4gICAgdGhpcy5zZWFyY2hDaGFuZ2VIYW5kbGVyID0gdGhpcy5zZWFyY2hDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWFyY2hTdWJtaXRIYW5kbGVyID0gdGhpcy5zZWFyY2hTdWJtaXRIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRDaGFuZ2VIYW5kbGVyID0gdGhpcy5hZGRDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRTdWJtaXRIYW5kbGVyID0gdGhpcy5hZGRTdWJtaXRIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRXYXRjaGVkSGFuZGxlciA9IHRoaXMuYWRkV2F0Y2hlZEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZpbHRlcldhdGNoZWRIYW5kbGVyID0gdGhpcy5maWx0ZXJXYXRjaGVkSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmlsdGVyVG9XYXRjaEhhbmRsZXIgPSB0aGlzLmZpbHRlclRvV2F0Y2hIYW5kbGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZygnbW91bnRlZCEnKVxuICAgIHRoaXMucHJvcHMuZ2V0TW92aWVEYXRhKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHdhdGNoZWRNb3ZpZXM6IHJlc3BvbnNlLnNsaWNlKDE1LDIwKSxcbiAgICAgICAgdG9XYXRjaE1vdmllczogcmVzcG9uc2Uuc2xpY2UoMCwxNSksXG4gICAgICAgIG1vdmllczogcmVzcG9uc2Uuc2xpY2UoMCwxNSksXG4gICAgICAgIGxvYWRlZDogdHJ1ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgc2VhcmNoQ2hhbmdlSGFuZGxlcihlKSB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWFyY2hUZXh0OiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoU3VibWl0SGFuZGxlcigpIHtcbiAgICBjb25zb2xlLmxvZygnc3VibWl0IScpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb3ZpZXM6IHRoaXMuc3RhdGUubW92aWVzLmZpbHRlcihlbCA9PiBlbC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc3RhdGUuc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpKSksXG4gICAgICBzZWFyY2hUZXh0OiAnJ1xuICAgIH0pXG4gIH1cblxuICBhZGRDaGFuZ2VIYW5kbGVyKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFkZE1vdmllVGV4dDogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFN1Ym1pdEhhbmRsZXIoKSB7XG4gICAgY29uc29sZS5sb2coJ2FkZCEnKTtcbiAgICBsZXQgdG9XYXRjaEFyciA9IFsuLi50aGlzLnN0YXRlLnRvV2F0Y2hNb3ZpZXNdO1xuICAgIGNvbnNvbGUubG9nKHRvV2F0Y2hBcnIpO1xuICAgIHRvV2F0Y2hBcnIucHVzaCh7dGl0bGU6IHRoaXMuc3RhdGUuYWRkTW92aWVUZXh0fSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b1dhdGNoTW92aWVzOiB0b1dhdGNoQXJyLFxuICAgICAgYWRkTW92aWVUZXh0OiAnJ1xuICAgIH0pXG4gIH1cblxuICBhZGRXYXRjaGVkSGFuZGxlcihlbCwgd2F0Y2hlZFN0YXRlKSB7XG4gICAgY29uc29sZS5sb2coZWwsIHdhdGNoZWRTdGF0ZSk7XG5cbiAgICAvLyBpZiB2aWRlbyBoYXNuJ3QgYmVlbiB3YXRjaGVkLCBhZGQgdmlkZW8gdG8gd2F0Y2hlZCBsaXN0XG4gICAgaWYoIXdhdGNoZWRTdGF0ZSkge1xuICAgICAgLy8gYXJyYXkgdG8gc3RvcmUgd2F0Y2hlZCBtb3ZpZXNcbiAgICAgIGxldCB3YXRjaGVkQXJyID0gWy4uLnRoaXMuc3RhdGUud2F0Y2hlZE1vdmllc107XG4gICAgICAvLyBhcnJheSB0byBzdG9yZSB0b3dhdGNoIG1vdmllc1xuICAgICAgbGV0IHRvd2F0Y2hBcnIgPSBbXTtcblxuICAgICAgd2F0Y2hlZEFyci5wdXNoKGVsKTtcblxuICAgICAgZm9yKGxldCBtb3ZpZSBvZiB0aGlzLnN0YXRlLm1vdmllcykge1xuICAgICAgICBpZihtb3ZpZS50aXRsZSAhPT0gZWwudGl0bGUpIHtcbiAgICAgICAgICB0b3dhdGNoQXJyLnB1c2gobW92aWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgd2F0Y2hlZE1vdmllczogd2F0Y2hlZEFycixcbiAgICAgICAgdG9XYXRjaE1vdmllczogdG93YXRjaEFycixcbiAgICAgICAgbW92aWVzOiB0b3dhdGNoQXJyXG4gICAgICB9KVxuICAgIC8vIGlmIHZpZGVvIGhhcyBiZWVuIHdhdGNoZWQsIGFkZCB2aWRlbyB0byB0b3dhdGNoIGxpc3RcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYXJyYXkgdG8gc3RvcmUgd2F0Y2hlZCBtb3ZpZXNcbiAgICAgIGxldCB3YXRjaGVkQXJyID0gW107XG4gICAgICAvLyBhcnJheSB0byBzdG9yZSB0b3dhdGNoIG1vdmllc1xuICAgICAgbGV0IHRvd2F0Y2hBcnIgPSBbLi4udGhpcy5zdGF0ZS50b1dhdGNoTW92aWVzXTtcblxuICAgICAgdG93YXRjaEFyci5wdXNoKGVsKVxuXG4gICAgICBmb3IobGV0IG1vdmllIG9mIHRoaXMuc3RhdGUubW92aWVzKSB7XG4gICAgICAgIGlmKG1vdmllLnRpdGxlICE9PSBlbC50aXRsZSkge1xuICAgICAgICAgIHdhdGNoZWRBcnIucHVzaChtb3ZpZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB3YXRjaGVkTW92aWVzOiB3YXRjaGVkQXJyLFxuICAgICAgICB0b1dhdGNoTW92aWVzOiB0b3dhdGNoQXJyLFxuICAgICAgICBtb3ZpZXM6IHdhdGNoZWRBcnJcbiAgICAgIH0pICAgICAgXG4gICAgfVxuICB9XG5cbiAgZmlsdGVyV2F0Y2hlZEhhbmRsZXIoKSB7XG4gICAgY29uc29sZS5sb2coJ2ZpbHRlciEnKVxuICAgIGlmKCF0aGlzLnN0YXRlLndhdGNoZWRMaXN0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbW92aWVzOiB0aGlzLnN0YXRlLndhdGNoZWRNb3ZpZXMsXG4gICAgICAgIHdhdGNoZWRMaXN0OiAhdGhpcy5zdGF0ZS53YXRjaGVkTGlzdFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJUb1dhdGNoSGFuZGxlcigpIHtcbiAgICBjb25zb2xlLmxvZygnZmlsdGVyIScpXG4gICAgaWYodGhpcy5zdGF0ZS53YXRjaGVkTGlzdCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1vdmllczogdGhpcy5zdGF0ZS50b1dhdGNoTW92aWVzLFxuICAgICAgICB3YXRjaGVkTGlzdDogIXRoaXMuc3RhdGUud2F0Y2hlZExpc3RcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBtb3ZpZUxpc3QgPSA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICBpZih0aGlzLnN0YXRlLmxvYWRlZCkge1xuICAgICAgbW92aWVMaXN0ID0gPHVsIGNsYXNzTmFtZT1cIk1vdmllTGlzdFwiPlxuICAgICAge3RoaXMuc3RhdGUubW92aWVzLm1hcCgoZWwsIGkpID0+IFxuICAgICAgICA8TW92aWUgXG4gICAgICAgICAgbW92aWU9e2VsfSBcbiAgICAgICAgICBrZXk9e2VsLnRpdGxlfVxuICAgICAgICAgIHdhdGNoU3VibWl0SGFuZGxlcj17dGhpcy53YXRjaFN1Ym1pdEhhbmRsZXJ9IFxuICAgICAgICAgIGFkZFdhdGNoZWRIYW5kbGVyPXt0aGlzLmFkZFdhdGNoZWRIYW5kbGVyfSBcbiAgICAgICAgICB3YXRjaGVkTGlzdD17dGhpcy5zdGF0ZS53YXRjaGVkTGlzdH0gLz4pfVxuICAgICAgPC91bD5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTW92aWVzXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJUaXRsZVwiPk1vdmllIExpc3Q8L3A+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFkZE1vdmllXCI+XG4gICAgICAgICAgPEFkZE1vdmllIFxuICAgICAgICAgICAgYWRkU3VibWl0SGFuZGxlcj17dGhpcy5hZGRTdWJtaXRIYW5kbGVyfVxuICAgICAgICAgICAgYWRkQ2hhbmdlSGFuZGxlcj17dGhpcy5hZGRDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgYWRkTW92aWVUZXh0PXt0aGlzLnN0YXRlLmFkZE1vdmllVGV4dH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVhZGVyXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5maWx0ZXJXYXRjaGVkSGFuZGxlcn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS53YXRjaGVkTGlzdCA/IFwiYnRuLWFjdGl2ZVwiIDogXCJidG4taW5hY3RpdmVcIn0+V2F0Y2hlZDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZmlsdGVyVG9XYXRjaEhhbmRsZXJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUud2F0Y2hlZExpc3QgPyBcImJ0bi1pbmFjdGl2ZVwiIDogXCJidG4tYWN0aXZlXCJ9PlRvIFdhdGNoPC9idXR0b24+XG4gICAgICAgICAgPFNlYXJjaCBcbiAgICAgICAgICAgIHNlYXJjaENoYW5nZUhhbmRsZXI9e3RoaXMuc2VhcmNoQ2hhbmdlSGFuZGxlcn0gXG4gICAgICAgICAgICBzZWFyY2hTdWJtaXRIYW5kbGVyPXt0aGlzLnNlYXJjaFN1Ym1pdEhhbmRsZXJ9XG4gICAgICAgICAgICBzZWFyY2hUZXh0PXt0aGlzLnN0YXRlLnNlYXJjaFRleHR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7bW92aWVMaXN0fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19
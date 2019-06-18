class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieClicked: false
    };
    this.movieClickedHandler = this.movieClickedHandler.bind(this);
  }

  movieClickedHandler() {
    console.log('clicked');
    this.setState({
      movieClicked: !this.state.movieClicked
    });
  }

  render() {
    let movieInfo = React.createElement("div", null);

    if (this.state.movieClicked) {
      movieInfo = React.createElement(
        "div",
        { className: "MovieInfo" },
        React.createElement(
          "li",
          null,
          "Year: ",
          this.props.movie.release_date.slice(0, 4)
        ),
        React.createElement(
          "li",
          null,
          "Popularity: ",
          this.props.movie.popularity
        ),
        React.createElement(
          "li",
          null,
          "Vote Average: ",
          this.props.movie.vote_average
        ),
        React.createElement(
          "li",
          null,
          "Vote Count: ",
          this.props.movie.vote_count
        ),
        React.createElement(
          "label",
          null,
          "Watched: "
        ),
        React.createElement("input", { type: "radio",
          checked: this.props.watchedList ? true : false,
          onChange: () => this.props.addWatchedHandler(this.props.movie, this.props.watchedList) })
      );
    }
    return React.createElement(
      "div",
      { className: "Movie" },
      React.createElement(
        "li",
        { className: "MovieTitle",
          onClick: this.movieClickedHandler },
        this.props.movie.title
      ),
      movieInfo
    );
  }
}

export default Movie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllLmpzeCJdLCJuYW1lcyI6WyJNb3ZpZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibW92aWVDbGlja2VkIiwibW92aWVDbGlja2VkSGFuZGxlciIsImJpbmQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJtb3ZpZUluZm8iLCJtb3ZpZSIsInJlbGVhc2VfZGF0ZSIsInNsaWNlIiwicG9wdWxhcml0eSIsInZvdGVfYXZlcmFnZSIsInZvdGVfY291bnQiLCJ3YXRjaGVkTGlzdCIsImFkZFdhdGNoZWRIYW5kbGVyIiwidGl0bGUiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEtBQU4sU0FBb0JDLE1BQU1DLFNBQTFCLENBQW9DO0FBQ2xDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsb0JBQWM7QUFESCxLQUFiO0FBR0EsU0FBS0MsbUJBQUwsR0FBMkIsS0FBS0EsbUJBQUwsQ0FBeUJDLElBQXpCLENBQThCLElBQTlCLENBQTNCO0FBQ0Q7O0FBRURELHdCQUFzQjtBQUNwQkUsWUFBUUMsR0FBUixDQUFZLFNBQVo7QUFDQSxTQUFLQyxRQUFMLENBQWM7QUFDWkwsb0JBQWMsQ0FBQyxLQUFLRCxLQUFMLENBQVdDO0FBRGQsS0FBZDtBQUdEOztBQUVETSxXQUFTO0FBQ1AsUUFBSUMsWUFDSixnQ0FEQTs7QUFJQSxRQUFHLEtBQUtSLEtBQUwsQ0FBV0MsWUFBZCxFQUE0QjtBQUMxQk8sa0JBQ0E7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBVyxlQUFLVCxLQUFMLENBQVdVLEtBQVgsQ0FBaUJDLFlBQWpCLENBQThCQyxLQUE5QixDQUFvQyxDQUFwQyxFQUFzQyxDQUF0QztBQUFYLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFpQixlQUFLWixLQUFMLENBQVdVLEtBQVgsQ0FBaUJHO0FBQWxDLFNBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFtQixlQUFLYixLQUFMLENBQVdVLEtBQVgsQ0FBaUJJO0FBQXBDLFNBSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFpQixlQUFLZCxLQUFMLENBQVdVLEtBQVgsQ0FBaUJLO0FBQWxDLFNBSkY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTEY7QUFNRSx1Q0FBTyxNQUFLLE9BQVo7QUFDRSxtQkFBUyxLQUFLZixLQUFMLENBQVdnQixXQUFYLEdBQXlCLElBQXpCLEdBQWdDLEtBRDNDO0FBRUUsb0JBQVUsTUFBTSxLQUFLaEIsS0FBTCxDQUFXaUIsaUJBQVgsQ0FBNkIsS0FBS2pCLEtBQUwsQ0FBV1UsS0FBeEMsRUFBK0MsS0FBS1YsS0FBTCxDQUFXZ0IsV0FBMUQsQ0FGbEI7QUFORixPQURBO0FBZ0JEO0FBQ0QsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLE9BQWY7QUFDQTtBQUFBO0FBQUEsVUFBSSxXQUFVLFlBQWQ7QUFDRSxtQkFBUyxLQUFLYixtQkFEaEI7QUFDc0MsYUFBS0gsS0FBTCxDQUFXVSxLQUFYLENBQWlCUTtBQUR2RCxPQURBO0FBR0NUO0FBSEQsS0FERjtBQU9EO0FBOUNpQzs7QUFpRHBDLGVBQWViLEtBQWYiLCJmaWxlIjoiTW92aWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNb3ZpZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZUNsaWNrZWQ6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMubW92aWVDbGlja2VkSGFuZGxlciA9IHRoaXMubW92aWVDbGlja2VkSGFuZGxlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbW92aWVDbGlja2VkSGFuZGxlcigpIHtcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb3ZpZUNsaWNrZWQ6ICF0aGlzLnN0YXRlLm1vdmllQ2xpY2tlZFxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IG1vdmllSW5mbyA9XG4gICAgPGRpdj5cbiAgICA8L2Rpdj5cblxuICAgIGlmKHRoaXMuc3RhdGUubW92aWVDbGlja2VkKSB7XG4gICAgICBtb3ZpZUluZm8gPVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJNb3ZpZUluZm9cIj5cbiAgICAgICAgPGxpPlllYXI6IHt0aGlzLnByb3BzLm1vdmllLnJlbGVhc2VfZGF0ZS5zbGljZSgwLDQpfTwvbGk+XG4gICAgICAgIDxsaT5Qb3B1bGFyaXR5OiB7dGhpcy5wcm9wcy5tb3ZpZS5wb3B1bGFyaXR5fTwvbGk+XG4gICAgICAgIDxsaT5Wb3RlIEF2ZXJhZ2U6IHt0aGlzLnByb3BzLm1vdmllLnZvdGVfYXZlcmFnZX08L2xpPlxuICAgICAgICA8bGk+Vm90ZSBDb3VudDoge3RoaXMucHJvcHMubW92aWUudm90ZV9jb3VudH08L2xpPlxuICAgICAgICA8bGFiZWw+V2F0Y2hlZDogPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMud2F0Y2hlZExpc3QgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMucHJvcHMuYWRkV2F0Y2hlZEhhbmRsZXIodGhpcy5wcm9wcy5tb3ZpZSwgdGhpcy5wcm9wcy53YXRjaGVkTGlzdCl9Lz5cbiAgICAgICAgXG4gICAgICAgIHsvKiA8cD48YnV0dG9uIFxuICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy53YXRjaGVkTGlzdCA/IFwiYnRuLXN1Y2Nlc3NcIiA6IFwiYnRuLW91dGxpbmUtc3VjY2Vzc1wifVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuYWRkV2F0Y2hlZEhhbmRsZXIodGhpcy5wcm9wcy5tb3ZpZSwgdGhpcy5wcm9wcy53YXRjaGVkTGlzdCl9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLndhdGNoZWRMaXN0ID8gJ3dhdGNoZWQnIDogJ3dhdGNoJ308L2J1dHRvbj48L3A+ICovfVxuICAgICAgPC9kaXY+XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIk1vdmllXCI+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwiTW92aWVUaXRsZVwiXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMubW92aWVDbGlja2VkSGFuZGxlcn0+e3RoaXMucHJvcHMubW92aWUudGl0bGV9PC9saT5cbiAgICAgIHttb3ZpZUluZm99XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllOyJdfQ==
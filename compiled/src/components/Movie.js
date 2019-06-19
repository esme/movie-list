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
        React.createElement("img", { src: `https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}` }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllLmpzeCJdLCJuYW1lcyI6WyJNb3ZpZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibW92aWVDbGlja2VkIiwibW92aWVDbGlja2VkSGFuZGxlciIsImJpbmQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJtb3ZpZUluZm8iLCJtb3ZpZSIsInBvc3Rlcl9wYXRoIiwicmVsZWFzZV9kYXRlIiwic2xpY2UiLCJwb3B1bGFyaXR5Iiwidm90ZV9hdmVyYWdlIiwidm90ZV9jb3VudCIsIndhdGNoZWRMaXN0IiwiYWRkV2F0Y2hlZEhhbmRsZXIiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsS0FBTixTQUFvQkMsTUFBTUMsU0FBMUIsQ0FBb0M7QUFDbENDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxvQkFBYztBQURILEtBQWI7QUFHQSxTQUFLQyxtQkFBTCxHQUEyQixLQUFLQSxtQkFBTCxDQUF5QkMsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBM0I7QUFDRDs7QUFFREQsd0JBQXNCO0FBQ3BCRSxZQUFRQyxHQUFSLENBQVksU0FBWjtBQUNBLFNBQUtDLFFBQUwsQ0FBYztBQUNaTCxvQkFBYyxDQUFDLEtBQUtELEtBQUwsQ0FBV0M7QUFEZCxLQUFkO0FBR0Q7O0FBRURNLFdBQVM7QUFDUCxRQUFJQyxZQUNKLGdDQURBOztBQUlBLFFBQUcsS0FBS1IsS0FBTCxDQUFXQyxZQUFkLEVBQTRCO0FBQzFCTyxrQkFDQTtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDRSxxQ0FBSyxLQUFNLG1DQUFrQyxLQUFLVCxLQUFMLENBQVdVLEtBQVgsQ0FBaUJDLFdBQVksRUFBMUUsR0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQVcsZUFBS1gsS0FBTCxDQUFXVSxLQUFYLENBQWlCRSxZQUFqQixDQUE4QkMsS0FBOUIsQ0FBb0MsQ0FBcEMsRUFBc0MsQ0FBdEM7QUFBWCxTQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBaUIsZUFBS2IsS0FBTCxDQUFXVSxLQUFYLENBQWlCSTtBQUFsQyxTQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBbUIsZUFBS2QsS0FBTCxDQUFXVSxLQUFYLENBQWlCSztBQUFwQyxTQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFBaUIsZUFBS2YsS0FBTCxDQUFXVSxLQUFYLENBQWlCTTtBQUFsQyxTQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU5GO0FBT0UsdUNBQU8sTUFBSyxPQUFaO0FBQ0UsbUJBQVMsS0FBS2hCLEtBQUwsQ0FBV2lCLFdBQVgsR0FBeUIsSUFBekIsR0FBZ0MsS0FEM0M7QUFFRSxvQkFBVSxNQUFNLEtBQUtqQixLQUFMLENBQVdrQixpQkFBWCxDQUE2QixLQUFLbEIsS0FBTCxDQUFXVSxLQUF4QyxFQUErQyxLQUFLVixLQUFMLENBQVdpQixXQUExRCxDQUZsQjtBQVBGLE9BREE7QUFpQkQ7QUFDRCxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsT0FBZjtBQUNBO0FBQUE7QUFBQSxVQUFJLFdBQVUsWUFBZDtBQUNFLG1CQUFTLEtBQUtkLG1CQURoQjtBQUNzQyxhQUFLSCxLQUFMLENBQVdVLEtBQVgsQ0FBaUJTO0FBRHZELE9BREE7QUFHQ1Y7QUFIRCxLQURGO0FBT0Q7QUEvQ2lDOztBQWtEcEMsZUFBZWIsS0FBZiIsImZpbGUiOiJNb3ZpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmllIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vdmllQ2xpY2tlZDogZmFsc2VcbiAgICB9XG4gICAgdGhpcy5tb3ZpZUNsaWNrZWRIYW5kbGVyID0gdGhpcy5tb3ZpZUNsaWNrZWRIYW5kbGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBtb3ZpZUNsaWNrZWRIYW5kbGVyKCkge1xuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJylcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vdmllQ2xpY2tlZDogIXRoaXMuc3RhdGUubW92aWVDbGlja2VkXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbW92aWVJbmZvID1cbiAgICA8ZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgaWYodGhpcy5zdGF0ZS5tb3ZpZUNsaWNrZWQpIHtcbiAgICAgIG1vdmllSW5mbyA9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIk1vdmllSW5mb1wiPlxuICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAvJHt0aGlzLnByb3BzLm1vdmllLnBvc3Rlcl9wYXRofWB9PjwvaW1nPlxuICAgICAgICA8bGk+WWVhcjoge3RoaXMucHJvcHMubW92aWUucmVsZWFzZV9kYXRlLnNsaWNlKDAsNCl9PC9saT5cbiAgICAgICAgPGxpPlBvcHVsYXJpdHk6IHt0aGlzLnByb3BzLm1vdmllLnBvcHVsYXJpdHl9PC9saT5cbiAgICAgICAgPGxpPlZvdGUgQXZlcmFnZToge3RoaXMucHJvcHMubW92aWUudm90ZV9hdmVyYWdlfTwvbGk+XG4gICAgICAgIDxsaT5Wb3RlIENvdW50OiB7dGhpcy5wcm9wcy5tb3ZpZS52b3RlX2NvdW50fTwvbGk+XG4gICAgICAgIDxsYWJlbD5XYXRjaGVkOiA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy53YXRjaGVkTGlzdCA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5wcm9wcy5hZGRXYXRjaGVkSGFuZGxlcih0aGlzLnByb3BzLm1vdmllLCB0aGlzLnByb3BzLndhdGNoZWRMaXN0KX0vPlxuICAgICAgICBcbiAgICAgICAgey8qIDxwPjxidXR0b24gXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLndhdGNoZWRMaXN0ID8gXCJidG4tc3VjY2Vzc1wiIDogXCJidG4tb3V0bGluZS1zdWNjZXNzXCJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5hZGRXYXRjaGVkSGFuZGxlcih0aGlzLnByb3BzLm1vdmllLCB0aGlzLnByb3BzLndhdGNoZWRMaXN0KX0+XG4gICAgICAgICAge3RoaXMucHJvcHMud2F0Y2hlZExpc3QgPyAnd2F0Y2hlZCcgOiAnd2F0Y2gnfTwvYnV0dG9uPjwvcD4gKi99XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTW92aWVcIj5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJNb3ZpZVRpdGxlXCJcbiAgICAgICAgb25DbGljaz17dGhpcy5tb3ZpZUNsaWNrZWRIYW5kbGVyfT57dGhpcy5wcm9wcy5tb3ZpZS50aXRsZX08L2xpPlxuICAgICAge21vdmllSW5mb31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWU7Il19
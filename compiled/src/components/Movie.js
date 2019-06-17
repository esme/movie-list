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
          "Year: 1995"
        ),
        React.createElement(
          "li",
          null,
          "Runtime: 107 min"
        ),
        React.createElement(
          "li",
          null,
          "Metascore: 46"
        ),
        React.createElement(
          "li",
          null,
          "IMDB Rating: 6.2"
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "button",
            {
              className: this.props.watchedList ? "btn-success" : "btn-outline-success",
              onClick: () => this.props.addWatchedHandler(this.props.movie, this.props.watchedList) },
            this.props.watchedList ? 'watched' : 'watch'
          )
        )
      );
    }
    return React.createElement(
      "div",
      { className: "MovieTitle" },
      React.createElement(
        "li",
        { onClick: this.movieClickedHandler },
        this.props.movie.title
      ),
      movieInfo
    );
  }
}

export default Movie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllLmpzeCJdLCJuYW1lcyI6WyJNb3ZpZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibW92aWVDbGlja2VkIiwibW92aWVDbGlja2VkSGFuZGxlciIsImJpbmQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJtb3ZpZUluZm8iLCJ3YXRjaGVkTGlzdCIsImFkZFdhdGNoZWRIYW5kbGVyIiwibW92aWUiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsS0FBTixTQUFvQkMsTUFBTUMsU0FBMUIsQ0FBb0M7QUFDbENDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxvQkFBYztBQURILEtBQWI7QUFHQSxTQUFLQyxtQkFBTCxHQUEyQixLQUFLQSxtQkFBTCxDQUF5QkMsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBM0I7QUFDRDs7QUFFREQsd0JBQXNCO0FBQ3BCRSxZQUFRQyxHQUFSLENBQVksU0FBWjtBQUNBLFNBQUtDLFFBQUwsQ0FBYztBQUNaTCxvQkFBYyxDQUFDLEtBQUtELEtBQUwsQ0FBV0M7QUFEZCxLQUFkO0FBR0Q7O0FBRURNLFdBQVM7QUFDUCxRQUFJQyxZQUNKLGdDQURBOztBQUlBLFFBQUcsS0FBS1IsS0FBTCxDQUFXQyxZQUFkLEVBQTRCO0FBQzFCTyxrQkFDQTtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSkY7QUFLRTtBQUFBO0FBQUE7QUFBRztBQUFBO0FBQUE7QUFDRCx5QkFBVyxLQUFLVCxLQUFMLENBQVdVLFdBQVgsR0FBeUIsYUFBekIsR0FBeUMscUJBRG5EO0FBRUQsdUJBQVMsTUFBTSxLQUFLVixLQUFMLENBQVdXLGlCQUFYLENBQTZCLEtBQUtYLEtBQUwsQ0FBV1ksS0FBeEMsRUFBK0MsS0FBS1osS0FBTCxDQUFXVSxXQUExRCxDQUZkO0FBR0EsaUJBQUtWLEtBQUwsQ0FBV1UsV0FBWCxHQUF5QixTQUF6QixHQUFxQztBQUhyQztBQUFIO0FBTEYsT0FEQTtBQVdEO0FBQ0QsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFlBQWY7QUFDQTtBQUFBO0FBQUEsVUFBSSxTQUFTLEtBQUtQLG1CQUFsQjtBQUF3QyxhQUFLSCxLQUFMLENBQVdZLEtBQVgsQ0FBaUJDO0FBQXpELE9BREE7QUFFQ0o7QUFGRCxLQURGO0FBTUQ7QUF4Q2lDOztBQTJDcEMsZUFBZWIsS0FBZiIsImZpbGUiOiJNb3ZpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmllIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vdmllQ2xpY2tlZDogZmFsc2VcbiAgICB9XG4gICAgdGhpcy5tb3ZpZUNsaWNrZWRIYW5kbGVyID0gdGhpcy5tb3ZpZUNsaWNrZWRIYW5kbGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBtb3ZpZUNsaWNrZWRIYW5kbGVyKCkge1xuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJylcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vdmllQ2xpY2tlZDogIXRoaXMuc3RhdGUubW92aWVDbGlja2VkXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbW92aWVJbmZvID1cbiAgICA8ZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgaWYodGhpcy5zdGF0ZS5tb3ZpZUNsaWNrZWQpIHtcbiAgICAgIG1vdmllSW5mbyA9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIk1vdmllSW5mb1wiPlxuICAgICAgICA8bGk+WWVhcjogMTk5NTwvbGk+XG4gICAgICAgIDxsaT5SdW50aW1lOiAxMDcgbWluPC9saT5cbiAgICAgICAgPGxpPk1ldGFzY29yZTogNDY8L2xpPlxuICAgICAgICA8bGk+SU1EQiBSYXRpbmc6IDYuMjwvbGk+XG4gICAgICAgIDxwPjxidXR0b24gXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLndhdGNoZWRMaXN0ID8gXCJidG4tc3VjY2Vzc1wiIDogXCJidG4tb3V0bGluZS1zdWNjZXNzXCJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5hZGRXYXRjaGVkSGFuZGxlcih0aGlzLnByb3BzLm1vdmllLCB0aGlzLnByb3BzLndhdGNoZWRMaXN0KX0+XG4gICAgICAgICAge3RoaXMucHJvcHMud2F0Y2hlZExpc3QgPyAnd2F0Y2hlZCcgOiAnd2F0Y2gnfTwvYnV0dG9uPjwvcD5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJNb3ZpZVRpdGxlXCI+XG4gICAgICA8bGkgb25DbGljaz17dGhpcy5tb3ZpZUNsaWNrZWRIYW5kbGVyfT57dGhpcy5wcm9wcy5tb3ZpZS50aXRsZX08L2xpPlxuICAgICAge21vdmllSW5mb31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWU7Il19
const Search = props => React.createElement(
  "div",
  { className: "Search" },
  React.createElement("input", { placeholder: "Search...",
    onChange: props.searchChangeHandler,
    value: props.searchText }),
  React.createElement(
    "button",
    { className: "btn-primary", onClick: () => {
        props.searchSubmitHandler();
      } },
    "Go"
  )
);

export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJzZWFyY2hDaGFuZ2VIYW5kbGVyIiwic2VhcmNoVGV4dCIsInNlYXJjaFN1Ym1pdEhhbmRsZXIiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFNBQVVDLEtBQUQsSUFDYjtBQUFBO0FBQUEsSUFBSyxXQUFVLFFBQWY7QUFDRSxpQ0FBTyxhQUFZLFdBQW5CO0FBQ0UsY0FBVUEsTUFBTUMsbUJBRGxCO0FBRUUsV0FBT0QsTUFBTUUsVUFGZixHQURGO0FBSUU7QUFBQTtBQUFBLE1BQVEsV0FBVSxhQUFsQixFQUFnQyxTQUFTLE1BQU07QUFBQ0YsY0FBTUcsbUJBQU47QUFBNEIsT0FBNUU7QUFBQTtBQUFBO0FBSkYsQ0FERjs7QUFTQSxlQUFlSixNQUFmIiwiZmlsZSI6IlNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNlYXJjaCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIlNlYXJjaFwiPlxuICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIFxuICAgICAgb25DaGFuZ2U9e3Byb3BzLnNlYXJjaENoYW5nZUhhbmRsZXJ9IFxuICAgICAgdmFsdWU9e3Byb3BzLnNlYXJjaFRleHR9PjwvaW5wdXQ+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHtwcm9wcy5zZWFyY2hTdWJtaXRIYW5kbGVyKCl9fT5HbzwvYnV0dG9uPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDsiXX0=
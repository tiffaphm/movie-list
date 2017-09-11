"use strict";

var AddMovie = function AddMovie(props) {
  return React.createElement(
    "div",
    { className: "input-bar form-inline" },
    React.createElement("input", { className: "form-control", type: "text", onChange: props.getMovieValue }),
    React.createElement(
      "button",
      { className: "btn hidden-sm-down", onClick: props.addMovieToList },
      React.createElement("span", { className: "glyphicon glyphicon-search" })
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FkZE1vdmllLmpzeCJdLCJuYW1lcyI6WyJBZGRNb3ZpZSIsInByb3BzIiwiZ2V0TW92aWVWYWx1ZSIsImFkZE1vdmllVG9MaXN0Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxLQUFEO0FBQUEsU0FDZjtBQUFBO0FBQUEsTUFBSyxXQUFVLHVCQUFmO0FBQ0UsbUNBQU8sV0FBVSxjQUFqQixFQUFnQyxNQUFLLE1BQXJDLEVBQTRDLFVBQVVBLE1BQU1DLGFBQTVELEdBREY7QUFFRTtBQUFBO0FBQUEsUUFBUSxXQUFVLG9CQUFsQixFQUF1QyxTQUFTRCxNQUFNRSxjQUF0RDtBQUNFLG9DQUFNLFdBQVUsNEJBQWhCO0FBREY7QUFGRixHQURlO0FBQUEsQ0FBakIiLCJmaWxlIjoiQWRkTW92aWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBZGRNb3ZpZSA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJhciBmb3JtLWlubGluZVwiPlxuICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtwcm9wcy5nZXRNb3ZpZVZhbHVlfS8+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gaGlkZGVuLXNtLWRvd25cIiBvbkNsaWNrPXtwcm9wcy5hZGRNb3ZpZVRvTGlzdH0+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+IFxuKTtcbiJdfQ==
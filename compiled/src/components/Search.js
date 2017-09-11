"use strict";

var Search = function Search(props) {
  return React.createElement(
    "div",
    { className: "search-bar form-inline" },
    React.createElement("input", { className: "form-control", type: "text", onChange: props.getSearchValue }),
    React.createElement(
      "button",
      { className: "btn hidden-sm-down", onClick: props.submitSearch },
      React.createElement("span", { className: "glyphicon glyphicon-search" })
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJnZXRTZWFyY2hWYWx1ZSIsInN1Ym1pdFNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2I7QUFBQTtBQUFBLE1BQUssV0FBVSx3QkFBZjtBQUNFLG1DQUFPLFdBQVUsY0FBakIsRUFBZ0MsTUFBSyxNQUFyQyxFQUE0QyxVQUFVQSxNQUFNQyxjQUE1RCxHQURGO0FBRUU7QUFBQTtBQUFBLFFBQVEsV0FBVSxvQkFBbEIsRUFBdUMsU0FBU0QsTUFBTUUsWUFBdEQ7QUFDRSxvQ0FBTSxXQUFVLDRCQUFoQjtBQURGO0FBRkYsR0FEYTtBQUFBLENBQWYiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2VhcmNoID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhciBmb3JtLWlubGluZVwiPlxuICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtwcm9wcy5nZXRTZWFyY2hWYWx1ZX0vPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGhpZGRlbi1zbS1kb3duXCIgb25DbGljaz17cHJvcHMuc3VibWl0U2VhcmNofT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj4gXG4pIl19
"use strict";

var MovieListEntry = function MovieListEntry(props) {
  return React.createElement(
    "div",
    { className: "movie-list-entry" },
    React.createElement(
      "div",
      { className: "movie-list-entry-title" },
      props.movie.title
    )
  );
};

MovieListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};

window.MovieListEntry = MovieListEntry;

// class VideoListEntry extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   grabVideoData() {
//     var selectedVideo = this.props.video;
//     this.props.getCurrentVideo(selectedVideo);
//   }


//   render() {
//     return (
//       <div className="video-list-entry media">
//         <div className="media-left media-middle">
//           <img className="media-object" src={this.props.video.snippet.thumbnails.default.url} alt="" />
//         </div>
//         <div className="media-body">
//           <div className="video-list-entry-title" onClick={this.grabVideoData.bind(this)}>{this.props.video.snippet.title}</div>
//           <div className="video-list-entry-detail">{this.props.video.snippet.description}</div>
//         </div>
//       </div>
//     );
//   }
// }

// // PropTypes tell other developers what `props` a component expects
// // Warnings will be shown in the console when the defined rules are violated
// VideoListEntry.propTypes = {
//   video: React.PropTypes.object.isRequired
// };

// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// window.VideoListEntry = VideoListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsInByb3BzIiwibW92aWUiLCJ0aXRsZSIsInByb3BUeXBlcyIsIlJlYWN0IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQ7QUFBQSxTQUNyQjtBQUFBO0FBQUEsTUFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSx3QkFBZjtBQUF5Q0EsWUFBTUMsS0FBTixDQUFZQztBQUFyRDtBQURGLEdBRHFCO0FBQUEsQ0FBdkI7O0FBTUFILGVBQWVJLFNBQWYsR0FBMkI7QUFDekJGLFNBQU9HLE1BQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQztBQURMLENBQTNCOztBQUlBQyxPQUFPVCxjQUFQLEdBQXdCQSxjQUF4Qjs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJNb3ZpZUxpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1vdmllTGlzdEVudHJ5ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtbGlzdC1lbnRyeVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtbGlzdC1lbnRyeS10aXRsZVwiPntwcm9wcy5tb3ZpZS50aXRsZX08L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5Nb3ZpZUxpc3RFbnRyeS5wcm9wVHlwZXMgPSB7XG4gIG1vdmllOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxud2luZG93Lk1vdmllTGlzdEVudHJ5ID0gTW92aWVMaXN0RW50cnk7XG5cblxuXG4vLyBjbGFzcyBWaWRlb0xpc3RFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgc3VwZXIocHJvcHMpO1xuLy8gICB9XG4gIFxuLy8gICBncmFiVmlkZW9EYXRhKCkge1xuLy8gICAgIHZhciBzZWxlY3RlZFZpZGVvID0gdGhpcy5wcm9wcy52aWRlbztcbi8vICAgICB0aGlzLnByb3BzLmdldEN1cnJlbnRWaWRlbyhzZWxlY3RlZFZpZGVvKTtcbi8vICAgfVxuICBcbiAgXG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWVudHJ5IG1lZGlhXCI+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtbGVmdCBtZWRpYS1taWRkbGVcIj5cbi8vICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1lZGlhLW9iamVjdFwiIHNyYz17dGhpcy5wcm9wcy52aWRlby5zbmlwcGV0LnRodW1ibmFpbHMuZGVmYXVsdC51cmx9IGFsdD1cIlwiIC8+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbi8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnktdGl0bGVcIiBvbkNsaWNrPXt0aGlzLmdyYWJWaWRlb0RhdGEuYmluZCh0aGlzKX0+e3RoaXMucHJvcHMudmlkZW8uc25pcHBldC50aXRsZX08L2Rpdj5cbi8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnktZGV0YWlsXCI+e3RoaXMucHJvcHMudmlkZW8uc25pcHBldC5kZXNjcmlwdGlvbn08L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gICB9XG4vLyB9XG5cbi8vIC8vIFByb3BUeXBlcyB0ZWxsIG90aGVyIGRldmVsb3BlcnMgd2hhdCBgcHJvcHNgIGEgY29tcG9uZW50IGV4cGVjdHNcbi8vIC8vIFdhcm5pbmdzIHdpbGwgYmUgc2hvd24gaW4gdGhlIGNvbnNvbGUgd2hlbiB0aGUgZGVmaW5lZCBydWxlcyBhcmUgdmlvbGF0ZWRcbi8vIFZpZGVvTGlzdEVudHJ5LnByb3BUeXBlcyA9IHtcbi8vICAgdmlkZW86IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuLy8gfTtcblxuLy8gLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbi8vIHdpbmRvdy5WaWRlb0xpc3RFbnRyeSA9IFZpZGVvTGlzdEVudHJ5O1xuIl19
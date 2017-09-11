'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      moviesCollection: window.movies,
      searchInput: '',
      movieToAdd: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: 'filterMovieCollection',
    value: function filterMovieCollection(input) {
      var listOfMovies = [];
      var filteredMovies = [];

      _.each(window.movies, function (movie) {
        listOfMovies.push(movie.title);
      });

      listOfMovies.forEach(function (item) {
        if (item.toLowerCase().includes(input.toLowerCase())) {
          filteredMovies.push({ 'title': item });
        }
      });

      this.setState({
        moviesCollection: filteredMovies
      });
    }
  }, {
    key: 'submitSearch',
    value: function submitSearch(input) {
      input = this.state.searchInput;
      this.filterMovieCollection(input);
    }
  }, {
    key: 'getSearchValue',
    value: function getSearchValue(event) {
      this.setState({
        searchInput: event.target.value
      });
    }
  }, {
    key: 'getMovieValue',
    value: function getMovieValue(event) {
      this.setState({
        movieToAdd: event.target.value
      });
    }
  }, {
    key: 'addMovieToList',
    value: function addMovieToList(input) {
      input = this.titleCase(this.state.movieToAdd);

      window.movies.push({ 'title': input });
    }
  }, {
    key: 'titleCase',
    value: function titleCase(string) {
      var words = string.toLowerCase().split(' ');
      _.each(words, function (word, idx) {
        words[idx] = word.charAt(0).toUpperCase() + word.substring(1);
      });

      return words.join(' ');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'header clearfix' },
          React.createElement(Search, { getSearchValue: this.getSearchValue.bind(this), submitSearch: this.submitSearch.bind(this) }),
          React.createElement(
            'h4',
            { className: 'text-muted' },
            'Movie List'
          )
        ),
        React.createElement(
          'div',
          { className: 'jumbotron' },
          React.createElement(
            'h1',
            null,
            'Movie List'
          ),
          React.createElement(AddMovie, { getMovieValue: this.getMovieValue.bind(this), addMovieToList: this.addMovieToList.bind(this) })
        ),
        React.createElement(
          'div',
          { className: 'movie-list-container' },
          React.createElement(MovieList, { movies: this.state.moviesCollection })
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
// <MovieListEntry />
// { this.state.showSearchResults ? <Results /> : null }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllc0NvbGxlY3Rpb24iLCJ3aW5kb3ciLCJtb3ZpZXMiLCJzZWFyY2hJbnB1dCIsIm1vdmllVG9BZGQiLCJpbnB1dCIsImxpc3RPZk1vdmllcyIsImZpbHRlcmVkTW92aWVzIiwiXyIsImVhY2giLCJtb3ZpZSIsInB1c2giLCJ0aXRsZSIsImZvckVhY2giLCJpdGVtIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNldFN0YXRlIiwiZmlsdGVyTW92aWVDb2xsZWN0aW9uIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRpdGxlQ2FzZSIsInN0cmluZyIsIndvcmRzIiwic3BsaXQiLCJ3b3JkIiwiaWR4IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJqb2luIiwiZ2V0U2VhcmNoVmFsdWUiLCJiaW5kIiwic3VibWl0U2VhcmNoIiwiZ2V0TW92aWVWYWx1ZSIsImFkZE1vdmllVG9MaXN0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsd0JBQWtCQyxPQUFPQyxNQURkO0FBRVhDLG1CQUFhLEVBRkY7QUFHWEMsa0JBQVk7QUFIRCxLQUFiO0FBSGlCO0FBUWxCOzs7OzBDQUVxQkMsSyxFQUFPO0FBQzNCLFVBQUlDLGVBQWUsRUFBbkI7QUFDQSxVQUFJQyxpQkFBaUIsRUFBckI7O0FBRUFDLFFBQUVDLElBQUYsQ0FBT1IsT0FBT0MsTUFBZCxFQUFzQixVQUFTUSxLQUFULEVBQWdCO0FBQ3BDSixxQkFBYUssSUFBYixDQUFrQkQsTUFBTUUsS0FBeEI7QUFDRCxPQUZEOztBQUlBTixtQkFBYU8sT0FBYixDQUFxQixVQUFTQyxJQUFULEVBQWU7QUFDbEMsWUFBSUEsS0FBS0MsV0FBTCxHQUFtQkMsUUFBbkIsQ0FBNEJYLE1BQU1VLFdBQU4sRUFBNUIsQ0FBSixFQUFzRDtBQUNwRFIseUJBQWVJLElBQWYsQ0FBb0IsRUFBQyxTQUFTRyxJQUFWLEVBQXBCO0FBQ0Q7QUFDRixPQUpEOztBQU1BLFdBQUtHLFFBQUwsQ0FBYztBQUNaakIsMEJBQWtCTztBQUROLE9BQWQ7QUFHRDs7O2lDQUVZRixLLEVBQU87QUFDbEJBLGNBQVEsS0FBS04sS0FBTCxDQUFXSSxXQUFuQjtBQUNBLFdBQUtlLHFCQUFMLENBQTJCYixLQUEzQjtBQUNEOzs7bUNBRWNjLEssRUFBTztBQUNwQixXQUFLRixRQUFMLENBQWM7QUFDWmQscUJBQWFnQixNQUFNQyxNQUFOLENBQWFDO0FBRGQsT0FBZDtBQUdEOzs7a0NBRWFGLEssRUFBTztBQUNuQixXQUFLRixRQUFMLENBQWM7QUFDWmIsb0JBQVllLE1BQU1DLE1BQU4sQ0FBYUM7QUFEYixPQUFkO0FBR0Q7OzttQ0FFY2hCLEssRUFBTztBQUNwQkEsY0FBUSxLQUFLaUIsU0FBTCxDQUFlLEtBQUt2QixLQUFMLENBQVdLLFVBQTFCLENBQVI7O0FBRUFILGFBQU9DLE1BQVAsQ0FBY1MsSUFBZCxDQUFtQixFQUFDLFNBQVNOLEtBQVYsRUFBbkI7QUFDRDs7OzhCQUVTa0IsTSxFQUFRO0FBQ2hCLFVBQUlDLFFBQVFELE9BQU9SLFdBQVAsR0FBcUJVLEtBQXJCLENBQTJCLEdBQTNCLENBQVo7QUFDQWpCLFFBQUVDLElBQUYsQ0FBT2UsS0FBUCxFQUFjLFVBQVNFLElBQVQsRUFBZUMsR0FBZixFQUFvQjtBQUNoQ0gsY0FBTUcsR0FBTixJQUFhRCxLQUFLRSxNQUFMLENBQVksQ0FBWixFQUFlQyxXQUFmLEtBQStCSCxLQUFLSSxTQUFMLENBQWUsQ0FBZixDQUE1QztBQUNELE9BRkQ7O0FBSUEsYUFBT04sTUFBTU8sSUFBTixDQUFXLEdBQVgsQ0FBUDtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsaUJBQWY7QUFDRSw4QkFBQyxNQUFELElBQVEsZ0JBQWdCLEtBQUtDLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLENBQXhCLEVBQXdELGNBQWMsS0FBS0MsWUFBTCxDQUFrQkQsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBdEUsR0FERjtBQUVFO0FBQUE7QUFBQSxjQUFJLFdBQVUsWUFBZDtBQUFBO0FBQUE7QUFGRixTQURGO0FBTUU7QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUUsOEJBQUMsUUFBRCxJQUFVLGVBQWUsS0FBS0UsYUFBTCxDQUFtQkYsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBekIsRUFBd0QsZ0JBQWdCLEtBQUtHLGNBQUwsQ0FBb0JILElBQXBCLENBQXlCLElBQXpCLENBQXhFO0FBRkYsU0FORjtBQVdFO0FBQUE7QUFBQSxZQUFLLFdBQVUsc0JBQWY7QUFDRSw4QkFBQyxTQUFELElBQVcsUUFBUSxLQUFLbEMsS0FBTCxDQUFXQyxnQkFBOUI7QUFERjtBQVhGLE9BREY7QUFrQkQ7Ozs7RUFqRmVxQyxNQUFNQyxTOztBQW9GeEJyQyxPQUFPSixHQUFQLEdBQWFBLEdBQWI7QUFDVTtBQUNBIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vdmllc0NvbGxlY3Rpb246IHdpbmRvdy5tb3ZpZXMsXG4gICAgICBzZWFyY2hJbnB1dDogJycsXG4gICAgICBtb3ZpZVRvQWRkOiAnJyxcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJNb3ZpZUNvbGxlY3Rpb24oaW5wdXQpIHtcbiAgICB2YXIgbGlzdE9mTW92aWVzID0gW107XG4gICAgdmFyIGZpbHRlcmVkTW92aWVzID0gW107XG5cbiAgICBfLmVhY2god2luZG93Lm1vdmllcywgZnVuY3Rpb24obW92aWUpIHtcbiAgICAgIGxpc3RPZk1vdmllcy5wdXNoKG1vdmllLnRpdGxlKVxuICAgIH0pO1xuXG4gICAgbGlzdE9mTW92aWVzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgaWYgKGl0ZW0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICBmaWx0ZXJlZE1vdmllcy5wdXNoKHsndGl0bGUnOiBpdGVtfSk7XG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW92aWVzQ29sbGVjdGlvbjogZmlsdGVyZWRNb3ZpZXNcbiAgICB9KVxuICB9XG5cbiAgc3VibWl0U2VhcmNoKGlucHV0KSB7XG4gICAgaW5wdXQgPSB0aGlzLnN0YXRlLnNlYXJjaElucHV0O1xuICAgIHRoaXMuZmlsdGVyTW92aWVDb2xsZWN0aW9uKGlucHV0KTtcbiAgfVxuXG4gIGdldFNlYXJjaFZhbHVlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWFyY2hJbnB1dDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBnZXRNb3ZpZVZhbHVlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb3ZpZVRvQWRkOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG5cbiAgYWRkTW92aWVUb0xpc3QoaW5wdXQpIHtcbiAgICBpbnB1dCA9IHRoaXMudGl0bGVDYXNlKHRoaXMuc3RhdGUubW92aWVUb0FkZCk7XG5cbiAgICB3aW5kb3cubW92aWVzLnB1c2goeyd0aXRsZSc6IGlucHV0fSlcbiAgfVxuXG4gIHRpdGxlQ2FzZShzdHJpbmcpIHtcbiAgICB2YXIgd29yZHMgPSBzdHJpbmcudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpO1xuICAgIF8uZWFjaCh3b3JkcywgZnVuY3Rpb24od29yZCwgaWR4KSB7XG4gICAgICB3b3Jkc1tpZHhdID0gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyaW5nKDEpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gd29yZHMuam9pbignICcpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBjbGVhcmZpeFwiPlxuICAgICAgICAgIDxTZWFyY2ggZ2V0U2VhcmNoVmFsdWU9e3RoaXMuZ2V0U2VhcmNoVmFsdWUuYmluZCh0aGlzKX0gc3VibWl0U2VhcmNoPXt0aGlzLnN1Ym1pdFNlYXJjaC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+TW92aWUgTGlzdDwvaDQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uXCI+XG4gICAgICAgICAgPGgxPk1vdmllIExpc3Q8L2gxPlxuICAgICAgICAgIDxBZGRNb3ZpZSBnZXRNb3ZpZVZhbHVlPXt0aGlzLmdldE1vdmllVmFsdWUuYmluZCh0aGlzKX0gYWRkTW92aWVUb0xpc3Q9e3RoaXMuYWRkTW92aWVUb0xpc3QuYmluZCh0aGlzKX0vPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWxpc3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzQ29sbGVjdGlvbn0vPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbndpbmRvdy5BcHAgPSBBcHA7XG4gICAgICAgICAgLy8gPE1vdmllTGlzdEVudHJ5IC8+XG4gICAgICAgICAgLy8geyB0aGlzLnN0YXRlLnNob3dTZWFyY2hSZXN1bHRzID8gPFJlc3VsdHMgLz4gOiBudWxsIH0iXX0=
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesCollection: window.movies,
      searchInput: '',
      movieToAdd: '',
    }
  }

  filterMovieCollection(input) {
    var listOfMovies = [];
    var filteredMovies = [];

    _.each(window.movies, function(movie) {
      listOfMovies.push(movie.title)
    });

    listOfMovies.forEach(function(item) {
      if (item.toLowerCase().includes(input.toLowerCase())) {
        filteredMovies.push({'title': item});
      }
    })

    this.setState({
      moviesCollection: filteredMovies
    })
  }

  submitSearch(input) {
    input = this.state.searchInput;
    this.filterMovieCollection(input);
  }

  getSearchValue(event) {
    this.setState({
      searchInput: event.target.value
    });
  }

  getMovieValue(event) {
    this.setState({
      movieToAdd: event.target.value
    })
  }

  addMovieToList(input) {
    input = this.titleCase(this.state.movieToAdd);

    window.movies.push({'title': input})
  }

  titleCase(string) {
    var words = string.toLowerCase().split(' ');
    _.each(words, function(word, idx) {
      words[idx] = word.charAt(0).toUpperCase() + word.substring(1);
    })

    return words.join(' ');
  }

  render() {
    return (
      <div className="container">
        <div className="header clearfix">
          <Search getSearchValue={this.getSearchValue.bind(this)} submitSearch={this.submitSearch.bind(this)} />
          <h4 className="text-muted">Movie List</h4>
        </div>

        <div className="jumbotron">
          <h1>Movie List</h1>
          <AddMovie getMovieValue={this.getMovieValue.bind(this)} addMovieToList={this.addMovieToList.bind(this)}/>
        </div>

        <div className="movie-list-container">
          <MovieList movies={this.state.moviesCollection}/>
        </div>

      </div>
    )
  }
}

window.App = App;
          // <MovieListEntry />
          // { this.state.showSearchResults ? <Results /> : null }
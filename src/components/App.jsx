class App extends React.Component {
  constructor(props) {
    super(props);
    this.debouncedSearch = _.debounce(this.newSearch.bind(this), 500);

    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: [],
      searchVal: ''
    };
  }

  newSearch () {
    //update options.query
    // console.log('in newSearch: ', event);
    window.options.query = this.state.searchVal;
    console.log(window.options.query);

    // make GET request
    this.props.searchYouTube(window.options, items => {
      this.setState({ videoList: items });
    });

  }

  updateSearchVal (event) {
    this.state.searchVal = event.target.value;
    this.debouncedSearch();
  }

  onThumbClick (video) {
    this.setState({
      currentVideo: video
    });
  }

  // componentWillMount () {
  //   this.
  // }

  componentDidMount () {
    this.props.searchYouTube(window.options, items => {
      this.setState({
        currentVideo: items[0],
        videoList: items.slice(1)
      });
    });
  }

  render () {
    return (
      <div>
        <Nav updateSearchVal={this.updateSearchVal.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} event={this.onThumbClick.bind(this)}/>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

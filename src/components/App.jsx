class App extends React.Component {
  constructor(props) {
    super(props);
    this.debouncedSearch = _.debounce(function (event) {
      this.newSearch(event);
    }.bind(this), 500, { 'leading': true, 'trailing': true});

    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: []
    };
  }

  newSearch (query) {
    //update options.query
    window.options.query = query;
     // event.target.value;

    // make GET request
    this.props.searchYouTube(window.options, items => {
      this.setState({ videoList: items });
    });

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
        <Nav fnOnChange={this.debouncedSearch.bind(this)}/>
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

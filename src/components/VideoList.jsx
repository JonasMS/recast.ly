var VideoList = (props) => (
  <div className="video-list media">
    {populateVideoList(props.videos, props.event)}
  </div>
);

var populateVideoList = (videos, event) => {
  if ( videos !== undefined && videos.length ) {
    return videos.map( video => {
      return (<VideoListEntry event={event} key={video.id.videoId} video={video} />);
    });
  }
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;

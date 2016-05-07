var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    // data:
    success: data => {
      console.log(data);
      window.videoData = data;
    },
    error: () => {
      console.log('GET request to youtube failed');
    }
  })
};

window.searchYouTube = searchYouTube;

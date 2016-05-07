var options = 'part=snippet&type=video&maxResults=5&key=AIzaSyDqx7cgDThe98-KcOiIs5GlEWgHh0jXBn8';

var searchYouTube = (options, success) => {


  $.get('https://www.googleapis.com/youtube/v3/search', options, success);

// TODO
// $.ajax({
//   url: 'https://www.googleapis.com/youtube/v3/search',
//   // data:
//   success: data => {
//     console.log(data);
//     window.videoData = data;
//   },
//   error: () => {
//     console.log('GET request to youtube failed');
//   }
// });
};


window.searchYouTube = searchYouTube;

// window.searchYouTube(options, data => {
//   window.videoData = data.items;

//   ReactDOM.render(
//   <App/>,
//   document.getElementById('app')
//   );
// });

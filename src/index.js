// TODO: Render the `App` component to the DOM
// ReactDOM.render(
//   <App/>,
//   document.getElementById('app')
// );

// window.searchYouTube(window.options, data => {
//   window.videoData = data.items;

// });

ReactDOM.render(
  <App searchYouTube={searchYouTube}/>,
  document.getElementById('app')
);
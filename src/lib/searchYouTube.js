window.options = {
  type: 'video',
  max: 5,
  query: '',
  key: 'AIzaSyDqx7cgDThe98-KcOiIs5GlEWgHh0jXBn8'
};

var searchYouTube = (options, success) => {

  $.get('https://www.googleapis.com/youtube/v3/search',
    'part=snippet&type=' + options.type + '&maxResults=' + options.max + '&q=' + options.query + '&key=' + options.key,
     function(result) { success(result.items); });
};

window.searchYouTube = searchYouTube;

'use strict';

(function () {

  console.log('It Works!');

  // URLs for API data

  // let flickrURL = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=food&format=json&api_key=ba1b9d0f8d9ba8dc20eadd024c969c34';

  var menuURL = 'https://json-data.herokuapp.com/restaurant/menu/1';

  var newsURL = 'https://json-data.herokuapp.com/restaurant/news/1';

  var specialURL = 'https://json-data.herokuapp.com/restaurant/special/1';

  // newsBox

  // template function
  // let newsBoxTemplate = _.template($('#newsBox').text());

  // promise and confirmation
  var newsPromise = $.getJSON(newsURL);

  newsPromise.then(function (newsResponse) {
    // console.log(newsResponse);
  });

  // append newsTitle text
  newsPromise.then(function (newsResponse) {
    $('.newsTitle').append(newsResponse.title);
  });

  // append newsPost text
  newsPromise.then(function (newsResponse) {
    $('.newsPost').append(newsResponse.post);
  });

  // specialBox
  var specialPromise = $.getJSON(specialURL);

  specialPromise.then(function (specialResponse) {
    console.log(specialResponse);
  });

  // menuPromis

  // promise and confirmation
  var menuPromise = $.getJSON(menuURL);

  // appetizers
  menuPromise.then(function (menuResponse) {
    console.log(menuResponse);
    var appetizerMenu = menuResponse.appetizers;
    console.log(appetizerMenu);

    _.each(appetizerMenu, function (menuItem) {
      $('.appetizerMenu').append(menuItem.item);
      console.log(menuItem.item);
    });
  });
  //

  // let flickrPromise = $.getJSON(flickrURL);
  //   flickrPromise.then( function (flickrResponse) {
  //     console.log(flickrResponse);
  //   });
})();
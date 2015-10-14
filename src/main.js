(function () {

  console.log('It Works!');



// URLs for API data




  // let googleURL = 'http://maps.google.apis.com/maps/api/js?key=bGaods0CxlSXdo5bpDuFnJZVFpU&callback=initMap';

  let flickrURL = 'https://api.flickr.com/services/rest/?method=flickr.test.echo&api_key=ba1b9d0f8d9ba8dc20eadd024c969c34';

  let menuURL = 'https://json-data.herokuapp.com/restaurant/menu/1';

  let newsURL = 'https://json-data.herokuapp.com/restaurant/news/1';

  let specialURL = 'https://json-data.herokuapp.com/restaurant/special/1';


// confirm access to the APIs

// let menuPromise = $.getJSON(menuURL);
//   menuPromise.then( function (menuResponse) {
//     console.log(menuResponse);
//   });

// let newsPromise = $.getJSON(newsURL);
//   newsPromise.then( function (newsResponse) {
//     console.log(newsResponse);
//   });

let specialPromise = $.getJSON(specialURL);
  specialPromise.then( function (specialResponse) {
    console.log(specialResponse);
  });

// let googlePromise = $.getJSON(googleURL);
//   googlePromise.then( function (googleResponse) {
//     console.log(googleResponse);
//   });

let flickrPromise = $.getJSON(flickrURL);
  flickrPromise.then( function (flickrResponse) {
    console.log(flickrResponse);
  });




    







}());

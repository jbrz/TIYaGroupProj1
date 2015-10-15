'use strict';

// URLs for API data

let flickrURL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ba1b9d0f8d9ba8dc20eadd024c969c34&format=json&nojsoncallback=1&text=cats&extras=url_o';

var menuURL = 'https://json-data.herokuapp.com/restaurant/menu/1';

var newsURL = 'https://json-data.herokuapp.com/restaurant/news/1';

var specialURL = 'https://json-data.herokuapp.com/restaurant/special/1';

// menu promise and confirmation
var menuPromise = $.getJSON(menuURL);


(function () {

  console.log('It Works!');

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
    // console.log(specialResponse);
  });
})();

  
// menu Sections
menuPromise.then(function (menuResponse) {

  // pulling the name of each section
  var menuSections = _.keys(menuResponse);

  return menuSections;
  console.log(menuSections.length);


  var templateString = $('#menuDiv').text();
  var renderTemplate = _.template(templateString);
  
  _.each(menuSections, function (menuSection) {
    var menuHTML = renderTemplate(menuSection);
    $('.menu').append(menuSection);
  });

  var arrayofArrays = _.values(menuResponse);
  // console.log(arrayofArrays);


  // function(i) {
     
  //   _.each(menuSections[i], function (key){
  //      var menuHTML = renderTemplate(key);
  //     $('.menu').append(menuHTML);
  //   });
  // })
});

(function () {
  var templateString = $('#menuDiv').text();
  var renderTemplate = _.template(templateString);

  _.each(arrayofArrays, function (array) {

    _.each(array, function (object) {
      
      var menuHTML = renderTemplate(object);
      var objectItem = renderTemplate(object.item);
      var objectPrice = renderTemplate(object.price);
      var objectDescrip = renderTemplate(object.description);

      $('.menuItemName').append(objectItem);
      $('.menuItemPrice').append(objectPrice);
      $('.menuItemDescription').append(objectDescrip);

      if (object.allergy > 0) {
        $('.icons').addClass($('showAllergy'));
      };

      if (object.favorite > 0) {
        $('.icons').addClass($('showFavorite'));
      };

      if (object.spicy > 0) {
        $('.icons').addClass($('showSpicy'));
      };

      if (object.vegan > 0) {
        $('.icons').addClass($('showVegan'));
      };
    });
  });
});

// var arrayOfSections = _.pick(menuResponse, function (menuSection) {
//   _.each(menuSection, function (x) {
//     // console.log(menuSection);
//     return x.values;
//     $('.menuSection').append(x);
//     console.log(arrayOfSections);
//   });
// });

let flickrPromise = $.getJSON(flickrURL);
flickrPromise.then( function (flickrResponse) {
  console.log(flickrResponse);
});

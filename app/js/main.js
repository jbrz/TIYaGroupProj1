"use strict";

(function () {

  console.log('It Works!');

  $(document).ready(function () {

    $('ul.tabs li').click(function () {
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs li').removeClass('active');
      $('.accordion').removeClass('active');

      $(this).addClass('active');
      $("#" + tab_id).addClass('active');
    });
  });

  var tagSearch = "plated+food";
  var flickrURL = 'https://api.flickr.com/services/rest?method=flickr.photos.search&tags=' + tagSearch + '&format=json&nojsoncallback=1&api_key=ba1b9d0f8d9ba8dc20eadd024c969c34';
  var menuURL = 'https://json-data.herokuapp.com/restaurant/menu/1';
  var newsURL = 'https://json-data.herokuapp.com/restaurant/news/1';
  var specialURL = 'https://json-data.herokuapp.com/restaurant/special/1';

  var newsPromise = $.getJSON(newsURL);

  newsPromise.then(function (newsResponse) {
    $('.newsTitle').append(newsResponse.title);
  });

  newsPromise.then(function (newsResponse) {
    $('.newsPost').append(newsResponse.post);
  });

  var menuPromise = $.getJSON(menuURL);
  var specialPromise = $.getJSON(specialURL);

  // menu Sections
  menuPromise.then(function (menuResponse) {
    // console.log(menuResponse);

    // Specials section
    // specialPromise.then(function (specialResponse) {
    //   let specialItemId = _.values(_.pick(specialResponse,'menu_item_id'));
    //   let specialItemIdValue = _.first(specialItemId);
    // });

    var menuSections = _.keys(menuResponse);
    var arrayofArrays = _.values(menuResponse);

    var appetizers = _.pick(menuResponse, 'appetizers');
    var appValues = _.propertyOf(appetizers)('appetizers');
    // console.log(appValues);

    var entrees = _.pick(menuResponse, 'entrees');
    var entValues = _.propertyOf(entrees)('entrees');
    // console.log(entValues);

    var sides = _.pick(menuResponse, 'sides');
    var sideValues = _.propertyOf(sides)('sides');
    // console.log(sideValues);

    var menuNumber = Math.floor(Math.random() * (3 - 0));
    var specials = entValues[menuNumber];
    // console.log(menuNumber)
    console.log(specials);

    _.each(appValues, function (object) {
      var appTemplateString = $('#appetizers').text();
      var renderApps = _.template(appTemplateString);
      var appHTML = renderApps(object);
      $('.appetizers').append(appHTML);
    });

    _.each(entValues, function (object) {
      var entreesTemplateString = $('#entrees').text();
      var renderEnts = _.template(entreesTemplateString);
      var entreeHTML = renderEnts(object);
      $('.entrees').append(entreeHTML);
    });

    _.each(sideValues, function (object) {
      var sidesTemplateString = $('#sides').text();
      var renderSides = _.template(sidesTemplateString);
      var sidesHTML = renderSides(object);
      $('.sides').append(sidesHTML);
    });

    _.each(specials, function (object) {
      var specialTemplateString = $('#special').text();
      var renderSpecial = _.template(specialTemplateString);
      var specialHTML = renderSpecial(object);
      $('.menuSpecial').append(specialHTML);
    });

    // if (object.allergy > 0) {
    //   $('.icons').addClass($('showAllergy'));
    // };

    // if (object.favorite > 0) {
    //   $('.icons').addClass($('showFavorite'))
    // };

    // if (object.spicy > 0) {
    //   $('.icons').addClass($('showSpicy'));
    // };

    // if (object.vegan > 0) {
    //   $('.icons').addClass($('showVegan'));
    // };
  });

  var flickrPromise = $.getJSON(flickrURL);

  flickrPromise.then(function (flickrResponse) {
    var arrayOfPhotoObjects = flickrResponse.photos.photo;
    var numberOfImages = 5;
    var sampleOfPhotoObjects = _.sample(arrayOfPhotoObjects, numberOfImages);
    var photoTemplateString = $('#photoObject').text();
    var renderPhoto = _.template(photoTemplateString);

    _.each(sampleOfPhotoObjects, function (photo) {
      var photoHTML = renderPhoto(photo);
      $('.photostream').append(photoHTML);
    });

    var arrayOfSpecialPhoto = flickrResponse.photos.photo;
    var numberOfSpecials = 1;
    var sampleOfSpecialObjects = _.sample(arrayOfSpecialPhoto, numberOfSpecials);
    var photoSpecialString = $('#photoSpecial').text();
    var renderSpecial = _.template(photoSpecialString);

    _.each(sampleOfSpecialObjects, function (photo) {
      var specialHTML = renderSpecial(photo);
      $('.specialPhoto').append.HTML;
    });
  });
})();
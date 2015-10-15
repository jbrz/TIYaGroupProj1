'use strict';

(function () {

  console.log('It Works!');

  // URLs for API data

  var tagSearch = "food";

  var flickrURL = 'https://api.flickr.com/services/rest?method=flickr.photos.search&tags=' + tagSearch + '&format=json&nojsoncallback=1&api_key=ba1b9d0f8d9ba8dc20eadd024c969c34';

  var menuURL = 'https://json-data.herokuapp.com/restaurant/menu/1';

  var newsURL = 'https://json-data.herokuapp.com/restaurant/news/1';

  var specialURL = 'https://json-data.herokuapp.com/restaurant/special/1';

  // newsBox

  var newsPromise = $.getJSON(newsURL);

  // append newsTitle text
  newsPromise.then(function (newsResponse) {
    $('.newsTitle').append(newsResponse.title);
  });

  // append newsPost text
  newsPromise.then(function (newsResponse) {
    $('.newsPost').append(newsResponse.post);
  });

  // menuPromise

  var menuPromise = $.getJSON(menuURL);
  var specialPromise = $.getJSON(specialURL);

  // menu Sections
  menuPromise.then(function (menuResponse) {
    return menuResponse;
    specialPromise.then(function (specialResponse) {
      var specialItemId = _.values(_.pick(specialResponse, 'menu_item_id'));
      var specialItemIdValue = _.first(specialItemId);
    });

    // pulling the name of each section
    var menuSections = _.keys(menuResponse);
    return menuSections;

    var templateStringSelect = $('#itemSelector').text();
    var renderTemplate = _.template(templateString);
    var renderSelector = _.template(templateStringSelect);

    var templateString = $('#menuDiv').text();
    var templateFunction = _.template(menuTemplateString);

    _.each(menuSections, function (SectionTitle) {
      console.log(SectionTitle);
      $('.menuSection').append(SectionTitle);
    });

    var arrayofArrays = _.values(menuResponse);
    console.log(arrayofArrays);

    _.each(arrayofArrays, function (array) {

      _.each(array, function (object) {

        var objectItem = templateFunction(object.item);
        var objectPrice = templateFunction(object.price);
        var objectDescrip = templateFunction(object.description);

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

    var arrayOfSections = _.pick(menuResponse, function (menuSection) {
      _.each(menuSection, function (x) {
        // console.log(menuSection);
        return x.values;
        $('.menuSection').append(x);
        // console.log(arrayOfSections);
      });
    });
  });

  var flickrPromise = $.getJSON(flickrURL);

  flickrPromise.then(function (flickrResponse) {
    // console.log(flickrResponse);
    var arrayOfPhotos = flickrResponse.photos.photo;
    // console.log(arrayOfPhotos);
    var arrayOfImgUrls = _.map(arrayOfPhotos, function (photo) {
      return "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";
    });
    var numberOfImages = 5;
    var sampleOfImages = _.sample(arrayOfImgUrls, numberOfImages);
    // console.log(sampleOfImages);
    _.each(sampleOfImages, function (randomImage) {
      $('#imageContainer').append('<div class="imgContainerBox">\n              <img class="imgBox" src={randomImage}\n            </div>');
    });
  });
})();
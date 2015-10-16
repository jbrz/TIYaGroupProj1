"use strict";

(function () {
  console.log('It Works!');
  var tagSearch = "food";
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
  menuPromise.then(function (menuResponse) {
<<<<<<< HEAD
    specialPromise.then(function (specialResponse) {
      var specialItemId = _.values(_.pick(specialResponse, 'menu_item_id'));
      var specialItemIdValue = _.first(specialItemId);
    });
    console.log(menuResponse);
=======
    console.log(menuResponse);

    // Specials section
    // specialPromise.then(function (specialResponse) {
    //   let specialItemId = _.values(_.pick(specialResponse,'menu_item_id'));
    //   let specialItemIdValue = _.first(specialItemId);
    // });

    // pulling the name and item array of each section
>>>>>>> 4eb8ef3415b32a84a7499331d1665ed1348ea2f4
    var menuSections = _.keys(menuResponse);
    //   console.log(menuSections);
    var arrayofArrays = _.values(menuResponse);
<<<<<<< HEAD
    console.log(arrayofArrays);
    var menuTemplateString = $('#menuDiv').text();
    var renderTemplate = _.template(menuTemplateString);
    _.each(menuSections, function (sectionTitle) {
      var menuHTML = renderTemplate(sectionTitle);
      $('.menu').append(menuHTML);
    });

=======
    //   console.log(arrayofArrays);

    //  Injecting Menu <div>s
    var menuTemplateString = $('#menuDiv').text();
    var renderTemplate = _.template(menuTemplateString);
    var appetizers = _.pick(menuResponse, 'appetizers');
    console.log(appetizers);
    // let entrees = _.pick(menuResponse, 'entrees');
    // console.log(entrees);
    // let sides = _.pick(menuResponse, 'sides');
    // console.log(sides);

    _.each(appetizers, function (object) {
      var appTemplateString = $('#appetizers').text();
      var renderApps = _.template(appTemplateString);
      var appHTML = renderApps(object);
      $('.menu').append(appHTML);

      // appetizers.forEach(function (item){
      //   let itemTemplateString = $('#menuItem').text();
      //   let renderItems = _.template(itemTemplateString);
      //   let itemHTML = renderItems(item);
      //   $('.appetizerItems').append(itemHTML);
      // });
    });

    // _.each(entrees, function (object){
    //   let entTemplateString = $('#entrees').text();
    //   let renderEnts = _.template(entTemplateString);
    //   let entHTML = renderEnts(object);
    //   $('.menu').append(entHTML);

    //   // entrees.forEach(function (item){
    //   //   let itemTemplateString = $('#menuItem').text();
    //   //   let renderItems = _.template(itemTemplateString);
    //   //   let itemHTML = renderItems(item);
    //   //   $('.entreeItems').append(itemHTML);
    //   // })
    // });

    // _.each(sides, function (object){
    //   let sideTemplateString = $('#sides').text();
    //   let renderSides = _.template(sideTemplateString);
    //   let sideHTML = renderSides(object);
    //   $('.menu').append(sideHTML);

    // sides.forEach(function (item){
    //   let itemTemplateString = $('#menuItem').text();
    //   let renderItems = _.template(itemTemplateString);
    //   let itemHTML = renderItems(item);
    //   $('.sideItems').append(itemHTML);
    // });
    // });

    //  Filling Menu <div>s

>>>>>>> 4eb8ef3415b32a84a7499331d1665ed1348ea2f4
    _.each(arrayofArrays, function (array) {

      _.each(array, function (object) {

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

    // Attempt to use arrayOfSections
    // let arrayOfSections = _.pick(menuResponse, function (menuSection) {
    //   _.each(menuSection, function (x) {
    //     console.log(menuSection);
    //     return x.values;
    //     $('.menuSection').append(x);
    //     console.log(arrayOfSections);
    //   });
    // });
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
      $('#imageContainer').append("<div class=\"imgContainerBox\">\n              <img class=\"imgBox\" src={randomImage}</div>");
    });
  });
})();
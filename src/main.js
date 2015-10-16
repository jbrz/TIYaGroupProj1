"use strict";

(function () {

  console.log('It Works!');

  let tagSearch = "food";
  let flickrURL = 'https://api.flickr.com/services/rest?method=flickr.photos.search&tags='+ tagSearch + '&format=json&nojsoncallback=1&api_key=ba1b9d0f8d9ba8dc20eadd024c969c34';
  let menuURL = 'https://json-data.herokuapp.com/restaurant/menu/1';
  let newsURL = 'https://json-data.herokuapp.com/restaurant/news/1';
  let specialURL = 'https://json-data.herokuapp.com/restaurant/special/1';

  let newsPromise = $.getJSON(newsURL);


  newsPromise.then(function (newsResponse) {
    $('.newsTitle').append(newsResponse.title);
  });

  newsPromise.then(function (newsResponse) {
    $('.newsPost').append(newsResponse.post);
  });


  let menuPromise = $.getJSON(menuURL);
  let specialPromise = $.getJSON(specialURL);


// menu Sections
  menuPromise.then(function(menuResponse) {
    console.log(menuResponse);
    
// Specials section
    // specialPromise.then(function (specialResponse) {
    //   let specialItemId = _.values(_.pick(specialResponse,'menu_item_id'));
    //   let specialItemIdValue = _.first(specialItemId);
    // });
  console.log(menuResponse);


  let menuSections = _.keys(menuResponse);
  console.log(menuSections);


  let arrayofArrays = _.values(menuResponse);
  console.log(arrayofArrays);


  let menuTemplateString = $('#menuDiv').text();
  let renderTemplate = _.template(menuTemplateString);

  

// pulling the name and item array of each section
    let menuSections = _.keys(menuResponse);
    //   console.log(menuSections);
    let arrayofArrays = _.values(menuResponse);
    //   console.log(arrayofArrays);


//  Injecting Menu <div>s
    let menuTemplateString = $('#menuDiv').text();
    let renderTemplate = _.template(menuTemplateString);
    let appetizers = _.pick(menuResponse, 'appetizers');
    console.log(appetizers);
    // let entrees = _.pick(menuResponse, 'entrees');
    // console.log(entrees);
    // let sides = _.pick(menuResponse, 'sides');
    // console.log(sides);


    _.each(appetizers, function (object) {
      let appTemplateString = $('#appetizers').text();
      let renderApps = _.template(appTemplateString);
      let appHTML = renderApps(object);
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
    
    _.each(arrayofArrays, function (array) {

      _.each(array, function (object) {
        
        let objectItem    = renderTemplate(object.item);
        let objectPrice   = renderTemplate(object.price);
        let objectDescrip = renderTemplate(object.description);


        $('.menuItemName').append(objectItem);
        $('.menuItemPrice').append(objectPrice);
        $('.menuItemDescription').append(objectDescrip);


        if (object.allergy > 0) {
          $('.icons').addClass($('showAllergy'));
        };

        if (object.favorite > 0) {
          $('.icons').addClass($('showFavorite'))
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




let flickrPromise = $.getJSON(flickrURL);
  

  flickrPromise.then( function (flickrResponse) {
    // console.log(flickrResponse);
    let arrayOfPhotos = flickrResponse.photos.photo;
    // console.log(arrayOfPhotos);
    let arrayOfImgUrls = _.map(arrayOfPhotos, function (photo){ 
    return "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg"
    });
    let numberOfImages = 5;
    let sampleOfImages = _.sample(arrayOfImgUrls, numberOfImages);
    // console.log(sampleOfImages);
    _.each(sampleOfImages, function(randomImage) {
        $('#imageContainer').append(`<div class="imgContainerBox">
              <img class="imgBox" src={randomImage}</div>`
        );
    });

  });




}());

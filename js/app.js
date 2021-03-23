"use strict";

// constructor function for creating images objects, such that properties - from data json file, containns objects
let keyArr = [];
let selectedKey = "";
function Image(image) {
  this.image_url = image.image_url;
  this.title = image.title;
  this.description = image.description;
  this.keyword = image.keyword;
  this.horns = image.horns;
  if (!keyArr.includes(this.keyword)) {
    keyArr.push(this.keyword);
  }
}

// declare the render function using protoype, jQuery css selectors/DOM

Image.prototype.render = function () {
  $("main").append(`   
    <template id="photo-template">
    <h2> ${this.title}</h2>
    <img src="${this.image_url}" alt="${this.title}">
    <p>${this.description}</p>
  </template>`);
};

// declare the clone/copy function using protoype, , jQuery css selectors/DOM

Image.prototype.copyImageTemplate = function () {
  let imageGen = $("#photo-template").clone();
  imageGen.find("h2").text(this.title);
  imageGen.find("p").text(this.description);
  imageGen.find("img").attr("src", this.image_url);
  imageGen.removeAttr("id");
  imageGen.attr("id", this.title);
  imageGen.attr("class", "imageRend");
  $("main").append(imageGen);
};

// clear all images

Image.removeAll = function () {
  $("main").empty();
};
// declare get data object(variable)

const getData = {
  method: "get",
  dataType: "json",
};

// use ajax method in jQuery to get data an array objects, followed by then method, which will determine what will happen to the data
// pass on each object in the array of data, create new object, then save in a variable, then render that object, that image, clone, copy ,prototype such that the new object can access it
// clone inside for loop, for each

$.ajax("./data/page-1.json", getData).then((dataArray) => {
  console.log(dataArray);
  dataArray.forEach((element) => {
    // console.log(element)
    let imageNew = new Image(element);
    // console.log(imageNew)
    imageNew.copyImageTemplate();
  });
  // render images with selected keyword - event
  keyArr.forEach((element) => {
    $("select").append(`<option value=${element}>${element}</option>`);
  });
  console.log(keyArr);
  // render selected images
  $("#select-list").on("click", function (event) {
    Image.removeAll();
    dataArray.forEach((element) => {
      if (event.target.value === element.keyword) {
        console.log(event.target.value === element.keyword);
        console.log(element.keyword);
        let imageNew = new Image(element);
        imageNew.copyImageTemplate();
      }
    });
  });
});

// render selected images

// $("#select-list").on("click", function (event) {
//   Image.removeAll();
//   console.log(event.target.value);
//   selectedKey = event.target.value;
//   console.log(selectedKey)
//   //       dataArray.forEach((element) => {
//   //         if (event.target.value === element.keyword) {
//   //           let imageNew = new Image(element);

//   //           imageNew.copyImageTemplate();
//   //         }

//   //       });

//   });

//   console.log(selectedKey)

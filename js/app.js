// "use strict";

// let keyArr1 = [];
// let all1 = [];
// let keyArr2 = [];
// let all2 = [];
// let all = [];
// function Image(image) {
//   this.image_url = image.image_url;
//   this.title = image.title;
//   this.description = image.description;
//   this.keyword = image.keyword;
//   this.horns = image.horns;
// }

// Image.prototype.createTemplate = function () {
//   $("main").append(`   
//     <div id="photo-template">
//     <h2> ${this.title}</h2>
//     <img src="${this.image_url}" alt="${this.title}">
//     <p>${this.description}</p>
//   </div>`);
// };

// // using JQuery
// // Image.prototype.copyImageTemplate = function () {
// //   let imageGen = $("#photo-template").clone();
// //   imageGen.find("h2").text(this.title);
// //   imageGen.find("p").text(this.description);
// //   imageGen.find("img").attr("src", this.image_url);
// //   imageGen.removeAttr("id");
// //   imageGen.attr("id", `${this.keyword}`);
// //   imageGen.attr("class", `${this.keyword}`);
// //   $("main").append(imageGen);
// // };

// // using Mustache

// Image.prototype.copyImageTemplate = function () {
// // get template from html (by ID)
// let template = $("#main-template").html();
// console.log(template)
// // bind template + data (object)
// let divImg = Mustache.render(template, this);
// // append created element to parent
// console.log(this)
// console.log(divImg)
// $("main").append(`${divImg}`);
// };

// const getData = {
//   method: "get",
//   dataType: "json",
// };

// $.ajax("data/page-1.json", getData).then((dataArray) => {
//   console.log(dataArray);
//   dataArray.forEach((element) => {
//     let imageNew = new Image(element);
//     imageNew.copyImageTemplate();
//   });
//   console.log(dataArray);
//   keyArr1.forEach((element) => {
//     $("select").append(`<option value=${element}>${element}</option>`);
//   });
//   console.log(keyArr1);
// });

// $("select").change(function () {
//   $("main").html("");
//   let selected = $(this).val();
//   all = all1 + all2;
// console.log (all)
//   all.forEach((element) => {
//     console.log(selected);
//     if (selected === element.keyword) {
//       element.copyImageTemplate();
//     }
// }); })


// $("#page1").click( function () {
//   $.ajax("data/page-1.json", getData).then((dataArray) => {
//     $("main").html("");
//     $("select").html("");
//     $("select").append(
//       `<option value="default">Filter by Keyword</option>`
//     )
//     dataArray.forEach((element) => {
//       let imageNew = new Image(element);
//       all1.push(imageNew);
//       if (!keyArr1.includes(imageNew.keyword)) {
//         keyArr1.push(imageNew.keyword);
//       }
//       imageNew.copyImageTemplate();
//     });
//     keyArr1.forEach((element) => {
//       $("select").append(`<option value=${element}>${element}</option>`);
//     });
//     console.log(all1);
//     console.log(keyArr1);
//   });
// }
// )


// $("#page2").click( function () {
//   $.ajax("data/page-2.json", getData).then((dataArray) => {
//     $("main").html("");
//     $("select").html("");
//     $("select").append(
//       `<option value="default">Filter by Keyword</option>`
//     )
//     dataArray.forEach((element) => {
//       let imageNew = new Image(element);
//       all2.push(imageNew);
//       if (!keyArr2.includes(imageNew.keyword)) {
//         keyArr2.push(imageNew.keyword);
//       }
//       imageNew.copyImageTemplate();
//     });
//     keyArr2.forEach((element) => {
//       $("select").append(`<option value=${element}>${element}</option>`);
//     });
//     console.log(all2);
//     console.log(keyArr2);
//   });
// }
// )
// Sort by Horns

// $('#numberofHorns').change(function () {
//   if( ($(this).is(':checked'))){
//     $("main").html("");
//     all.sort(sortByHorns).forEach(element => {
//       element.copyImageTemplate()
//     }); ;
//   }
//   else {
//     all.forEach(element => {
//        element.copyImageTemplate()
//     })  
//   }
// })

// // Sort by Title

// $('#title').change(function () {
//   if( ($(this).is(':checked'))){
//     $("main").html("");
//     all.sort(sortByTitle).forEach(element => {
//       element.copyImageTemplate()
//     }); ;
//   }
//   else {
//     all.forEach(element => {
//        element.copyImageTemplate()
//     })  
//   }

// })

// // sort criteria
// function sortByTitle(a,b){
//   if (a.title<b.title) {
//     return -1;
//   }
//   if (a.title>b.title) {
//     return 1;
//   }
//   return 0;
// }

// // sortByHorns

// function sortByHorns(a,b){
//   if (a.horns<b.horns) {
//     return -1;
//   }
//   if (a.horns>b.horns) {
//     return 1;
//   }
//   return 0;
// }



// TEST 

"use strict";

// constructor function for creating images objects, such that properties - from data json file, containns objects
let keyArr = [];
let all = [];
let keyArr1 = [];
let all1 = [];
let keyArr2 = [];
let all2 = [];
function Image(image) {
  this.image_url = image.image_url;
  this.title = image.title;
  this.description = image.description;
  this.keyword = image.keyword;
  this.horns = image.horns;
  all.push(this)
  if (!keyArr.includes(this.keyword)) {
    keyArr.push(this.keyword);
  }

}

// declare the render function using protoype, jQuery css selectors/DOM

Image.prototype.render = function () {
  $("main").append(`   
    <div id="photo-template">
    <h2> ${this.title}</h2>
    <img src="${this.image_url}" alt="${this.title}">
    <p>${this.description}</p>
  </div>`);
};

// declare the clone/copy function using protoype, , jQuery css selectors/DOM

Image.prototype.copyImageTemplate = function () {
  let imageGen = $("#photo-template").clone();
  imageGen.find("h2").text(this.title);
  imageGen.find("p").text(this.description);
  imageGen.find("img").attr("src", this.image_url);
  imageGen.removeAttr("id");
  imageGen.attr("id", `${this.keyword}`);
  imageGen.attr("class",`${this.keyword}`);
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

$.ajax("data/page-1.json", getData).then((dataArray) => {
  console.log(dataArray);
  dataArray.forEach((element) => {
    // console.log(element)
    let imageNew = new Image(element);
    // console.log(imageNew)
    imageNew.copyImageTemplate();
  });
  console.log(dataArray)
  keyArr.forEach((element) => {
    $("select").append(`<option value=${element}>${element}</option>`);
  });
  console.log(keyArr);

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

// $("#select-list").on("click", function (event) {
//   Image.removeAll();
//   allHorns.forEach((element) => {
//     if (event.target.id === element.keyword)
      
//   });
// });

// $("select").change(function () {

//   let selected= $(this).val()
//  all.forEach(element => {
//     if (selected === element.keyword) {
//       $(`.${element.keyword}`).addClass("on")
//     }
//     else {
//       $(`.${element.keyword}"`).addClass("off")
//     }
//   });
  
// })

// console.log(all)


$("select").change(function () {
  $("main").html("")
  let selected= $(this).val()
 all.forEach(element => {
   console.log(selected)
   if (selected === element.keyword) {
    element.copyImageTemplate()
 }  
 })
})

// Sort by Horns

$('#numberofHorns').change(function () {
  if( ($(this).is(':checked'))){
    $("main").html("");
    all.sort(sortByHorns).forEach(element => {
      element.copyImageTemplate()
    }); ;
  }
  else {
    all.forEach(element => {
       element.copyImageTemplate()
    })  
  }
})

// Sort by Title

$('#title').change(function () {
  if( ($(this).is(':checked'))){
    $("main").html("");
    all.sort(sortByTitle).forEach(element => {
      element.copyImageTemplate()
    }); ;
  }
  else {
    all.forEach(element => {
       element.copyImageTemplate()
    })  
  }

})

// sort criteria
function sortByTitle(a,b){
  if (a.title<b.title) {
    return -1;
  }
  if (a.title>b.title) {
    return 1;
  }
  return 0;
}

// sortByHorns

function sortByHorns(a,b){
  if (a.horns<b.horns) {
    return -1;
  }
  if (a.horns>b.horns) {
    return 1;
  }
  return 0;
}



$("#page1").click( function () {
  $.ajax("data/page-1.json", getData).then((dataArray) => {
    $("main").html("");
    $("select").html("");
    $("select").append(
      `<option value="default">Filter by Keyword</option>`
    )
    dataArray.forEach((element) => {
      let imageNew = new Image(element);
      all1.push(imageNew);
      if (!keyArr1.includes(imageNew.keyword)) {
        keyArr1.push(imageNew.keyword);
      }
      imageNew.copyImageTemplate();
    });
    keyArr1.forEach((element) => {
      $("select").append(`<option value=${element}>${element}</option>`);
    });
    console.log(all1);
    console.log(keyArr1);
  });
}
)


$("#page2").click( function () {
  $.ajax("data/page-2.json", getData).then((dataArray) => {
    $("main").html("");
    $("select").html("");
    $("select").append(
      `<option value="default">Filter by Keyword</option>`
    )
    dataArray.forEach((element) => {
      let imageNew = new Image(element);
      all2.push(imageNew);
      if (!keyArr2.includes(imageNew.keyword)) {
        keyArr2.push(imageNew.keyword);
      }
      imageNew.copyImageTemplate();
    });
    keyArr2.forEach((element) => {
      $("select").append(`<option value=${element}>${element}</option>`);
    });
    console.log(all2);
    console.log(keyArr2);
  });
}
)
// "use strict";

// // Requiring a JSON file automatically parses it and returns the data. These
// // are just example tweets to make it less tedious to style the app initially.
// const db = {
//   tweets: require("../data-files/initial-tweets")
// }

// module.exports = db;



// <form class = "customer" action="/users/orders" method="POST"></form>

// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */

// $(() => {
//   render(foods, createFoodItem);
//   const orderForDatabasePost = {};
//   $(document).on('click', '.add_food_item', function(event) {
//     createOrderItem($(event.target).val(), $(event.target).attr("data-id"));
//     orderCounter();
//   });

//   $(document).on('click', '.remove_food_item', function() {
//     $(this).parent().remove();
//     orderCounter();
//   });

//   // $(document).on('click', '.checkout', function() {
//   // });

// });

// const orderCounter = function () {
//   $('.checkout span').text($('.customer_cart > *').length); //counting direct child nodes
// };

// const createFoodItem = function(food) {
//   const food_item = $(`
//   <div class = food_item>
//     <img src = "${food.image_url}"></img>
//     <div class = "food_item_details">
//       <p>${food.name}</p>
//       <button class="add_food_item" value = "${food.name}" data-id = "${food.id}">Add</button>
//     </div>
//   </div>
//   `);
//   return $('.restaurant_food_items').prepend(food_item);
// };

// const createOrderItem = function(foodName, foodId) {
//   const order_item = $(`
//   <input name= "food" value="${foodId}" />
//   <div class = "order_item">
//     <div class = "order_details">
//       <p>${foodName}</p>
//     </div>
//     <button class="remove_food_item" value = "">Remove</button>
//   </div>`);
//   return $('.customer_cart').prepend(order_item);
// };

// const render = function(dataObject, callback) {
//   for (let object of dataObject) {
//     callback(object);
//   }
// };

"use strict";

// Requiring a JSON file automatically parses it and returns the data. These
// are just example tweets to make it less tedious to style the app initially.
const db = {
  tweets: require("../data-files/initial-tweets")
}

module.exports = db;






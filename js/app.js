var app = angular.module("myApp",[]);
app.controller("myController", function($scope){

	$scope.recipes = [
	{
		recipe: "Chicken Dish",
		image: "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/JM65V3JK8X.jpg",
		description: "Chicken cooked lightly to crip. Side of pickle"

	},
	{
		recipe: "Turkey",
		image: "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/D7F9292D60.jpg",
		description: "Turkey cooked lightly to crip. Side of pickle"

	},
	{
		recipe: "Sandwich",
		image: "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/T4EK2NTHY2.jpg",
		description: "Turkey cooked lightly to crip. Side of pickle"
	},
	{
		recipe: "Appetizer",
		image: "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/1FFE9122BE.jpg",
		description: "Chicken cooked lightly to crip. Side of pickle"

	},
	{
		recipe: "Burger",
		image: "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/JSFGN9B9CV.jpg",
		description: "Turkey cooked lightly to crip. Side of pickle"

	},
	{
		recipe: "Salmon",
		image: "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/S4LJZONO2I.jpg",
		description: "Turkey cooked lightly to crip. Side of pickle"
	}
  ];

});
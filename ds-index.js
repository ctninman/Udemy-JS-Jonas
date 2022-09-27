'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  rName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	order: function(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
	},


	// orderDelivery: function (obj) {
	// 	console.log(obj)
	// },

	// DESTRUCTURE ABOVE IMMEDIATELY
	// curly brackets, think REACT training
	// defaults entered with equals
	orderDelivery: function ({starterIndex = 0, mainIndex = 0, time = '20:00', address}) {
		console.log(`RECEIVED: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} att ${time}.`)
	},

	orderPasta: function(ing1, ing2, ing3) {
		console.log(`Let's make a pasta dish with ${ing1}, ${ing2}, and ${ing3}`)
	},

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};



const arr = [2,3,4]
const a = arr[0]
const b = arr[1]
const c = arr[2]
// works the same as 
// DESTRUCTURING, as below
const [x,y,z] = arr
// does not mutate original array
console.log('a:', a)
console.log('b:', b)
console.log('c:', c)
console.log('x:', x)
console.log('y:', y)
console.log('z:', z)

const [first, second] = restaurant.categories;
const [firstSkip, ,thirdSkip] = restaurant.categories;


let [feerst, seecond] = restaurant.categories;
// SWITCHING VARIABLES
[feerst, seecond] = [seecond, feerst]

console.log(restaurant.order(2,2))
//Destructure order
const [starter, mainCourse] = restaurant.order(2,0)
console.log('starter: ', starter, ', main: ', mainCourse)

// DESTRUCTURE NESTED ARRAY
const nested = [2, 4, [5, 6]]

const [i, , [j, k]] = nested
console.log(i,j,k)

// DEFAULT VALUES

const [p = 1, q = 1, r = 1] = [8,9]
console.log(p,q,r)
// 8 9 1


// OBJECT DESTRUCTURING
const {rName, openingHours, categories} = restaurant 

console.log(rName, openingHours, categories)

// CHANGE NAME
const {rName: restaurantName, openingHours: hours, categories: cuisine} = restaurant

console.log(restaurantName, hours, cuisine)


// MUTATING VARIABLES
let e = 111;
let f = 124;
const obj = {e: 5, f: 10, g: 15}
// must wrap in order to destructure in this case, can't begin with curly braces
// hmmmmmm, not working
// ({e,f} = obj);
// console.log(e,f)

const {fri} = openingHours

// further destructuring

const {fri: { open: op, close: cl }} = openingHours
console.log ('open at: ', op, 'closed at:', cl)


restaurant.orderDelivery({time: '22:30', address: 'via del sole 21', mainIndex: 2, starterIndex: 1})



// THE SPREAD OPERATOR

const arr1 = [7, 8]
const arr2 = [5, 6, ...arr1]
console.log(arr2)
// [5,6,7,8]
const arr3 = [5,6,arr1]
console.log(arr3)
// [5,6,[7,8]]
console.log(...arr1)
// 5 6
console.log([...arr1])
// [5, 6]

// spread operators work on iterables
// iterables are: arrays, strings, maps, sets
// NOT OBJECTS


const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Let's make pasta! Ingredient 2?"), prompt("Let's make pasta! Ingredient 3?")]

restaurant.orderPasta(...ingredients)
'use strict'

// WINDOW //
console.log(this)


// UNDEFINED when in strict mode //
// has its own this keyword, but it is undefined
const calcAge = function (birthYear) {
	console.log (2022 - birthYear);
	console.log(this)
}

calcAge(1984)


// WINDOW, arrow functions don't get their own 'this' keyword, so 'this' takes on the parent 'this', in this case 'window'
const calcAgeArrow = birthYear => {
	console.log (2022 - birthYear);
	console.log(this)
}

calcAgeArrow(1977)

const chris = {
	year: 1984,
	// OBJECT THAT CALLS THE METHOD = "THIS"
	calcAgeMethod: function () {
		console.log(2022 - this.year);
		console.log(this);
	}
}

chris.calcAgeMethod();

const matteo = {
	year: 2017
}

// matteo borrows chris' method, 'this' points to 'matteo' because 'this' points to whatever object calls the method
matteo.calcAgeMethod = chris.calcAgeMethod

matteo.calcAgeMethod()

const f = chris.calcAgeMethod

console.log(f)

// UNDEFINED because calcAgeMethod is not called by an object, so 'this' is undefined
// f()


const anto = {
	firstName: "Antonella",
	year: 1984,
	// OBJECT THAT CALLS THE METHOD = "THIS"
	calcAgeDec: function () {
		console.log(2022 - this.year);
		console.log(this);
		const isMillenial = function() {
			console.log(this.year >= 1981 && this.year <= 1996)
		}
		// returns undefined, isMillenial() is a regular function call, not a method called on 
		// an object, so 'this' is undefined
		isMillenial();
	},
	greet: () =>console.log(`hey ${this.firstName}.`)
}

anto.greet();
// "Hey, undefined." Arrow functions do not get their own this keyword
// General rule, do not use arrow function for a method
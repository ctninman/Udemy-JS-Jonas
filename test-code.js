console.log('test code activated')

const chris = {
	firstName: "Chris",
	lastName: 'Ninman',
	birthYear: 1984,
	job: 'software engineer',
	friends: ['Michael', "Dwight", "Jim"],
	hasDriversLicense: false,
	calcAge: function (birthYear) {
		return 2037 - birthYear
	},

	thisCalcAge: function () {
		console.log(this)
		return 2037 - this.birthYear
	},

	thisAgeCalc () {
		this.age = 2037 - this.birthYear;
		return this.age
	},

	getSummary: function () {
		return `${this.firstName} is a ${this.thisCalcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
	}
}

console.log (chris.lastName)
console.log(chris.calcAge(1984));
console.log(chris.thisCalcAge(1984));


console.log(chris['calcAge'](1984));

console.log(chris.getSummary());

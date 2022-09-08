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

const john = {
	firstName: 'John',
	lastName: 'Smith',
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.BMI = this.mass / this.height ** 2
		return this.BMI
	}
}

const mark = {
	firstName: 'Mark',
	lastName: 'Miller',
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.BMI = this.mass / this.height ** 2
		return this.BMI
	}
}


// need to call these methods to the values
mark.calcBMI()
john.calcBMI()

// if (mark.calcBMI() > john.calcBMI()) {
if (mark.BMI > john.BMI) {
	console.log(`${mark.firstName} ${mark.lastName}'s BMI(${mark.BMI}) is higher than ${john.firstName} ${john.lastName}'s BMI (${john.BMI})'`);
} else if (john.BMI > mark.BMI) {
	console.log('John you so fat');
} else {
	console.log('2 big tubbies');
}


console.log(mark.calcBMI())
console.log(john.calcBMI())

console.log(mark.BMI, john.BMI)


// FOR LOOPS

// for (initial value of counter, condition where loop continues as long as it is true, update counter)  

for(let repetition = 1; repetition <= 10; repetition++) {
	console.log(`Lifting weights, repetition #${repetition}`);
}

for(let rep = 1; rep <= 10; rep++) {
	console.log(`Lifting weights, repetition #${rep}`);
}

for(let i = 1; i <= 10; i++) {
	console.log(`Lifting weights, repetition #${i}`);
}
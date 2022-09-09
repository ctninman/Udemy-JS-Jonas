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

// LOOP THROUGH ARRAY

const chrisArray = [
	"Chris",
	"Ninman",
	1984,
	"software developer",
	["Matteo", "Kiran", "Ella"],
	true
]

for (let i = 0; i < chrisArray.length ; i++) {
	console.log(chrisArray[i] + ', ' + typeof chrisArray[i])
}


// CREATE NEW ARRAY WITH LOOP
const types = []
const types2 = []

for (let i = 0; i < chrisArray.length ; i++) {
	types[i] = typeof chrisArray[i]
}

// OR

for (let i = 0; i < chrisArray.length ; i++) {
	types2.push(typeof chrisArray[i])
}

console.log(types);
console.log('with push', types2);

const years = [1997, 2010, 1987, 2019]
const ages = [];

for (let i = 0; i < years.length; i++) {
	ages.push(2022 - years [i])
}

console.log("ages: ", ages);

// CONTINUE AND BREAK
// continue immediately exits current iteration and goes to next loop
// if (typeof chrisArray[i] !== 'string') continue;

//break leave the loop
//  if (typeof chrisArray[i] === 'number') break;



const ninmanArray = [
	"Chris",
	"Ninman",
	1984,
	"software developer",
	["Matteo", "Kiran", "Ella"],
	true
]

// LOOP IN REVERSE
for (let i = ninmanArray.length - 1; i >= 0; i--) {
	console.log(i, ninmanArray[i]);
}

// LOOP INSIDE A LOOP
for (let exercise = 1; exercise < 4; exercise++) {
	console.log(`--- Starting exercise ${exercise}`);
	for(let rep = 1; rep < 6; rep++) {
		console.log(`Lifting weight repetition ${rep}`);
	}
}

// WHILE LOOP
let rep = 1

while (rep <=10) {
	console.log(`Lifting rep ${rep}`);
	rep++
}



for (i = 1; i < 20; i++) {
	let dice = Math.trunc(Math.random() * 6) + 1; 
	console.log('dice roll = ', dice);
}

// while dice is not 6, reroll
// while works when you don't know how many times loop will run
let diceRoll = Math.trunc(Math.random() * 6) + 1;
while (diceRoll !== 6) {
	console.log(`You rolled a ${diceRoll}`);
	diceRoll = Math.trunc(Math.random() * 6) + 1;
	if (diceRoll === 6) {
		console.log(`You rolled a 6. Loop ending...`);
	}
}
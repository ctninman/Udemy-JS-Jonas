'use strict'

// 1. UNDERSTAND THE PROBLEM

// INPUT
// An array
// Array of numbers

// OUTPUT
// A string
// `... a1 in 1 day ... a2 in 2 days ... a3 in 3 days`

// TO DO 
// Create function 'printForecast' that takes array and logs output string

// 2. BREAK IT INTO SUB-PROBLEMS

// Create empty string
// Loop through array, 
// For each number, create interpolated string with iteration number
// Add interpolated string to original empty string
// Log string

let weeksForecast = ''; 

function printForecast (tempArray) {
	for (let i = 0; i < tempArray.length; i++) {
		const dailyForecast = `...${tempArray[i]} degrees in ${i + 1} ${i === 0 ? 'day' : 'days'} `
		weeksForecast = weeksForecast + dailyForecast
	}
	console.log(weeksForecast);
}

printForecast([14,16,18,22,31])
"use strict";
// import { reverse } from "dns";
Object.defineProperty(exports, "__esModule", { value: true });
// // Function to simulate a shopping scenario
// function simulateShopping(): void {
//     console.log("Welcome to the supermarket!");
//     let wantsFruits: boolean = true; // Change this to simulate different scenarios
//     // Scenario 1 - Buying Groceries
//     console.log("\nScenario 1 - Buying Groceries:");
//     let totalBill: number = 0;
//     if (wantsFruits) {
//         console.log("Customer wants fruits.");
//         let fruits = ["Apple", "Banana", "Orange"];
//         let fruitPrices = [1.5, 2, 1];
//         console.log("Available fruits and their prices:");
//         for (let i = 0; i < fruits.length; i++) {
//             console.log(`${fruits[i]} - $${fruitPrices[i]}`);
//             totalBill += fruitPrices[i];
//         }
//     } else {
//         console.log("Customer wants vegetables.");
//         let vegetables = ["Tomato", "Onion", "Potato"];
//         let vegetablePrices = [2, 1.5, 1];
//         console.log("Available vegetables and their prices:");
//         for (let i = 0; i < vegetables.length; i++) {
//             console.log(`${vegetables[i]} - $${vegetablePrices[i]}`);
//             totalBill += vegetablePrices[i];
//         }
//     }
//     console.log(`Total bill: $${totalBill.toFixed(2)}`);
//     // Scenario 2 - Checking Discounts
//     console.log("\nScenario 2 - Checking Discounts:");
//     const discountThreshold: number = 10; // Change the discount threshold as needed
//     let discountedTotal: number = totalBill;
//     if (totalBill > discountThreshold) {
//         let discountPercentage: number = 10; // Change the discount percentage as needed
//         let discountAmount: number = (totalBill * discountPercentage) / 100;
//         discountedTotal -= discountAmount;
//         console.log(`Discount applied: ${discountPercentage}%`);
//         console.log(`Discounted total: $${discountedTotal.toFixed(2)}`);
//     } else {
//         console.log("No discount applied.");
//     }
//     // Scenario 3 - Checkout Process
//     console.log("\nScenario 3 - Checkout Process:");
//     console.log("Simulating the checkout process...");
//     // Nested loops for payment methods
//     let paymentMethod: string = "";
//     let paymentOptions = ["Cash", "Credit Card", "Debit Card"];
//     for (let i = 0; i < paymentOptions.length; i++) {
//         console.log(`[${i + 1}] ${paymentOptions[i]}`);
//     }
//     // Ask for the preferred payment method
//     let chosenOption: number = 2; // Change this to simulate different payment options
//     if (chosenOption >= 1 && chosenOption <= paymentOptions.length) {
//         paymentMethod = paymentOptions[chosenOption - 1];
//         console.log(`Chosen payment method: ${paymentMethod}`);
//         console.log(`Thank you for shopping with us!`);
//     } else {
//         console.log("Invalid payment option.");
//     }
// }
// // Call the simulateShopping function to start the simulation
// simulateShopping();
// //Task:2
// //Scenario 1: Sum numbers
// function add(number1: number, number2: number) {
//       return number1 + number2; //10 + 20 = 30
//     }
//     // let result: number = add(10, 20);
//     // console.log(result);
//     console.log(add(10, 20));
//     //Scenario 2: Check Even or Odd
//     function checkEvenOrOdd(givenNumber: number){
//       if (givenNumber % 2 === 0) {
//         return 'Your Number is Even';
//       } else {
//         return 'Your Number is Odd';
//       } // Moduolo Operator
//     }
//     console.log(checkEvenOrOdd(11));
//     //Scenario 3: Calculate Area:
//     function CalculateArea(width: number, hight: number): number {
//         return hight * width;
//     }
//     CalculateArea(15,15);
//     console.log(CalculateArea);
//Scenario 4: String Reversal
// function reverseString(inputString: string): string {
//     return inputString.split("").reverse().join("");
// }
// console.log(reverseString("Faisal"));
//Scenario 5: Temperature Conversion:
//formula ==== F = (°C) * 9/5) + 32
// function convertCelsiusToFahrenheit(temperatureInCleclus: number){
//     const temperaturInFahrenheit = temperatureInCleclus * (9/5) + 32;
//     return temperaturInFahrenheit;
// }
// console.log(convertCelsiusToFahrenheit(40));
//Task 3:- Modify Array with Methods:**
//PushArray
let firstArray = [1, 2, 3, 4, 5];
console.log("Initial Array:", firstArray);
// // Using push to add new elements to the end of the array
// firstArray.push(6, 7, 8);
// console.log("Array after push:", firstArray);
//  //**Scenario 1 
// //PopArray
// // Create an array
// let myArray: number[] = [21, 22, 23, 24, 25];
// console.log("Initial Array:", myArray);
// // Using pop to remove the last element from the array
// let removedElement: number | undefined = myArray.pop();
// console.log("Array after pop:", myArray);
// console.log("Removed Element:", removedElement);
//shiftAraay  Remove the first element from the array.
// Create an array
// let thirdArray: number[] = [10, 11, 12, 13, 14, 15];
// console.log("Initial Array:", thirdArray);
// // Using shift to remove the first element from the array
// let shiftedElement: number | undefined = thirdArray.shift();
// console.log("Array after shift:", thirdArray);
// console.log("Shifted Element:", shiftedElement);
//unshift: Add new elements to the beginning of the array.
// Create an array
// let fourthArray: number[] = [40, 41, 43];
// console.log("Initial Array:", fourthArray);
// // Using unshift to add new elements to the beginning of the array
// fourthArray.unshift(38, 39);
// console.log("Array after unshift:", fourthArray);
//Scenario 2 - Subarray Creation:
// Create an array
// let myArray: number[] = [1, 2, 3, 4, 5];
// console.log("Initial Array:", myArray);
// // Using splice to create a subarray by removing elements
// let removedElements: number[] = myArray.splice(2, 2); // Removes 2 elements starting from index 2
// console.log("Array after splice:", myArray);
// console.log("Removed Elements:", removedElements);
// Create an array
let letArray = [11, 12, 13, 14, 15];
console.log("Initial Array:", letArray);
// Using slice to create a subarray
let subArray = letArray.slice(11, 14); // Creates a subarray from index 1 to index 3
console.log("Subarray:", subArray);
console.log("Array after slice:", letArray); // Original array remains unchanged

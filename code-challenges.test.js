// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray



describe("removeThenShuffle", () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {

      const colors1 = ["purple", "blue", "green", "yellow", "pink"]
//      Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
      const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
//      Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
      expect(removeThenShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
      expect(removeThenShuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))

  })
})

// Good Failure 
// ReferenceError: removeThenShuffle is not defined

// b) Create the function that makes the test pass.

//PSEUDO CODE

// Define and name a function - removeThenShuffle
// Set the parameter so that the function takes in an array
// Use the method .shift or .splice to remove the first item from the array
// Incorporate Math.random to shuffle or generate random order for the remaining elements of the array.
// Return the new array 



const removeThenShuffle = (arr) => {
  return arr.slice(0).sort(() => Math.random() - 0.5
  )}

// Test Passed



// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("minToMax", () => {
  it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
      const nums1 = [3, 56, 90, -8, 0, 23, 6]
      // Expected output: [-8, 90]
      const nums2 = [109, 5, 9, 67, 8, 24]
      // Expected output: [5, 109]
      expect(minToMax(nums1)).toEqual([-8, 90])
      expect(minToMax(nums2)).toEqual([5, 109])
  })
})

// Good Failure
// ReferenceError: minToMax is not defined


// b) Create the function that makes the test pass.

//PSEUDO CODE

// Define a function and name it - minToMax
// Use arr as a placeholder for the parameter to be passed in.
// The return statement will be utilizing the functions Math.min and Math.max on the array to return the least and greatest number.


const minToMax = (arr) => {
  return [Math.min(...arr), Math.max(...arr)]
}

// Test Passed


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("twoArraysMergedButNoDups", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
      const testArray1 = [3, 7, 10, 5, 4, 3, 3]
      const testArray2 = [7, 8, 2, 3, 1, 5, 4]
//      Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
      expect(twoArraysMergedButNoDups(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})

// Good Failure
// ReferenceError: twoArraysMergedButNoDups is not defined

// b) Create the function that makes the test pass.


// PSEUDO CODE


// Define the function and name it - twoArraysMergedButNoDups
// Use arr1 and arr2 as placeholders to represent the two arrays to be passed in.
// Use of higher order functions to iterate and determine duplicates to ensure there'll be no number redunduncies.
//  Declare a new Set with both arr placeholders as values to be passed in. 
//  Return the array with the new set of no duplicates


const twoArraysMergedButNoDups = (arr1, arr2) => [...new Set([...arr1, ...arr2])]

// Test Passed





// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.384 s, estimated 1 s
// Ran all test suites.



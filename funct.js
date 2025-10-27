// Refactor the given impure function to pure function.
function removeVowels(obj) {
  // Do not modify the original object
  // Create a new object with the modified value
  return {
    value: obj.value.replace(/[aeiou]/gi, "")
  };
}

// You don't need to do anything below. 
// You can use it for testing the code.
let strObj = { value: "Hello World" };

// For pure function
let newObj = removeVowels(strObj);

console.log(strObj.value); // Original remains unchanged: "Hello World"
console.log(newObj.value); // Modified copy: "Hll Wrld"

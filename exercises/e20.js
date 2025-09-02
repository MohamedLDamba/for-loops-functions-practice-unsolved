
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
 let withA = [];
  let withoutA = [];

  for (let i = 0; i < array.length; i++) {
    let name = array[i];
    let hasA = false;

    // inner loop: check each character in the current name
    for (let j = 0; j < name.length; j++) {
      if (name[j] === "a") {
        hasA = true;
        break; // no need to keep checking this name
      }
    }

    if (hasA) {
      withA.push(name);
    } else {
      withoutA.push(name);
    }
  }

  return [withA, withoutA];

}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

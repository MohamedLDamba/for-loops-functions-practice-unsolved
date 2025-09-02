// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
<<<<<<< HEAD
const owners = [];
for(let i = 0; i<array.length;i++){
  const account = array[i]
  if(account.name.toLowerCase().includes(letter.toLowerCase()))
    {
    owners.push(account.name);
  }
}return owners

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

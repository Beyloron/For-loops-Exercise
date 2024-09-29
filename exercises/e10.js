// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  let clientsWithLetter = [];
  for (let i = 0; i < array.length; i++) {
    let clientName = array[i].name.toLowerCase();
    let searchLetter = letter.toLowerCase();
    let found = false;
    for (let j = 0; j < clientName.length; j++) {
      if (clientName[j] === searchLetter) {
        found = true;
        break;
      }
    }
    if (found) {
      clientsWithLetter.push(array[i].name);
    }
  }
  return clientsWithLetter;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

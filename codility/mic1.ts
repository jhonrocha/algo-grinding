export function main(N: number) {
    // write your code in JavaScript (Node.js 8.9.4)
    // Get the some of digits of N (This could be a function)
    let aux = N;
    let doubleDigits = 0;
    while (aux > 0) {
        doubleDigits += (aux % 10);
        aux = Math.floor(aux / 10); 
    }
    // Double the sum, our objective
    doubleDigits *= 2;
    // Now lets iterate from N towards
    let response = 0;
    let counter = N;
    while (response === 0) {
      counter++;
      // Find the sum of digits of this iteration 
      // Could be reusing the code above as a function
      let auxCounter = counter;
      let sumOfCounter = 0;
      while (auxCounter > 0) {
          sumOfCounter += (auxCounter % 10);
          auxCounter = Math.floor(auxCounter / 10); 
      }
      if (sumOfCounter == doubleDigits) response = counter;
    }
    return response;
}


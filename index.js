// function isPrime(num) {
//     let numberPrimeCount = 0
//     let equalNumber = 0

    
//     if(num > 0){
//       for(let i = 1; i < num; i++){
//         let result = num / i
//         if(i === num){
//           equalNumber++
//         } else if (Number.isInteger(result)){
//           numberPrimeCount++
//         }
//       }
//     }else {
//       return false
//     }
    
//     console.log(numberPrimeCount)
//     console.log(equalNumber)
    
//     if(numberPrimeCount === 1){
//       return true
//     }
    
//     return false
    
    
//   }


function isPrime(num) {
    if (num <= 1) return false; // negatives
    if (num % 2 == 0 && num > 2) return false; // even numbers
    const s = Math.sqrt(num); // store the square to loop faster
    for(let i = 3; i <= s; i += 2) { // start from 3, stop at the square, increment in twos
        if(num % i === 0) return false; // modulo shows a divisor was found
    }
    return true;
    
  }

//   console.log(isPrime(0))
//   console.log(isPrime(1))
//   console.log(isPrime(2))
//   console.log(isPrime(73))
//   console.log(isPrime(75))
//   console.log(isPrime(-1))
  console.log(isPrime(1989148477))
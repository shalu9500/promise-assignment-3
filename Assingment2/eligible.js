function checkEligibility(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Eligible");
    } else {
      reject("Not Eligible");
    }
  });
}


checkEligibility(20)
  .then(message => {
    console.log(message); 
  })
  .catch(error => {
    console.log(error); 
  });

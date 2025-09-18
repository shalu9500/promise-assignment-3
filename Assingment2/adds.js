Promise.resolve(15) 
  .then(result => {
    return result * 2; 
  })
  .then(result => {
    return result + 5; 
  })
  .then(finalResult => {
    console.log(finalResult); 
  });

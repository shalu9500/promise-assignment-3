function toUpperCaseAsync(str) {
  return new Promise((resolve, reject) => {
    if (typeof str === "string") {
      resolve(str.toUpperCase());
    } else {
      reject("Input must be a string");
    }
  });
}


toUpperCaseAsync("hello world")
  .then(result => {
    console.log(result); 
  })
  .catch(error => {
    console.log("Error:", error);
  });

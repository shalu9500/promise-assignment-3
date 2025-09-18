const failedPromise = new Promise((resolve, reject) => {
  reject("Something went wrong");
});

failedPromise
  .then(result => {
    console.log("This will not run");
  })
  .catch(error => {
    console.log("Error:", error);
  });

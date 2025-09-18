const task = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task Completed");
  }, 2000);
});

task.then(message => {
  console.log(message);
});

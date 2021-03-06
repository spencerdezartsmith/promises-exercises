const promise = new Promise((fulfill, reject) => {
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

const onRejected = (error) => {
  console.log(error);
};

promise
  .then(console.log, onRejected);

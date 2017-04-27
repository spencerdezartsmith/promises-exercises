const promise = new Promise((fulfill, reject) => {
  reject(new Error('Oh no, something went wrong'));
});

const resolvedPromise = Promise.resolve({
  message: 'You resolved!!',
});

const rejectedPromise = Promise.reject(new Error('Try again my friend'));

const messageGenerator = (val) => {
  console.log(val.message);
};

promise
  .catch(messageGenerator);

resolvedPromise
  .then(messageGenerator);

rejectedPromise
  .catch(messageGenerator);

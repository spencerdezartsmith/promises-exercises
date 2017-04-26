const alwaysThrows = () => {
  throw new Error('OH NOES');
};

const iterate = (num) => {
  console.log(num)
  return num + 1
}

Promise.resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(null, console.log)

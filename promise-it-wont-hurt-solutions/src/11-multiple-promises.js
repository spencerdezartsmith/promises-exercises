const all = (p1, p2) => {
  return new Promise((resolve, reject) => {
    let counter = 0;
    let results = [];

    const checkCounter = () => {
      if (counter < 2) {
        counter += 1
      } else {
        resolve(results)
      }
    }

    p1.then((data) => {
      results.push(data)
      checkCounter()
    })

    p2.then((data) => {
      results.push(data)
      checkCounter()
    })

    checkCounter()
  })
};

all(getPromise1(), getPromise2())
  .then(console.log)

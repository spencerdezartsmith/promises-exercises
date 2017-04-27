const parsePromised = (json) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(json));
    } catch (e) {
      reject(e);
    }
  });
};

parsePromised(process.argv[0])
  .then(null, console.log);

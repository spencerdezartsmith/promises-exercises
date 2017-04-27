const attachTitle = title => `DR. ${title}`;

const fulfilledPromise = Promise.resolve('MANHATTAN');

fulfilledPromise
	.then(attachTitle)
	.then(console.log);

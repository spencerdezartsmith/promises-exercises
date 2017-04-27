const timeOut = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('TIMED OUT!');
	}, 300);
});

timeOut
	.then(console.log)

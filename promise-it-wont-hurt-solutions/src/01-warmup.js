const timeOut = new Promise((resolve) => {
	setTimeout(() => {
		resolve('TIMED OUT!');
	}, 300);
});

timeOut
	.then(console.log);

const timeOut = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve();
	});
});

timeOut
	.then(() => console.log('TIMED OUT!'))
	.catch(() => console.log('WHOOPS, TRY AGAIN!'))

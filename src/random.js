function randomize(range, count){
	let nums = new Set();
	while (nums.size < count) {
			nums.add(Math.floor(Math.random() * (range)));
	}
	let randomArr = [...nums];
	return randomArr;
}

export {randomize}
function taskBlock() {
	let task = "original task";

	if (true) {
		let task = "New task";
		console.log("Inside conditional block:" + task);
	}

	console.log("Outside conditional block:" + task);
}
taskBlock();

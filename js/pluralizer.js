function pluralize(item,x) {
	var total = parseInt(x);
	if (total > 1 || total == 0) {
    	console.log(total + " " + item + "s");
	} else if (total == 1) {
		console.log(total + " " + item);
	} else {
		console.log("Please enter a valid number for the second value.");
	}
}

pluralize("dog", 5);
pluralize("cat", 1);
pluralize("snake", 0);
pluralize("cat", "I'm a moron");
grade = ""

function myGrade(a) {
	switch(true) {
		case (a >= 90):
			grade = "A";
			break;
		case (a >= 80):
			grade = "B";
			break;
		case (a >= 70):
			grade = "C";
			break;
		case (a >= 60):
			grade = "D";
			break;
		default:
			grade = "F";
			break;
	}
}

myGrade(73);

console.log("Your grade is: " + grade);
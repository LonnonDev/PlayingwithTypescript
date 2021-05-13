let laststore: string = "";

const FizzBuzz = (Input: number): string => {
	if (Input % 5 == 1) {
		const output = "Fizz"
		if (output == laststore) {
			return `${output} `;
		} else {
			return `${output}`;
		}
	} else if (Input % 3 == 1) {
		const output = "Buzz"
		if (output == laststore) {
			return `${output} `;
		} else {
			return `${output}`;
		}
	} else if (Input % 15 == 1) {
		const output = "FizzBuzz"
		if (output == laststore) {
			return `${output} `;
		} else {
			return `${output}`;
		}
	} else {
		return Input.toString();
	}
}

function Log(Input: any) {
	const ConsoleDiv = document.getElementById("console");
	const NewContent = document.createElement("p");
	NewContent.textContent = Input;
	ConsoleDiv?.appendChild(NewContent);
	console.log("ran");
}

for (let i=0; i <= 100; i++) {
	const FizzBuzzResult = FizzBuzz(i);
	console.log(FizzBuzzResult);
}
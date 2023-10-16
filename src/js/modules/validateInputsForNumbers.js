const validateInputsForNumbers = (selector) => {
	const inputs = document.querySelectorAll(selector);

	inputs.forEach((input) => {
		input.addEventListener("input", () => {
			input.value = input.value.replace(/\D/, "");
		});
	});
};

export { validateInputsForNumbers };

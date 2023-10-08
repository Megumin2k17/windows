const forms = () => {
	const forms = document.querySelectorAll("form");
	const inputs = document.querySelectorAll("input");

	const messages = {
		loading: "Loading...",
		success: "Thx! We will contact with you soon!",
		fail: "Sorry. Something went wrong...",
	};

	const createFormStatusMessage = (form) => {
		let statusMessage = document.createElement("div");
		statusMessage.classList.add("status");
		form.appendChild(statusMessage);
	};
	const setFormStatusMessage = (message) => {
		document.querySelector(".status").textContent = message;
	};

	const removeFormStatusMessage = (afterSecs) => {
		setTimeout(() => {
			document.querySelector(".status").remove();
		}, 1000 * afterSecs);
	};

	const postData = async (url, data) => {
		setFormStatusMessage(messages.loading);

		const result = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify(Object.fromEntries(data)),
		});

		return await result.text();
	};

	const clearInputs = () => {
		inputs.forEach((input) => {
			input.value = "";
		});
	};

	forms.forEach((form) => {
		form.addEventListener("submit", (e) => {
			e.preventDefault();

			createFormStatusMessage(form);

			const formData = new FormData(form);

			postData("https://simple-server-bo5w.onrender.com/api/data", formData)
				.then((result) => {
					console.log(result);
					setFormStatusMessage(messages.success);
				})
				.catch(() => {
					setFormStatusMessage(messages.fail);
				})
				.finally(() => {
					clearInputs();
					removeFormStatusMessage(5);
				});
		});
	});
};

export { forms };

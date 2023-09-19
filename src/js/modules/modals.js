const modals = () => {
	const bindModal = (triggerSelectors, modalSelector, closeSelector) => {
		const triggers = document.querySelectorAll(triggerSelectors),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector);

		triggers.forEach((el) => {
			el.addEventListener("click", (e) => {
				if (e.target) {
					e.preventDefault();
				}

				modal.style.display = "block";
				document.body.style.overflow = "hidden";
			});
		});

		close.addEventListener("click", () => {
			modal.style.display = "none";
			document.body.style.overflow = "";
		});

		modal.addEventListener("click", (e) => {
			if (e.target === modal) {
				modal.style.display = "none";
				document.body.style.overflow = "";
			}
		});
	};

	const showModalByTime = (modalSelector, seconds) => {
		setTimeout(() => {
			const modal = document.querySelector(modalSelector);
			modal.style.display = "block";
			document.body.style.overflow = "hidden";
		}, seconds * 1000);
	};

	bindModal(
		".popup_engineer_btn",
		".popup_engineer",
		".popup_engineer .popup_close"
	);

	bindModal(".phone_link", ".popup", ".popup .popup_close");

	showModalByTime(".popup", 60);
};

export default modals;

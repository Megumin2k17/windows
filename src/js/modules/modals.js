const modals = () => {
	const bindModal = (triggersSelectors, modalSelector, closeSelector) => {
		const triggers = document.querySelectorAll(triggersSelectors);
		const modal = document.querySelector(modalSelector);
		const close = document.querySelector(closeSelector);

		triggers.forEach((trigger) => {
			trigger.addEventListener("click", (e) => {
				if (e.target) {
					e.preventDefault();
				}

				modal.style.display = "block";
				document.body.style.overflow = "hidden";

				if (timer) {
					clearTimeout(timer);
				}
			});
		});

		close.addEventListener("click", () => {
			closeModal();
		});

		document.addEventListener("keydown", function (e) {
			if (e.key === "Escape") {
				closeModal();
			}
		});

		modal.addEventListener("click", (e) => {
			if (e.target === modal) {
				closeModal();
			}
		});

		const closeModal = () => {
			modal.style.display = "none";
			document.body.style.overflow = "";
		};
	};

	const showModalByTime = (modalSelector, seconds) => {
		return setTimeout(() => {
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

	let timer = showModalByTime(".popup", 3);
};

export { modals };

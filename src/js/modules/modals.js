const modals = () => {
	const bindModal = ({ triggersSelectors, modalSelector, closeSelector }) => {
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

	bindModal({
		triggersSelectors: ".popup_engineer_btn",
		modalSelector: ".popup_engineer",
		closeSelector: ".popup_engineer .popup_close",
	});

	bindModal({
		triggersSelectors: ".phone_link",
		modalSelector: ".popup",
		closeSelector: ".popup .popup_close",
	});

	let timer = showModalByTime(".popup", 60);
};

export { modals };

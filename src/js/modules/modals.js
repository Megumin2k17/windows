const modals = () => {
	const bindModal = ({
		triggersSelectors,
		modalSelector,
		closeSelector,
		closeByClickOverlay = true,
	}) => {
		const triggers = document.querySelectorAll(triggersSelectors);
		const modal = document.querySelector(modalSelector);
		const close = document.querySelector(closeSelector);
		const modals = document.querySelectorAll("[data-modal]");

		triggers.forEach((trigger) => {
			trigger.addEventListener("click", (e) => {
				if (e.target) {
					e.preventDefault();
				}

				closeModals();

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
			if (e.target === modal && closeByClickOverlay) {
				closeModal();
				closeModals();
			}
		});

		const closeModal = () => {
			closeModals();
			modal.style.display = "none";
			document.body.style.overflow = "";
		};

		const closeModals = () => {
			modals.forEach((modal) => {
				modal.style.display = "none";
			});
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

	bindModal({
		triggersSelectors: ".popup_calc_btn",
		modalSelector: ".popup_calc",
		closeSelector: ".popup_calc_close",
	});

	bindModal({
		triggersSelectors: ".popup_calc_button",
		modalSelector: ".popup_calc_profile",
		closeSelector: ".popup_calc_profile_close",
		closeByClickOverlay: false,
	});

	bindModal({
		triggersSelectors: ".popup_calc_profile_button",
		modalSelector: ".popup_calc_end",
		closeSelector: ".popup_calc_end_close",
		closeByClickOverlay: false,
	});

	let timer = showModalByTime(".popup", 60);
};

export { modals };

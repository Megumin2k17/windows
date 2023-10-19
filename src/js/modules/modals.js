const modals = (state) => {
	const bindModal = ({
		triggersSelectors,
		modalSelector,
		closeSelector,
		closeByClickOverlay = true,
		validate = false,
	}) => {
		const triggers = document.querySelectorAll(triggersSelectors);
		const modal = document.querySelector(modalSelector);
		const close = document.querySelector(closeSelector);

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

				if (validate) {
					if (modalValuesNotEmpty(validate)) {
						modalBtnEnable();
					} else {
						modalBtnDisable();
					}
					validateModalValues(validate);
				}
			});
		});

		close.addEventListener("click", () => {
			closeModal(modal);
		});

		document.addEventListener("keydown", function (e) {
			if (e.key === "Escape") {
				closeModal(modal);
			}
		});

		modal.addEventListener("click", (e) => {
			if (e.target === modal && closeByClickOverlay) {
				closeModal(modal);
				closeModals();
			}
		});

		const validateModalValues = (fields) => {
			const inputs = modal.querySelectorAll("input");
			const checkboxes = modal.querySelectorAll(".checkbox");

			inputs.forEach((input) => {
				input.addEventListener("input", () => {
					if (modalValuesNotEmpty(fields)) {
						modalBtnEnable();
					} else {
						modalBtnDisable();
					}
				});
			});

			checkboxes.forEach((checkbox) => {
				checkbox.addEventListener("change", (e) => {
					if (modalValuesNotEmpty(fields)) {
						modalBtnEnable();
					} else {
						modalBtnDisable();
					}
				});
			});
		};

		const modalValuesNotEmpty = (fields) => {
			const values = [];

			fields.forEach((field) => {
				values.push(state[field]);
			});

			if (values.every((value) => value != "")) {
				return true;
			}

			return false;
		};

		const modalBtnEnable = () => {
			const next = modal.querySelector(".button");
			next.disabled = false;
			next.style.opacity = "";
		};

		const modalBtnDisable = () => {
			const next = modal.querySelector(".button");
			next.disabled = true;
			next.style.opacity = ".55";
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
		validate: ["width", "height"],
	});

	bindModal({
		triggersSelectors: ".popup_calc_button",
		modalSelector: ".popup_calc_profile",
		closeSelector: ".popup_calc_profile_close",
		closeByClickOverlay: false,
		validate: ["profile"],
	});

	bindModal({
		triggersSelectors: ".popup_calc_profile_button",
		modalSelector: ".popup_calc_end",
		closeSelector: ".popup_calc_end_close",
		closeByClickOverlay: false,
	});

	let timer = showModalByTime(".popup", 60);
};

const closeModal = (modal) => {
	modal.style.display = "none";
	document.body.style.overflow = "";
};

const closeModals = (seconds) => {
	const modals = document.querySelectorAll("[data-modal]");

	if (seconds) {
		setTimeout(() => {
			modals.forEach((modal) => {
				closeModal(modal);
			});
		}, 1000 * seconds);
	} else {
		modals.forEach((modal) => {
			closeModal(modal);
		});
	}
};

export { modals, closeModals };

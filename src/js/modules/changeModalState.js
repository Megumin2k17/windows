import { validateInputsForNumbers } from "./validateInputsForNumbers.js";

const changeModalState = (state) => {
	const windowsForms = document.querySelectorAll(".balcon_icons_img");
	const windowWidth = document.querySelectorAll("#width");
	const windowHeight = document.querySelectorAll("#height");
	const windowType = document.querySelectorAll("#view_type");
	const windowProfile = document.querySelectorAll(".checkbox");

	// console.log(windowsForms);

	validateInputsForNumbers("#width");
	validateInputsForNumbers("#height");

	const bindActionToElements = ({ event, elements, property }) => {
		elements.forEach((element, idx) => {
			element.addEventListener(event, () => {
				switch (element.nodeName) {
					case "SPAN":
						state[property] = idx;
						break;
					case "INPUT":
						if (element.getAttribute("type") === "checkbox") {
							idx === 0
								? (state[property] = "Холодное")
								: (state[property] = "Теплое");
							switchCheckbox(elements, idx);
						} else {
							state[property] = element.value;
						}
						break;
					case "SELECT":
						state[property] = element.value;
						break;
				}

				console.log(state);
			});
		});
	};

	const switchCheckbox = (checkboxes, activeCheckboxId) => {
		checkboxes.forEach((checkbox, idx) => {
			checkbox.checked = false;
			if (activeCheckboxId == idx) {
				checkbox.checked = true;
			}
		});
	};

	bindActionToElements({
		event: "click",
		elements: windowsForms,
		property: "form",
	});
	bindActionToElements({
		event: "input",
		elements: windowHeight,
		property: "height",
	});
	bindActionToElements({
		event: "input",
		elements: windowWidth,
		property: "width",
	});
	bindActionToElements({
		event: "change",
		elements: windowType,
		property: "type",
	});
	bindActionToElements({
		event: "change",
		elements: windowProfile,
		property: "profile",
	});
};

export { changeModalState };

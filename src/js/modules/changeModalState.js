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
					default:
						state[property] = element.value;
						break;
				}

				console.log(state);
			});
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

const resetState = (state) => {
	state = {
		form: 0,
		width: "",
		height: "",
		type: "tree",
		profile: "",
	};

	console.log(state);
};

export { changeModalState, resetState };

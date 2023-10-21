import "./slider.js";
import { modals, tabs, forms, changeModalState, timer } from "./modules";

console.log("Hello World!");

window.addEventListener("DOMContentLoaded", () => {
	const modalState = {
		form: 0,
		width: "",
		height: "",
		type: "tree",
		profile: "",
	};

	const timeEnd = new Date("2023-10-31T23:59:59");

	changeModalState(modalState);

	modals(modalState);

	tabs({
		tabsContainerSelector: ".glazing_slider",
		tabsSelector: ".glazing_block",
		activeTabClass: "active",
		contentsContainersSelector: ".glazing_content",
	});
	tabs({
		tabsContainerSelector: ".decoration_slider",
		tabsSelector: ".no_click",
		activeTabClass: "after_click",
		contentsContainersSelector: ".decoration_content > div > div",
	});
	tabs({
		tabsContainerSelector: ".balcon_icons",
		tabsSelector: ".balcon_icons_img",
		activeTabClass: "do_image_more",
		contentsContainersSelector: ".big_img > img",
		display: "inline-block",
	});

	forms(modalState);

	timer(
		{
			secondsSelector: "#seconds",
			minutesSelector: "#minutes",
			hoursSelector: "#hours",
			daysSelector: "#days",
		},
		timeEnd
	);
});

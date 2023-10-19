import "./slider.js";
import { modals, tabs, forms, changeModalState } from "./modules";

console.log("Hello World!");

window.addEventListener("DOMContentLoaded", () => {
	const modalState = {
		form: 0,
		width: "",
		height: "",
		type: "tree",
		profile: "",
	};

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
});

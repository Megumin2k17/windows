import "./slider.js";
import { modals, tabs } from "./modules";

console.log("Hello World!");

window.addEventListener("DOMContentLoaded", () => {
	modals();

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
});

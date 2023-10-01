import "./slider.js";
import { modals, tabs } from "./modules";

console.log("Hello World!");

window.addEventListener("DOMContentLoaded", () => {
	modals();

	tabs(".glazing_slider", ".glazing_block", "active", ".glazing_content");
	tabs(
		".decoration_slider",
		".no_click",
		"after_click",
		".decoration_content > div > div"
	);
});

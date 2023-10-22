const images = (imagesSectionSelector) => {
	const imagesSection = document.querySelector(imagesSectionSelector);

	const bigImg = document.createElement("img");
	bigImg.style.cssText = `max-width:100%; padding:15px`;

	const createImagePopup = () => {
		const imgPopup = document.createElement("div");
		imgPopup.classList.add("popup");
		imgPopup.style.cssText = `justify-content:center; align-items:center; display:none;`;
		imgPopup.appendChild(bigImg);
		imagesSection.appendChild(imgPopup);
		return imgPopup;
	};

	const imgPopup = createImagePopup();

	const showImagePreview = (path) => {
		imgPopup.style.display = "flex";
		document.body.style.overflow = "hidden";

		bigImg.setAttribute("src", path);
	};

	const hideImagePreview = () => {
		imgPopup.style.display = "none";
		document.body.style.overflow = "";
	};

	imagesSection.addEventListener("click", (e) => {
		e.preventDefault();

		let target = e.target;

		if (target && target.classList.contains("preview")) {
			const path = target.parentNode.getAttribute("href");
			showImagePreview(path);
		}

		if (target && target.matches("div.popup")) {
			hideImagePreview();
		}
	});

	imagesSection.addEventListener("keydown", function (e) {
		if (e.key === "Escape") {
			hideImagePreview();
		}
	});

	imagesSection.addEventListener("keydown", function (e) {
		let target = e.target;

		const path = target.getAttribute("href");

		if (e.key === "Enter") {
			showImagePreview(path);
		}
	});
};

export { images };

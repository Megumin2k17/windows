const tabs = ({
	tabsContainerSelector,
	tabsSelector,
	activeTabClass,
	contentsContainersSelector,
	display = "block",
}) => {
	const tabsContainer = document.querySelector(tabsContainerSelector);
	const tabs = document.querySelectorAll(tabsSelector);
	const tabsContents = document.querySelectorAll(contentsContainersSelector);

	let currentTab = 0;
	/* 
		В общем такой вот варик выглядит наименее каличным с точки зрения визуала на страничке
		В данном варике будет забаговано только отображение активного таба
		Если убрать bindTabsData(dataset'ы), то вкладки перестанут нормально переключаться		
		Судя по всему это происходит потому что идиотский слайдер клонирует табы и свопает их туда-сюда
		По-моему сделать по-человечески тут не получится из-за вот этого вот слайдера
		На десктоп версии более менее работает, а вот когда слайдер появляется - будет всё к писюнам забаговано 
		У автора видоса вообще будет всегда багованый дополнительный активный таб и не будет адекватно контент переключаться
		Крипота .-.
	*/
	const bindTabsData = () => {
		tabs.forEach((tab, idx) => {
			tab.dataset["tabId"] = idx;
			tabsContents[idx].dataset["tabId"] = idx;
		});
	};

	const showTab = (idx) => {
		tabs[idx].classList.add(activeTabClass);

		tabsContents[idx].style.display = display;
	};

	const closeTabs = () => {
		// Это чтобы убрать дублированую активную вкладку от клонов ссаного слайдера
		const tabs = tabsContainer.querySelectorAll(tabsSelector);
		// костыли
		tabs.forEach((tab) => {
			tab.classList.remove(activeTabClass);
		});

		tabsContents.forEach((tabContent) => {
			tabContent.style.display = "none";
		});
	};

	const selectTab = (tab) => {
		if (tab) {
			currentTab = tab.dataset.tabId;
			closeTabs();
			showTab(currentTab);
		}
	};

	bindTabsData();
	closeTabs();
	showTab(currentTab);

	tabsContainer.addEventListener("click", (e) => {
		selectTab(e.target.closest(tabsSelector));
	});
	tabsContainer.addEventListener("keyup", (e) => {
		if (e.key == "Enter") {
			selectTab(e.target.closest(tabsSelector));
		}
	});
};

export { tabs };

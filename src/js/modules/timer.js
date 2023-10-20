const timer = (timerSelector, endTime) => {
	const getRemainingTime = (endTime) => {
		const remainingTime = Date.parse(endTime) - Date.parse(new Date());
		const seconds = Math.floor((remainingTime / 1000) % 60);
		const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
		const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 60);
		const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

		return {
			total: remainingTime,
			seconds,
			minutes,
			hours,
			days,
		};
	};

	const setClock = (selectors, endTime) => {
		const timer = document.querySelector(selectors.timerSelector);
		const days = timer.querySelector(selectors.daysSelector);
		const hours = timer.querySelector(selectors.hoursSelector);
		const minutes = timer.querySelector(selectors.minutesSelector);
		const seconds = timer.querySelector(selectors.secondsSelector);

		const timeInterval = setInterval(updateClock, 1000);
		updateClock();

		function updateClock() {
			const remainingTime = getRemainingTime(endTime);

			if (remainingTime.total <= 0) {
				days.textContent = "00";
				hours.textContent = "00";
				minutes.textContent = "00";
				seconds.textContent = "00";

				clearInterval(timeInterval);
			}

			days.textContent = formatNumbers(remainingTime.days);
			hours.textContent = formatNumbers(remainingTime.hours);
			minutes.textContent = formatNumbers(remainingTime.minutes);
			seconds.textContent = formatNumbers(remainingTime.seconds);
		}

		function formatNumbers(num) {
			if (num <= 9) {
				return "0" + num;
			} else {
				return num;
			}
		}
	};

	setClock(
		{
			timerSelector,
			secondsSelector: "#seconds",
			minutesSelector: "#minutes",
			hoursSelector: "#hours",
			daysSelector: "#days",
		},
		endTime
	);
};

export { timer };

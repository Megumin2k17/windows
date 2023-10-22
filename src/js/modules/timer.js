const timer = (timerSelectors, endTime) => {
	const getRemainingTime = (endTime) => {
		const currentTime = new Date();
		const timeLeft = new Date(endTime - currentTime);
		const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
		const [hoursLeft, minutesLeft, secondsLeft] = timeLeft
			.toLocaleTimeString("ru-RU", {
				hour12: false,
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
			})
			.split(":");

		return {
			seconds: secondsLeft,
			minutes: minutesLeft,
			hours: hoursLeft,
			days: daysLeft,
		};
	};

	const setClock = (selectors, endTime) => {
		const days = document.querySelector(selectors.daysSelector);
		const hours = document.querySelector(selectors.hoursSelector);
		const minutes = document.querySelector(selectors.minutesSelector);
		const seconds = document.querySelector(selectors.secondsSelector);

		const timeInterval = setInterval(updateClock, 1000);
		updateClock();

		function updateClock() {
			const remainingTime = getRemainingTime(endTime);

			if (remainingTime.total <= 0) {
				clearInterval(timeInterval);
			}

			days.textContent = remainingTime.days;
			hours.textContent = remainingTime.hours;
			minutes.textContent = remainingTime.minutes;
			seconds.textContent = remainingTime.seconds;
		}
	};

	setClock(timerSelectors, endTime);
};

export { timer };

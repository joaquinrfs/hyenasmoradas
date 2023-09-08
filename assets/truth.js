const truthDate = new Date('2023-09-10T23:30:00.0Z');
const counter = document.querySelector('#counter > span');

setInterval(() => {
	const now = new Date();
	const countDown = truthDate - now;

	const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
	let hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((countDown % (1000 * 60)) / 1000);

	hours += days * 24;
	if (minutes.toString(10).length === 1)
		minutes = `0${minutes}`;
	if (seconds.toString(10).length === 1)
		seconds = `0${seconds}`;
	if (hours.toString(10).length === 1)
		hours = `0${hours}`;

	counter.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);
const counter = document.querySelector('#counter > span');
let target = new Date('2023-09-10T23:30:00.0Z');
let now = new Date();

setInterval(() => {
	if (target < now) {
		while (target < now) {
			target.setDate(target.getDate() + 7);
		}
	}
	calcTime();
}, 1000);

function calcTime() {
	const now = new Date();
	const countDown = target - now;

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
}

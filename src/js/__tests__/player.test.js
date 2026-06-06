import { healthIndication, healthSort } from '../player';

const players = [
	[
		{ name: 'Маг', health: 75 }, "healthy"
	],
	[
		{ name: 'Маг', health: 51 }, "healthy"
	],
	[
		{ name: 'Маг', health: 50 }, "wounded"
	],
	[
		{ name: 'Маг', health: 49 }, "wounded"
	],
	[
		{ name: 'Маг', health: 35 }, "wounded"
	],
	[
		{ name: 'Маг', health: 15 }, "wounded"
	],
	[
		{ name: 'Маг', health: 14 }, "critical"
	],
	[
		{ name: 'Маг', health: 7 }, "critical"
	],
	[
		{ name: 'Маг', health: 0 }, "critical"
	],
];


const handler = test.each(players);

handler("color", (player, expert) => {
	expect(healthIndication(player)).toBe(expert);
})
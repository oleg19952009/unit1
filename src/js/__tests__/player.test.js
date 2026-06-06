import { healthIndication, healthSort } from '../player';

test('color', () => {
	const players = [
		{ name: 'Маг', health: 100 },
		{ name: 'Маг', health: 75 },
		{ name: 'Маг', health: 50 },
		{ name: 'Маг', health: 49 },
		{ name: 'Маг', health: 35 },
		{ name: 'Маг', health: 15 },
		{ name: 'Маг', health: 14 },
		{ name: 'Маг', health: 7 },
		{ name: 'Маг', health: 0 }];
	const ications = [
		'healthy',
		'healthy',
		'wounded',
		'wounded',
		'wounded',
		'wounded',
		'critical',
		'critical',
		'critical'];
	for (let i = 0; i < players.length; i++) {
		expect(healthIndication(players[i])).toBe(ications[i]);
	}
});



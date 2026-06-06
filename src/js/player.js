export function healthIndication(player) {

	if (player.health > 50) {
		return 'healthy';
	} else if (player.health <= 50 && player.health >= 15) {
		return "wounded";
	} else {
		return "critical";
	}
}

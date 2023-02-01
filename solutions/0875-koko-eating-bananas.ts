import { assertEquals } from "../deps.ts";

function minEatingSpeed(piles: number[], h: number): number {
	let lo = 1;
	let hi = Math.max(...piles);
	let min = hi;

	while (lo < hi) {
		const mid = (hi + lo) >> 1;
		let hours = 0;
		for (const pile of piles) {
			hours += Math.ceil(pile / mid);
		}

		if (hours <= h) {
			min = Math.min(min, mid);
			hi = mid;
		} else {
			lo = mid + 1;
		}
	}

	return min;
}

Deno.test(function testMinEatingSpeed() {
	let got = minEatingSpeed([3, 6, 7, 11], 8);
	assertEquals(got, 4);

	got = minEatingSpeed([30, 11, 23, 4, 20], 5);
	assertEquals(got, 30);

	got = minEatingSpeed([30, 11, 23, 4, 20], 6);
	assertEquals(got, 23);
});

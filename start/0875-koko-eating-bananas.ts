import { assertEquals } from "../deps.ts";

// https://leetcode.com/problems/koko-eating-bananas/
function minEatingSpeed(piles: number[], h: number): number {
	return -1;
}

Deno.test(function testMinEatingSpeed() {
	let got = minEatingSpeed([3, 6, 7, 11], 8);
	assertEquals(got, 4);

	got = minEatingSpeed([30, 11, 23, 4, 20], 5);
	assertEquals(got, 30);

	got = minEatingSpeed([30, 11, 23, 4, 20], 6);
	assertEquals(got, 23);
});

import { assertEquals } from "../deps.ts";

function twoSum(nums: number[], target: number): number[] | void {
	const m = new Map<number, number>(); // [value]: [index]
	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i];
		if (m.has(diff)) {
			return [m.get(diff) as number, i];
		} else {
			m.set(nums[i], i);
		}
	}
}

function twoSumN2(nums: number[], target: number): number[] | void {
	for (const [i, num1] of nums.entries()) {
		for (const [j, num2] of nums.slice(i + 1).entries()) {
			if (num1 + num2 === target) {
				return [i, i + j + 1];
			}
		}
	}
}

Deno.test(function testTwoSum() {
	let got = twoSum([2, 7, 11, 15], 9);
	let want = [0, 1];
	assertEquals(got, want);

	got = twoSum([3, 2, 4], 6);
	want = [1, 2];
	assertEquals(got, want);

	got = twoSum([3, 3], 6);
	want = [0, 1];
	assertEquals(got, want);
});

// In my system
// Tiny examples, one best scenario one worst.
// avg: 112.98 ns/iter
Deno.bench("twoSum with map", () => {
	twoSum([2, 7, 11, 15], 9);
	twoSum([2, 7, 11, 15], 26);
});
// avg: 223.81 ns/iter
Deno.bench("twoSum with two loops", () => {
	twoSumN2([2, 7, 11, 15], 9);
	twoSumN2([2, 7, 11, 15], 26);
});

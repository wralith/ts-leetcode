import { assertEquals } from "../deps.ts";

// https://leetcode.com/problems/binary-search/
function search(nums: number[], target: number): number {
	let sm = 0;
	let lg = nums.length - 1;

	while (sm <= lg) {
		const mid = (sm + lg) >> 1;
		if (nums[mid] === target) {
			return mid;
		} else if (nums[mid] > target) {
			lg = mid - 1;
		} else {
			sm = mid + 1;
		}
	}

	return -1;
}

Deno.test(function testSearch() {
	let got = search([-1, 0, 3, 5, 9, 12], 9);
	assertEquals(got, 4);

	got = search([-1, 0, 3, 5, 9, 12], 2);
	assertEquals(got, -1);

	got = search([-100, 10, 123, 211, 212, 213, 600, 666, 777], 777);
	assertEquals(got, 8);
});

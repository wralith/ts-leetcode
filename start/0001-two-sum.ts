import { assertEquals } from "../deps.ts";

// https://leetcode.com/problems/two-sum/
function twoSum(nums: number[], target: number): number[] {
	return [];
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

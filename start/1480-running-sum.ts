import { assertEquals } from "../deps.ts";

// https://leetcode.com/problems/running-sum-of-1d-array/
function runningSum(nums: number[]): number[] {
	return [];
}

Deno.test(function testRunningSum() {
	let got = runningSum([1, 2, 3, 4]);
	let want = [1, 3, 6, 10];
	assertEquals(got, want);

	got = runningSum([1, 1, 1, 1, 1]);
	want = [1, 2, 3, 4, 5];
	assertEquals(got, want);

	got = runningSum([3, 1, 2, 10, 1]);
	want = [3, 4, 6, 16, 17];
	assertEquals(got, want);
});

import { assertEquals } from "../deps.ts";

function runningSumOneLiner(nums: number[]): number[] {
	nums.reduce((a, _c, i, arr) => (arr[i] += a));
	return nums;
}

function runningSum(nums: number[]): number[] {
	const res: number[] = [];
	let curr = 0;
	for (const num of nums) {
		curr = curr + num;
		res.push(curr);
	}

	return res;
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

// In my system
// avg: 90,52 ns/iter
Deno.bench("running sum with additional array", () => {
	runningSum([1,3,4,2,6,7,11,42])
	runningSum([32,11,47,62,16,7,11,42])
})
// avg: 49.61 ns/iter
Deno.bench("running sum with reduce", () => {
	runningSumOneLiner([1,3,4,2,6,7,11,42])
	runningSumOneLiner([32,11,47,62,16,7,11,42])
})

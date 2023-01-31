import { assertEquals } from "../deps.ts";

// https://leetcode.com/problems/valid-anagram/
function isAnagram(s: string, t: string): boolean {
	return false;
}

Deno.test(function testIsAnagram() {
	let got = isAnagram("anagram", "nagaram");
	assertEquals(got, true);

	got = isAnagram("rat", "car");
	assertEquals(got, false);

	got = isAnagram("bart", "brat");
	assertEquals(got, true);
});

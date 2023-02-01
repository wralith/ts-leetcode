import { assertEquals } from "../deps.ts";

// https://leetcode.com/problems/valid-anagram/
function isAnagram(s: string, t: string): boolean {
	if (s.length !== t.length) {
		return false;
	}

	return sort(s) === sort(t);
}

const sort = (s: string) => [...s].sort().join("");

Deno.test(function testIsAnagram() {
	let got = isAnagram("anagram", "nagaram");
	assertEquals(got, true);

	got = isAnagram("rat", "car");
	assertEquals(got, false);

	got = isAnagram("bart", "brat");
	assertEquals(got, true);
});

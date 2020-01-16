import { findSmallest } from '../src';

describe('"find-smallest.js"', () => {
	it('finds the smallest value index', () => {
		const items = [3, 1, 11, 10, 33, -1, 0, 1, 3];

		const smallestIndex = findSmallest(items);

		expect(smallestIndex).toBe(5);
	});
});

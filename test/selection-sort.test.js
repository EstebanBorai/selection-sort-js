import selectionSort from '../src';

describe('"selection-sort.js"', () => {
	it('sorts the given array of integers', () => {
		const have = [3, 1, 11, 10, 33, -1, 0, 1, 3];
		const want = [-1, 0, 1, 1, 3, 3, 10, 11, 33];

		const test = selectionSort(have);

		expect(test).toEqual(want);
	});

	it('returns the array inmediately if it is empty', () => {
		const test = selectionSort([]);

		expect(test).toEqual([]);
	});
});

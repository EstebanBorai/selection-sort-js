import findSmallestIndex from './find-smallest';

/**
 * 
 * @param {array} arr - Array of numbers
 * 
 * Sorts an array of numbers
 * 
 */
function selectionSort(arr) {
	const totalItems = Number(arr.length);

	if (totalItems === 0) {
		// Avoid running with 0 length arrays
		return arr;
	}

	let sorted = [];
	let i = 0;

	for (i; i < totalItems; i++) {
		let smallestIndex = findSmallestIndex(arr);

		sorted.push(arr[smallestIndex]);
		arr.splice(smallestIndex, 1);
	}

	return sorted;
}

export default selectionSort;

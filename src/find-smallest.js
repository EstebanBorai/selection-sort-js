/**
 * findSmallest finds the smallest element in an array
 * and returns the index.
 *
 */
function findSmallest(arr) {
	let smallest = arr[0];
	let index = 0;
	let i = 0;

	for (i; i < arr.length; i++) {
		if (arr[i] < smallest) {
			smallest = arr[i];
			index = i;
		}
	}

	return index;
}

export default findSmallest;

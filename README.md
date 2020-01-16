# selection-sort-js
A "Selection Sort" algorithm implementation in JavaScript

## Installation
```bash
npm install @estebanborai/selection-sort
```

## Usage

### `selectionSort(arr: Array<number>): Array<number>`
Sorts an array of numbers

```javascript
import selectionSort from '@estebanborai/selection-sort';

const items = [-1, 10, 2, 0, 6, 8];
const sorted = selectionSort(items);

console.log(sorted); // [-1, 0, 2, 6, 8, 10]
```

### `findSmallest(arr: Array<number>): number
Returns the index of the smallest number in the array.
_This function is used internally by `selectionSort` and exported._

```javascript
import { findSmallest } from '@estebanborai/selection-sort';

const items = [1, 25, 88, -10, 11];
const smallestItemIndex = findSamallest(items);

console.log(smallestItemIndex); // 3
```

## License
Licensed under the MIT License

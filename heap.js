export default class Heap {
  // [comparator(a, b)] means [a] will be popped before [b].
  constructor(comparator) {
    this._heap = [];
    this._compare = comparator;
  }

  push(value) {
    let index = this._heap.length;
    // Special cases of the loop below, so we can avoid writing this._heap.push(null)
    if (index === 0) {
      this._heap.push(value);
      return;
    }
    const parentIndex = Math.floor((index - 1) / 2);
    const parent = this._heap[parentIndex];
    if (!this._compare(value, parent)) {
      this._heap.push(value);
      return;
    }
    this._heap.push(parent);
    index = parentIndex;

    // This is where the real logic is
    while (0 < index) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this._heap[parentIndex];

      if (!this._compare(value, parent)) break;

      this._heap[index] = parent;
      index = parentIndex;
    }

    this._heap[index] = value;
  }

  next() {
    switch (this._heap.length) {
      case 0:
        return { done: true };
      case 1:
        return {
          value: this._heap.pop(),
          done: false,
        };
    }
    const value = this._heap[0];

    const index = 0;
    const end = this._heap.pop();

    // Insert [end] back into the array, starting from the root and working down towards the leaves.
    while (true) {
      // Which node will replace the one at [index].
      const swapIndex = index;
      const swap = end;

      // swap = min(swap, leftChild)
      const leftIndex = 2 * index + 1;
      const leftChild = this._heap[leftIndex];
      if (leftChild && this._compare(leftChild, swap)) {
        swapIndex = leftIndex;
        swap = leftChild;
      }

      // swap = min(swap, rightChild)
      const rightIndex = leftIndex + 1;
      const rightChild = this._heap[rightIndex];
      if (rightChild && this._compare(rightChild, swap)) {
        swapIndex = rightIndex;
        swap = rightChild;
      }

      // Perform the swap
      this._heap[index] = swap;
      if (swapIndex === index) break;
      index = swapIndex;
    }

    return { value, done: false };
  }

  [Symbol.iterator]() {
    return this;
  }
}

# heap
An iterable binary heap.

Min heap example:
```
import Heap from "https://cdn.jsdelivr.net/gh/NeuroPyrox/heap/heap.min.js";
const heap = new Heap((a, b) => a.key < b.key);
heap.push({key: 1, data: 10});
heap.push({key: 4, data: 20});
heap.push({key: 2, data: 30});
heap.push({key: 5, data: 40});
heap.push({key: 3, data: 50});
console.log(...heap); // [10, 30, 50, 20, 40]
console.log(...heap); // []
```

To include this in an html file, use a CDN such as jsDelivr.

Currently unnecessary todos:
- More example code
- More methods
- Add to npm
- Unit testing
- Benchmarks
- WASM

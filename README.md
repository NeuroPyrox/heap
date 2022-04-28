# heap
An iterable binary heap. I couldn't find any other heap libraries that satisfied the iterator interface, probably due to ending my search too soon, so I made this little one. I'm guilty of a hefty bit of premature optimization, especially in the while loop of `next`.

To include this in an html file, use a CDN such as jsDelivr.

Min heap example:
```
import Heap from "https://cdn.jsdelivr.net/gh/NeuroPyrox/heap/heap.js";
const heap = new Heap((a, b) => a.key < b.key);
heap.push({ key: 1, data: 10 });
heap.push({ key: 4, data: 20 });
heap.push({ key: 2, data: 30 });
heap.push({ key: 5, data: 40 });
heap.push({ key: 3, data: 50 });
for (const { data } of heap) {
  console.log(data); // 10 30 50 20 40
}
```

Currently unnecessary todos:
- Release to npm
- More example code
- More methods
- Unit testing
- Benchmarks
- WASM

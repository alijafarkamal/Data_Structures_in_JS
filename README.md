# Data Structures in JavaScript

Educational JavaScript scripts demonstrating **native Array, Set, Map, and Object** usage alongside **custom ES6-class implementations** of a singly linked list, an array-backed queue, and a fixed-capacity circular queue. Standalone `console.log` demos—not a packaged library.

## Problem

Classic ADTs (lists, queues, circular buffers) and JS built-in collections are foundational CS material. This repo is a hands-on scratchpad: each file is a runnable script that exercises one structure’s API so you can inspect behavior in a Node or browser console.

## What’s implemented

| File | Structure | Kind |
|------|-----------|------|
| `array.js` | Native `Array` | Built-in demos (`push`, `unshift`, `slice`, `splice`, `every`, `pop`, `shift`, iteration) |
| `set.js` | Native `Set` | Built-in demos (`add`, `clear`, `for…of`) |
| `map.js` | Native `Map` | Built-in demos (`set`, keyed iteration) |
| `object.js` | Plain object literal | Property access, `delete`, method call |
| `linked_list.js` | Singly linked list | Custom: `Node`, `LinkedList` |
| `queue.js` | Queue | Custom: `Queue` (array + front/rear indices) |
| `circularQueue.js` | Circular queue | Custom: `CircularQueue` (fixed capacity, modulo wrap) |

No sorting, searching, trees, heaps, graphs, or hash-table-from-scratch beyond native `Map`/`Object`.

### Custom ADT surfaces

**`LinkedList`** (`prepend`-only): `isEmpty`, `getSize`, `prepend`, `print`. State: `head`, `size` (no `tail`). `prepend` is O(1); `print` walks the list.

**`Queue`**: `enqueue`, `dequeue`, `isEmpty`, `peek`, `size`, `print`. Uses `items[rear++]` / `delete items[front++]` rather than `Array.shift` for dequeue.

**`CircularQueue(capacity)`**: `isFull`, `isEmpty`, `size`, `enqueue`, `dequeue`, `peek`, `print`. Fixed `Array(capacity)` with `% capacity` wrap and `currentLength` occupancy counter—classic ring buffer.

## Key engineering decisions

| Decision | Why (as implemented) |
|----------|----------------------|
| ES6 `class` for custom ADTs | Matches textbook OOP presentation of Node/List/Queue |
| No `export` / `import` | Each file is a self-contained demo script |
| Circular buffer with occupancy counter | Distinguishes full vs empty without wasting a slot sentinel in this design |
| Native demos alongside custom ones | Contrasts language-provided collections with hand-rolled ADTs |

## Tech stack

- Plain JavaScript (ES6+): `class`, `const`/`let`, template literals, `for…of`, `Map`/`Set`
- No `package.json`, TypeScript, bundler, or test runner

## How to run

```bash
node linked_list.js
node circularQueue.js
# …same for the other .js files
```

## Limitations / what I'd improve

- **Educational scope only** — not module-exported, typed, or tested.
- **`LinkedList` is minimal** — no `append`, insert-at, delete, search, or reverse.
- **`queue.js` quirks** — the file declares `class Queue` twice (the second definition wins at runtime); `size()` as written uses undeclared `rear`/`front` identifiers and is incorrect; prefer `rear - front` for logical length. The first (array `push`/`shift`) implementation is dead code.
- **`circularQueue.js`** retains a large commented-out draft above the live `CircularQueue`.
- No complexity documentation in-code; no unit tests or assertions beyond ad-hoc prints.
- `object.js` uses personal demo fields—not a general Map ADT tutorial.

Next useful steps: fix `Queue.size`, export a single clean `Queue` implementation, add Jest/Vitest coverage for enqueue/dequeue invariants, and extend the linked list to a fuller singly-linked API.

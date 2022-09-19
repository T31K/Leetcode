// LRU cache

// A key-value store of fixed capacity that evicts oldest items where oldest refers to least recently used.
// Supports 3 operations

// Put item
// Get item
// Delete item

// Examples
// lru = Lru.new(3)
// lru.put(‘a’, 123)
// lru.put(‘b’, 124)
// lru.put(‘c’, 125)
// # lru is full

// lru.put(‘d’, 126)
// # lru only contains ‘b’, ’c’, ‘d’ since ‘a’ had to be evicted

// lru.get(‘b’) # returns 124
// lru.put(‘e’, 127)
// # lru only contains ‘d’, ‘b’, ‘e’ since ‘c’ had to be evicted - ‘b’ was not the oldest as it was recently used with the get operation.

// lru.put(‘f’, 128)

// Deaclaration
// const set = new Set([1,2,'abc', false]);
const ids = new Set();

// Add new elements
ids.add('ab');
ids.add(1);
ids.add('dfg');
ids.add(1); // will not be added
console.log(ids);

// Iterable
ids.forEach((el) => {
  console.log(el);
});

// Deleting an element
ids.delete('ab');
console.log(ids);

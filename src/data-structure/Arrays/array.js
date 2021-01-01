const names = ['Manu', 'Ankit', 'Akshay', 'Vraj'];

// index starts at 0
console.log(names[1]);

// length
console.log(names.length);

// Iterable
names.forEach((name) => {
  console.log(name);
});

// Adding an element in array at last
names.push('Meet');

// FInding an element
const ankit = names.find((name) => name === 'Ankit');
console.log(ankit);

// Finding an index on an element
const akshayIndex = names.findIndex((name) => name === 'Akshay');
console.log(akshayIndex);

// Delete an element
// Deleting 1 element from index 2
names.splice(2, 1);
console.log(names);

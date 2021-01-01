// Declaration
const resultData = new Map();

// Entering data in a map (Getting the value)
resultData.set('average', 1.53);
resultData.set('lastName', null);

const germany = { name: 'Germany', population: 82 };
resultData.set(germany, 0.89); // This is also allowed in map, but not in Objects

// Maps are iterable
resultData.forEach((data) => {
  console.log(data);
});

// Getting the value
console.log(resultData.get('average'));

// Deleting any value
resultData.delete('average');
console.log(resultData);
resultData.delete(germany);
console.log(resultData);

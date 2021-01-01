// Declaration
const person = {
  firstName: 'Max',
  age: 31,
  hobbies: ['Sports, Cooking'],
  greet() {
    console.log(`Hi I am ${this.firstName}`);
  },
};

// Accessing elemets
// eslint-disable-next-line dot-notation
console.log(person['firstName']); // access it by key passing as string
console.log(person.firstName);

// Adding new property
person.lastName = 'Cruz';
console.log(person);

// Delete a propert
delete person.age;
console.log(person);

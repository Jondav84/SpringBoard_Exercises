/** @format */

// Same Keys and Values\

function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

//computed Property Names

let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my Favorite",
};

// Object Methods
const instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + "says bye!";
  },
};

//createAnimal function

function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
}

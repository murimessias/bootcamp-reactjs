const john = {
  name: "John",
  surname: "Doe",
  age: 30,
  hobbies: ["Surf", "Design"],
};

const jane = {
  ...john,
  name: "Jane",
  // Acrescentando através do método de Concat
  // hobbies: john.hobbies.concat("MuayThay", "Programming"),

  // Acrescentando através do método de Spreading
  hobbies: [...john.hobbies, "MuayThay", "Programming"],
};

console.log("John:", john);
console.log("Jane:", jane);

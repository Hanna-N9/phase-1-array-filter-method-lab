//Match with lowercase of drivers' name
const findMatching = (name, mini) =>
  name.filter((x) => x.toLowerCase() === mini.toLowerCase());

//Returns all drivers whose names begin with the provided letters
const fuzzyMatch = (name, letters) =>
  name.filter((x) => x.indexOf(letters) === 0);

//Returns each element whose name property matches the provided string argument
const matchName = (name, nameMatch) => name.filter((x) => x.name === nameMatch);

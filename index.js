const findMatching = (name, mini) =>
  name.filter((x) => x.toLowerCase() === mini.toLowerCase());

const fuzzyMatch = (name, letters) =>
  name.filter((x) => x.toLowerCase().indexOf(letters.toLowerCase()) === 0);

const matchName = (name, nameMatch) => name.filter((x) => x.name === nameMatch);

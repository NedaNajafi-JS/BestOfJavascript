const names = [
  "Winston Spencer Churchill",
  "Plato",
  "Abraham Lincoln",
  "Socrates",
  "Charles Darwin",
];


const result = names.flatMap(name => {
  let splittedNames = name.split(" ");
  return splittedNames.length <= 1 ? [] : splittedNames.splice(1);
})

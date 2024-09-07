const groceriesList = () => {
  const result = new Map();
  const groc = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const i of Object.keys(groc)) {
    result.set(i, groc[i]);
  }
  return result;
};

export default groceriesList;

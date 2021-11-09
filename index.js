function myEach(collection, callback) {
  for (item in collection) {
    callback(collection[item]);
  }
  return collection;
}

function myMap(collection, callback) {
  let newThing = JSON.parse(JSON.stringify(collection));
  for (let item in newThing) {
    callback(item);
  }
  return newThing;
}

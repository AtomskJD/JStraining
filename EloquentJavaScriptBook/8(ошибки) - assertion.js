function AssertionFailed(message) {
  this.message = message;
}
AssertionFailed.prototype = Object.create(Error.prototype);

function assert(test, message) {
  if (!test)
    throw new AssertionFailed(message);
}

function lastElement(array) {
  assert(array.length > 0, "пустой массив в lastElement");
  return array[array.length - 1];
}

lastElement([]);
/*
Exception: Error: пустой массив в lastElement
*/
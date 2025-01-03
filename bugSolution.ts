function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Parameters must be numbers');
  }
  return a + b;
}

let result = add(1, 2); // This will compile and run without error
console.log(result); // Output: 3

try {
  let result2 = add(1, "2");
} catch (error) {
  console.error(error.message); // Output: Parameters must be numbers
}
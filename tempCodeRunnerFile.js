function sum(...args) {
  const total = args.reduce((a, b) => a + b);
  return total;
}
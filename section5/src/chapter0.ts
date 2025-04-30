function func(a: number, b: number) {
  return a + b;
}

const add = (a: number, b: number) => a + b;

function introduce(name = "김미주", tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
  }
}
introduce("김미주");

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);

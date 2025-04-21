// void

function func1(): string {
  return 'hello';
}

function func2(): void {
  console.log('hello');
}

let a: void;
// a = 1; // Error
// a = 'hello'; // Error
// a = true; // Error
// a = null; // Error
a = undefined;

// never
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
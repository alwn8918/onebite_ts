// any
let anyVar: any = 10;
anyVar = 'hello';

let num: number = anyVar;

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 10;
unknownVar = () => {};

// num = unknownVar; // Error
// unknownVar.toString(); // Error
// unknownVar.toFixed(); // Error

if (typeof unknownVar === 'number') {
  num = unknownVar
}
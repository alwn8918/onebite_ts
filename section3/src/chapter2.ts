// 배열
let numArr:number[] = [1, 2, 3];
let strArr:string[] = ['hello', 'im', 'miju'];

let boolArr: Array<boolean> = [true, false, true]

// 다양한 타입
let multiArr: (string | number)[] = [1, 'hello'];

// 다차원 배열
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5]
]

// 튜플
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3]; // Error
// tup1 = ['hello', 'world']; // Error

let tup2: [number, string, boolean] = [1, '2', true];

const users: [string, number][] = [
  ['lee', 1],
  ['kim', 2],
  ['park', 3],
  ['choi', 4],
  // [5, 'hwang'] // Error
]
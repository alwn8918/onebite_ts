// 합집합 타입 - Union
let a: String | number;
a = 1;
a = "hello";

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = {
//   // Error
//   name: "",
// };

// 교집합 타입 - Intersection
let variable: number & string;

type Intersection = Dog & Person;

let interseciton1: Intersection = {
  name: "",
  color: "",
  language: "",
};

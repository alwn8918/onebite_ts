type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "미꼬",
  color: "white",
  breed: "푸들",
};

// unCasting
animal = dog;

// downCasting
// dog = animal; // Error

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "타입스크립트",
  price: 20000,
  skill: "typescript",
};

book = programmingBook;
// programmingBook = book; // Error

let book2: Book = {
  name: "타입스크립트",
  price: 20000,
  // skill: "typescript", // Error
};

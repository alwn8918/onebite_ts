type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "김미주";
person.age = 23;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "미꼬",
  color: "white",
  breed: "푸들",
} as Dog;

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as String; // Error
let num3 = 10 as unknown as string;

let num4 = 10 as const;

let cat = {
  name: "탑이",
  color: "black",
} as const;

// cat.name = ""; // Error

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
};

const len: number = post.author!.length;

// 타입 추론

let a = 10; // number
let b = "hello"; // string
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};

let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

let d; // any
d = 10; // any
d.toFixed(); // number
d = "hello"; // any
d.toUpperCase(); // string
// d.toFixed(); // Error

const num = 10; // number literal
const str = "hello"; // string literal

let arr = [1, "string"]; // (string | number)[]

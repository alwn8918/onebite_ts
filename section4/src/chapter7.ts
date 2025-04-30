// 타입 좁히기

function func(value: number | string) {
  // value.toFixed(); // Error
  // value.toUpperCase(); // Error

  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

type Person = {
  name: string;
  age: number;
};

function func2(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(value.name);
  }
}

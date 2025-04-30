// 함수 오버로딩

// 버전 정의 => 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현 => 구현 시그니처
function func(a: number, b?: number, c?: number): void {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// func(); // Error
func(1);
// func(1, 2); // Error
func(1, 2, 3);

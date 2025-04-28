// unknown
function unknownExam() {
  // upCasting
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // downCasting
  let unknownVar: unknown;
  // let num: number = unknownVar; // Error
  // let str: string = unknownVar; // Error
  // let bool: boolean = unknownVar; // Error
}

// never
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // upCasting
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // downCasting
  // let never1: never = 10; // Error
  // let never2: never = "hello"; // Error
  // let never3: never = true; // Error
}

// void
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined;
}

// any
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // downCasting 가능!
  anyVar = unknownVar;
  undefinedVar = anyVar;

  // neverVar = anyVar; // Error
}

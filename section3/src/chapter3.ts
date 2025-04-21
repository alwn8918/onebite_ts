// object
let user: {
  id?: number; // 선택적
  name: string;
} = {
  id: 1,
  name: 'miju',
}

user.id

let dog: {
  name: string;
  color: string;
} = {
  name: '미꼬',
  color: 'white',
}

user = {
  name: '홍길동',
}

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY"
}

// config.apiKey = "NEW API" // Error
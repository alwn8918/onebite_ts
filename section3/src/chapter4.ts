// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
}

let user: User = {
  id: 1,
  name: 'miju',
  nickname: 'mati',
  birth: '2003.11.03',
  bio: '안녕하세요',
  location: '고양시',
}

let user2: User = {
  id: 2,
  name: 'miju2',
  nickname: 'mati2',
  birth: '2003.11.03',
  bio: '안녕하세요',
  location: '고양시',
}

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
}

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedStates: 'us',
  UnitedKingdom: 'uk',
}

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
}

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedStates: 840,
  UnitedKingdom: 826,
}
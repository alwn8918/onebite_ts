// enum
enum Role {
  ADMIN,
  USER = 10,
  GUEST
} 

enum Language {
  KOREAN = 'ko',
  ENGLISH = 'en',
}

const user1 = {
  name: 'Lee',
  role: Role.ADMIN,
  language: Language.KOREAN
}
const user2 = {
  name: 'Hong',
  role: Role.USER
}
const user3 = {
  name: 'Kim',
  role: Role.GUEST
}

console.log(user1, user2, user3);
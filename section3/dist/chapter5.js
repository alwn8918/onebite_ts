// enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 10] = "USER";
    Role[Role["GUEST"] = 11] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["KOREAN"] = "ko";
    Language["ENGLISH"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: 'Lee',
    role: Role.ADMIN,
    language: Language.KOREAN
};
const user2 = {
    name: 'Hong',
    role: Role.USER
};
const user3 = {
    name: 'Kim',
    role: Role.GUEST
};
console.log(user1, user2, user3);
export {};

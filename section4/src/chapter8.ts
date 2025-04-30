type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
  switch (user.tag) {
    case "ADMIN":
      // Admin
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`);
      break;
    case "MEMBER":
      // Member
      console.log(`${user.name}님 현재까지 ${user.point}점 모았습니다`);
      break;
    case "GUEST":
      // Guest
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
      break;
  }

  if (user.tag === "ADMIN") {
    // Admin
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`);
  } else if (user.tag === "MEMBER") {
    // Member
    console.log(`${user.name}님 현재까지 ${user.point}점 모았습니다`);
  } else {
    // Guest
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
  }
}

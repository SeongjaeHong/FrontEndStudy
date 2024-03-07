/*
function askPassword(ok, fail) {
    let password = prompt("비밀번호를 입력해주세요.", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    loginOk() {
      alert(`${this.name}님이 로그인하였습니다.`);
    },
  
    loginFail() {
      alert(`${this.name}님이 로그인에 실패하였습니다.`);
    },
  
  };
  
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
 */

function askPassword(ok, fail) {
    let password = prompt("비밀번호를 입력해주세요.", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',

    login(result) {
        alert(this.name + (result ? ' 로그인 성공' : ' 로그인 실패'));
    }
};

// askPassword(user.login.bind(user, true), user.login.bind(user, false));
askPassword(() => user.login(true), () => user.login(false));
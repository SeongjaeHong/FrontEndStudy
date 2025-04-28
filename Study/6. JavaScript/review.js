class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  });
}

// 유효한 사용자를 찾을 때까지 반복해서 username을 물어봄
async function demoGithubUser() {
  while (true) {
    let name = prompt("GitHub username을 입력하세요.", "iliakan");
    try {
      let user = await loadJson(`https://api.github.com/users/${name}`);
      alert(`이름: ${user.name}.`);
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("일치하는 사용자가 없습니다. 다시 입력해 주세요.");
      } else {
        throw err;
      }
    }
  }
}

demoGithubUser().catch(alert);

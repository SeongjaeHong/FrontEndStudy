function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/*
async function getApple(){
    await delay(1000);
    return 'apple';
}
async function log(){
    const apple = getApple();
    console.log(apple);
    console.log('hi');
    const apple2 = await getApple();
    console.log('hello');
    console.log(apple2);
}
log();
*/

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    const response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    }
    else {
        throw new HttpError(response);
    }
}

// 유효한 사용자를 찾을 때까지 반복해서 username을 물어봄
async function demoGithubUser() {
    while (true) {
        let name = prompt("GitHub username을 입력하세요.", "iliakan");
        try {
            let user = await loadJson(`https://api.github.com/users/${name}`);
            break;
        }
        catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("일치하는 사용자가 없습니다. 다시 입력해 주세요.");
            } else {
                throw err;
            }
        }
    }
}

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f() {
    wait().then(result => alert(result));
}

function pseudoRandom(seed) {
    let previous;
    if (seed != undefined) { previous = seed; }
    else { previous = Math.random(); }

    return function () {
        return previous = previous * 16807 % 2147483647;
    }
}

let generator = pseudoRandom(1);

// alert(generator()); // 16807
// alert(generator()); // 282475249
// alert(generator()); // 1622650073

async function* fetchCommits(repo) {
    let url = `https://api.github.com/repos/${repo}/commits`;
    while (url) {
        const response = await fetch(url, {
            headers: { 'User-agent': 'My script' }
        });
        const body = await response.json();

        let nextPage = response.headers.get('Link').match(/<(.*?)>; rel='next'/);
        nextPage = nextPage?.[1];
        url = nextPage;

        for (let commit of body) yield commit;
    }
}

(async () => {
    let count = 0;
    for await (const commit of fetchCommits('javascript-tutorial/en.javascript.info')) {
        console.log(commit.author.login);
        if (++count == 5) break;
    }
})();
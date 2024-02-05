class User {

    constructor(name) {
        // setter를 활성화합니다.
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            alert("이름이 너무 짧습니다.");
            return;
        }
        this._name = value;
    }

}

let user = new User("보라fkfk");
alert(user.name); // 보라

// user = new User(""); // 이름이 너무 짧습니다.
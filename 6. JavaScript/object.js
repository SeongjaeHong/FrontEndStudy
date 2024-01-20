function Person(name){
    this.name = name;
    this.description = 'My name is ' + this.name;
}

var p1 = new Person('snowman');
document.write(p1.name+"<br/>");
document.write(p1.description+"<br/>");
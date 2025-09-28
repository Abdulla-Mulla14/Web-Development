function Person(name) {
    this.name = name
}

Person.prototype.greet = function() {
    console.log(`This is my ${this.name}`);
}

let myName = new Person("Abdulla");
myName.greet()
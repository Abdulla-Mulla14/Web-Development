function Phone(brand, model) {
    this.brand = brand
    this.model = model
}

let myPhone = new Phone("realme", "2025")
console.log(myPhone);



function Tea(type) {
    this.type = type
    this.describe = function() {
        return `this is a cup of ${this.type}`
    }
}

let lemonTea = new Tea("lemon tea")
console.log(lemonTea.describe());


// this is a constructor function (prototype)
function Animal(species) {
    this.species = species
}

Animal.prototype.sound = function() {
    return `${this.species} makes a sound`
}

let dog = new Animal("dog")
console.log(dog.sound());

let cat = new Animal("cat")
console.log(cat.sound());


// This function teaches how to raise errors
function Drink(name) {
    if (!new.target) {
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}
let tea = new Drink("tea");
let coffee = Drink("coffee")

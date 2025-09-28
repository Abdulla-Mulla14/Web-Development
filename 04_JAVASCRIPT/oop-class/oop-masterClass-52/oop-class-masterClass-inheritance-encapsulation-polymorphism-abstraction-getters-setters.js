

// Inheritence
class Vehicle {
    constructor (make, model) {
        this.make = make
        this.model = model
    }

    start() {
        return `${this.model} is a car from ${this.make}`
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.make}: This is an inheritance`
    }
}

let myCar = new Car("Toyota", "Corolla")
console.log(myCar.start());
console.log(myCar.drive());

// eg: of Inheritance.
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    work() {
        console.log(`${this.name} is working`);
    }
    }

    class Manager extends Employee {
    work() {
        console.log(`${this.name} is managing the team`);
    }
    }

    class Developer extends Employee {
    work() {
        console.log(`${this.name} is writing code`);
    }
}

const e1 = new Manager("Fasahath", 50000);
const e2 = new Developer("Kulsum", 40000);

console.log(e1.work());
console.log(e2.work());

// ********************************************************************************* //

// Encapsulation
class BankAccount{
    #balance = 0;

    bank(amount) {
        this.#balance += amount;
        return this.#balance
    }

    getBalance() {
        return `$ ${this.#balance}`
    }

}
let amount = new BankAccount();
console.log(amount.getBalance())

// eg: of encapsualtion.
class bankAccount {
    #balance = 0;

    constructor(owner) {
        this.owner = owner;
    }

    deposit(amount) {
        if (amount > 0) {
        this.#balance += amount;
        console.log(`${this.owner} deposited ${amount}`);
        }
    }

    getBalances() {
        return `Balance: ${this.#balance}`;
    }
}
let mybal = new bankAccount("Abdulla");
mybal.deposit(100);
console.log(mybal.getBalances());

// ********************************************************************************* //

// Abstraction
// These three examples of abstraction are different ways to do abstraction 
class makeCoffee{
    start() {
        // calling of database
        return `Starting the machine...`;
    }

    brewCoffee() {
        // complex calculation
        return `Brewing coffee`;
    }

    pressStartButton() {
        let msgOne = this.start();
        let msgTwo = this.brewCoffee();
        return `${msgOne} + ${msgTwo}`
    }
}

let myMachine = new makeCoffee();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());

// eg: of Abstraction.
class Cars{
    start() {
        this.#injectFuel();
        this.#ignite();
        console.log("🚗 Car Started");
    }

    #injectFuel() {
        console.log("Fuel Injected");
    }

    #ignite() {
        console.log("Engine Ignited");
    }
}
let myCars = new Cars()
myCars.start();

// eg: of Abstraction.
class CoffeeMachine {
    start() {
        this.boilWater();
        this.brew();
        console.log("☕ Coffee is ready!");
    }

    boilWater() {
        console.log("Boiling water...");
    }

    brew() {
        console.log("Brewing coffee...");
    }
}


// ********************************************************************************* //

// Polymorphism
class Bird{
    fly() {
        return `Flying...`
    }
}

class Penguin extends Bird{
    fly() {
        return `Penguin can't fly`
    }
}

let bird = new Bird()
let penguin = new Penguin()
console.log(bird.fly());
console.log(penguin.fly());

// eg: of Polymorphism.
class Notification{
    send() {
        console.log("Sending Notification");
    }
}

class Email extends Notification{
    send() {
        console.log("Sending Email");
    }
}

class SMS extends Notification{
    send() {
        console.log("Sending SMS");
    }
}

class Push extends Notification{
    send() {
        console.log("Sending Push Notification...");
    }
}

let mynotify = [new Notification(), new Email(), new SMS(), new Push()]
mynotify.forEach(n => n.send());

// ********************************************************************************* //

// Static method
class Calculator{
    static add(a, b) {
        return a + b
    }
}
// let miniCal = new Calculator()
// console.log(miniCal.add(2, 3));   // yeh two line nahi chalega kyunki: Nobody should be using it by creating an object
console.log(Calculator.add(2, 3));

// ********************************************************************************* //
// getters and setters
class User{
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password() {
        return this._password.toUpperCase()
    }

    set password(value) {
        this._password = value
    }
}
const hitesh = new User("Abdulla", "123")
console.log(hitesh.password);
console.log(hitesh.email);

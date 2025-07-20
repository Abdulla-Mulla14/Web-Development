/*  
1. Write a function named 'makeTea' that takes one parameter, 'typeofTea', and returns a string like "making green tea" when called with "green tea". Store the result in a variable name 'teaOrder'.
*/
function makeTea(typeofTea) {
    return `Making ${typeofTea}`;
}

let teaOrder = makeTea("green tea")
console.log(teaOrder);


/*  
2. Create a function named 'orderTea' that takes one parameter, 'teatype'. Inside this function, create another function named 'confirmOrder' that returns a message like "Order confirmed for chai".
    Call 'confirmOrder' from within 'orderTea' and return the result.
*/
function orderTea(teatype) {
    function confirmOrder() {
        return `Order confirmed for chai`;
    } 
    return confirmOrder()
}
let tearO = orderTea("chai")
console.log(tearO);


/*  
3. Write an arrow function named 'calculateTotal' that takes two parameters: 'price' and 'quantity'. The function should return the total cost by multiplying the 'price' and 'quantity'.
    Store the result in a variable named 'totalCost'.
*/
const calculateTotal = (price, quantity) => price * quantity

let totalCost = calculateTotal(199, 5)
console.log(totalCost);


/*  
4. Write a function named 'processTeaOrder' that takes another function, 'makeTea', as a parameter and calls it with the argument "earl grey".
    Return the result of calling 'makeTea'.
*/
function makeTea(teaType) {
    return `maketea: ${teaType}`
}

function processTeaOrder(makeTeaFunction) {
    return makeTeaFunction("earl grey")
}
let order = processTeaOrder(makeTea)
console.log(order);


/*  
5. Write a function named 'createTeaMaker' that returns another function. The returned function should take one parameter, 'teatype', and return a message like "Making green tea".
    Store the returned function in a variable named 'teaMaker' and call it with "green tea".
*/
// Closure is avFunction that remembers variables from its outer scope even after the outer function is done
function createTeaMaker(name) {
        let score = 100
    return function (teatype) {
        return `Making ${teatype} ${name} ${score}`
    }
}
const teaMaker = createTeaMaker("Abdulla")
let result = teaMaker("green tea")
console.log(result);

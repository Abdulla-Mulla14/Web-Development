
// In this (*) is generator and using of (next()) is for iterator

function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

let gen = numberGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

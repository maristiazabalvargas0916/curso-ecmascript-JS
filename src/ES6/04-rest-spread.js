// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a,fruits[1]);

// objects destructuring

let user = {username: 'Matias', age: 13};
let { username, age } = user;
console.log(username, age);


// spread operator

let person = { name: 'Matias', age: 23 };
let country = 'COL';

let data = { id: 1, ...person, country };
console.log(data);

// rest 

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);
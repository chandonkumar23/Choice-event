-Questin number 1

let greeting;
greetign = {};
console.log(greetign);

-Ans:(B) ReferenceError: greetign is not defined

-explanation : this code worng beacuse the greeting object is empaty.so right answare is ReferenceError: greetign is not defined.
 

 -Question number 2

function sum(a, b) {
  return a + b;
}
sum(1, "2");

-Ans:(c) "12"

-explanation: the result is "12" because  javascript performs string concatenation when adding a number and a string.

-Question number 3

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

-Ans:(A)["🍕", "🍫", "🥑", "🍔"]

-explanation: the result  is (A) because food arry to the console log , and it remains unchanged from its iitial stste.


-Question number 4

function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

-Ans:(B) Hi there, undefined

-explanation: the result is (B) because no name argument was passed then calling the sayHI function so the name parameter inside the functin defaults to undefind.


Question number 5

 let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

-Ans:(C) 3

--explanation: the result is (c) because the are three elements in this nums arry that are no equal to 0 and the count variable reflects that count
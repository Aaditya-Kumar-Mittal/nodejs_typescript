// Functions with Type Annotations

function add(a: number, b: number) {
  return a + b;
}

// Arrow Functions
const multiply = (num1: number, num2: number) => {
  return num1 * num2;
};

function greet(name: String, greetings?: String): String {
  return `${greetings} ${name}`;
}

console.log(add(5, 6));
console.log(multiply(5, 6));

console.log(greet("Aaditya"));

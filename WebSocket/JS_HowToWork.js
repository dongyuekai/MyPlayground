function foo() {
  throw new Error('SessionStack will help you resolve crashes:');
}
function bar() {
  foo();
}
function start() {
  bar();
}
start();
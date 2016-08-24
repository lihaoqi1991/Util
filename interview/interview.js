/**
 * Created by lihaoqi on 16/3/23.
 */
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};

function Foo(y) {
    this.y = y;
}

Foo.prototype.x = 10;
Foo.prototype.calculate = function (z) {
    return this.x + this.y + z;
};

var b = new Foo(20);
var c = new Foo(30);

b.calculate(30);
c.calculate(40);

console.log(
    b.__proto__ === Foo.prototype,
    c.__proto__ === Foo.prototype,
    b.constructor === Foo,
    c.constructor === Foo,
    Foo.prototype.constructor === Foo,
    b.calculate === b.__proto__.calculate,
    b.__proto__.calculate === Foo.prototype.calculate
);

console.log("********************************************");

console.log(10 + "5");
console.log(10 - "5");

console.log("********************************************");

var Test = function (num) {
    this._mynum = 10;
    var funA = function () {
        console.log(num);
        console.log(this._mynum);
    };
    this.funB = function () {
        funA();
    };
    this.funC = funA;
};

var a = new Test(5);
a.funB();
a.funC();

function Person() {
    if (!(this instanceof Person)) {
        return new Person();
    }
    this.a = 3;
    this.b = 4;
}
var person1 = new Person();
var person2 = Person();

"I ma a lasagna hog".split("").reverse().join("");

var foo = "hello";
(function () {
    var bar = " World";
    alert(foo + bar);
})();
alert(foo + bar);

var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};

console.log('one');
setTimeout(function () {
    console.log('two');
}, 0);
console.log('three');

var obj = {
    a: 1,
    b: function () {
        console.log(this.a);
    }
};
var a = 2, objb = obj.b();


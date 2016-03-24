/**
 * Created by lihaoqi on 16/3/23.
 */

function Foo(y){
    this.y = y;
}

Foo.prototype.x = 10;
Foo.prototype.calculate = function(z){
    return this.x + this.y +z;
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

var Test = function(num){
    this._mynum = 10;
    var funA = function(){
        console.log(num);
        console.log(this._mynum);
    };
    this.funB = function(){
        funA();
    };
    this.funC = funA;
};

var a = new Test(5);
a.funB();
a.funC();


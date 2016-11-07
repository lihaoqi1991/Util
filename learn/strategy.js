/**
 * Created by lihaoqi on 16/8/24.
 */
//策略模式

let strategies = {
    'S': (salary) => salary * 4,
    'A': (salary) => salary * 3,
    'B': (salary) => salary * 2,
    'isNotEmpty': (value, errorMsg) => {
        if (!value) return errorMsg;
    }
};

let calculateBonus = (level, salary) => strategies[level](salary);

console.log(calculateBonus('S', 20000));
console.log(calculateBonus('B', 20000));

//表单验证
var Validator = function () {
    this.cache = [];
};

Validator.prototype.add = function (domValue, rule, errorMsg) {
    var ary = rule.split(':');
    this.cache.push(function () {
        var strategy = ary.shift();
        ary.unshift(domValue);
        ary.push(errorMsg);
        return strategies[strategy].apply({}, ary);
    });
};

Validator.prototype.start = function () {
    for (let validatorFun of this.cache) {
        var msg = validatorFun();
        if (msg) {
            return msg;
        }
    }
};

let validator = new Validator();
validator.add('', 'isNotEmpty', '用户名不能为空');
console.log(validator.start());

let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

console.log(iter.next()); // { value: 'a', done: false }
console.log(iter.next()); // { value: 'b', done: false }
console.log(iter.next()); // { value: 'c', done: false }
console.log(iter.next()); // { value: undefined, done: true }

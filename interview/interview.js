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


(function() {
    var $w = $(window);
    var $prog2 = $('.progress-indicator-2');
    var wh = $w.height();
    var h = $('body').height();
    var sHeight = h - wh;
    $w.on('scroll', function() {
        window.requestAnimationFrame(function(){
            var perc = Math.max(0, Math.min(1, $w.scrollTop() / sHeight));
            updateProgress(perc);
        });
    });

    function updateProgress(perc) {
        $prog2.css({width: perc * 100 + '%'});
        ditto.save_progress && store.set('page-progress', perc);
    }

}());

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

var calculate = (function() {
    var sum = 0;
    var func = function() {
        if (arguments.length === 0) {
            var ret = sum;
            sum = 0;
            return ret;
        }
        sum += arguments[0];
        return func;
    };
    return func;
});

var APP = function() {
    this.stack = [];
};
APP.prototype.use = function (cb) {
    this.stack.push(cb);
};
APP.prototype.run = function() {
    var self = this;
    var next = function() {
        if (self.stack.length < 1) {
            return;
        }
        var cb = self.stack.shift();
        cb(next);
    };
    next();
};

var func1 = function (next) {
    console.log('func1 begin');
    next();
    console.log('func1 end');
};
var func2 = function (next) {
    console.log('func2 begin');
    next();
    console.log('func2 end');
};
var func3 = function (next) {
    console.log('func3 begin');
    next();
    console.log('func3 end');
};

var a = new APP();
a.use(func1);
a.use(func2);
a.use(func3);
a.run();


function getData() {
    var name, value;
    if (opts.data) {
        if (typeof opts.data === "string") {
            opts.data = opts.data.split("&");
            for (var i = 0, len = opts.data.length; i < len; i++) {
                name = opts.data[i].split("=")[0];
                value = opts.data[i].split("=")[1];
                opts.data[i] = encodeURIComponent(name) + "=" + encodeURIComponent(value);
            }
            opts.data = opts.data.replace("/%20/g", "+");
        } else if (typeof opts.data === "object") {
            var arr = [];
            for (var name in opts.data) {
                var value = opts.data[name].toString();
                name = encodeURIComponent(name);
                value = encodeURIComponent(value);
                arr.push(name + "=" + value);
            }
            opts.data = arr.join("&").replace("/%20/g", "+");
        } //使用GET方法或JSONP，则手动添加到URL中
        if (opts.type === "GET" || opts.dataType === "jsonp") {
            opts.url += opts.url.indexOf("?") > -1 ? opts.data : "?" + opts.data;
        }
    }
}

// 写法一
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}
// 函数没有参数的情况
m1() // [0, 0]
m2() // [0, 0]

// x和y都有值的情况
m1({x: 3, y: 8}) // [3, 8]
m2({x: 3, y: 8}) // [3, 8]

// x有值，y无值的情况
m1({x: 3}) // [3, 0]
m2({x: 3}) // [3, undefined]

// x和y都无值的情况
m1({}) // [0, 0];
m2({}) // [undefined, undefined]

m1({z: 3}) // [0, 0]
m2({z: 3}) // [undefined, undefined]


//
//
//Array reduce
//
var reducers = {  
  totalInEuros : function(state, item) {
    return state.euros += item.price * 0.897424392;
  },
  totalInYen : function(state, item) {
    return state.yens += item.price * 113.852;
  }
};

var manageReducers = function(reducers) {
  return function(state, item) {
    return Object.keys(reducers).reduce(
      function(nextState, key) {
        reducers[key](state, item);
        return state;
      },
      {}
    );
  }
};

var bigTotalPriceReducer = manageReducers(reducers);

var initialState = {euros:0, yens: 0};

var items = [{price: 10}, {price: 120}, {price: 1000}];

var totals = items.reduce(bigTotalPriceReducer, initialState);

console.log(totals);
/**
 * Created by lihaoqi on 16/8/24.
 */
//单例模式
var Signleton = function (name) {
    this.name = name;
    this.instance = null;
};

Signleton.prototype.getName = function () {
    console.log(this.name);
};

Signleton.getInstance = function (name) {
    if (!this.instance) {
        this.instance = new Signleton(name);
    }
    return this.instance;
};

Signleton.getInstance_2 = (function () {
    var instance = null;
    return function (name) {
        if (!instance) {
            instance = new Signleton(name);
        }
        return instance;
    }
})();

var a = Signleton.getInstance('sven1');
var b = Signleton.getInstance('sven2');
console.log(a === b);

var c = Signleton.getInstance_2('sven1');
var d = Signleton.getInstance_2('sven2');
console.log(c === d);

//用户代理实现单例模式
var CreateDiv = function (html) {
    this.html = html;
    this.init();
};

CreateDiv.prototype.init = function () {
    var div = document.createElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div);
};

var ProxySingletonCreateDiv = (function () {
    var instance;
    return function (html) {
        if (!instance) {
            instance = new CreateDiv(html);
        }
        return instance;
    }
})();

//js单例,确保只有一个实例,并提供全局访问
//全局变量不是单例模式

var getSingle = function (fn) {
    var result;
    return function () {
        return result || (result = fn.apply(this, arguments));
    }
};





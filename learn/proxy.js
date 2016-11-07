/**
 * Created by lihaoqi on 16/8/25.
 */
var myImage = (function () {
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);
    return {
        setSrc: function (src) {
            imgNode.src = src;
        }
    }
})();

var proxyImage = (function () {
    var img = new Image();
    img.onload = function () {
        myImage.setSrc(this.src);
    };
    return {
        setSrc: function (src) {
            myImage.setSrc('loading.gif');
            img.src = src;
            this.src = src;
        }
    }
});

proxyImage.setSrc('real.jpg');

var synchronousFile = function (id) {
    console.log(`开始同步文件,id为${id}`);
};

var proxySynchronousFile = (function () {
    var cache = [], timer;
    return function (id) {
        cache.push(id);
        if (timer) {
            return;
        }
        timer = setTimeout(function () {
            synchronousFile(cache.join(','));
            clearTimeout(timer);
            timer = null;
            cache.length = 0;
        }, 2000);
    }
})();

proxySynchronousFile('1');
proxySynchronousFile('2');
proxySynchronousFile('3');
proxySynchronousFile('4');
proxySynchronousFile('5');
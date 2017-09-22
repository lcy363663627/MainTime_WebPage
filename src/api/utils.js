var Util = {
    getData: function() {

    },
    getElements: function(cls) {
        var ele;
        if (/\./.test(cls)) {
            cls = cls.replace(/\./, '');
            ele = document.getElementsByClassName(cls);
            if (ele == null) {
                throw new Error('--------------没有找到CLASS为' + cls + '的元素--------------!');
            }
        } else if (/\#/.test(cls)) {
            cls = cls.replace(/\#/, '');
            ele = document.getElementById(cls);
            if (ele == null) {
                throw new Error('--------------没有找到ID为' + cls + '的元素--------------!');
            }
        } else {
            throw new Error('--------------参数格式错误-------------!');
        }

        return ele;
    },
    creatXML: function() {
        var xml = null;
        if (window.XMLHttpRequest) {
            xml = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xml = new ActiveXObject("Microsoft.XMLHTTP");
        }
        return xml;
    },
    setElements: function(data, obj) {
        var title = obj.title;
        for (var i = 0; i < obj.ele.length; i++) {
            obj.img[i].src = (function(a) {
                return data[a].img ? data[a].img : data[a].image;
            })(i);
            obj.p[i].innerHTML = (function(a) {
                return data[a][title];
            })(i);
        }
    },
    addEvent: function(ele, type, fn) {
        if (window.addEventListener) {
            ele.addEventListener(type, fn);
        } else if (window.attachEvent) {
            ele.attachEvent('on' + type, fn);
        } else {
            ele["on" + type] = fn;
        }
    },
    removeEvent: function(ele, type, fn) {
        if (window.removeEventListener) {
            ele.removeEventListener(type, fn);
        } else if (window.attachEvent) {
            ele.detachEvent('on' + type, fn);
        } else {
            ele["on" + type] = null;
        }
    }


}
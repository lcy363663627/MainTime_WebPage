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
        if (obj.type == 'selling') {
            var text1 = obj.text1;
            var text2 = obj.text2;
            var text3 = obj.text3;
            var text4 = obj.text4;
        }

        for (var i = 0; i < obj.ele.length; i++) {
            obj.img[i].setAttribute('datasrc', (function(a) {
                return data[a].img ? data[a].img : data[a].image;
            })(i));
            // 图片懒加载。。。
            // obj.img[i].src = (function(a) {
            //     return data[a].img ? data[a].img : data[a].image;
            // })(i);
            obj.p[i].innerHTML = (function(a) {
                return data[a][title];
            })(i);
            if (obj.type == 'selling') {
                obj.el_text1[i].innerHTML = (function(a) {
                    return data[a][text1[0]] + '月' + data[a][text1[1]] + '日上映';
                })(i);
                obj.el_text2[i].innerHTML = (function(a) {
                    return data[a][text2];
                })(i);
                obj.el_text3[i].innerHTML = (function(a) {
                    return data[a][text3] + '分钟';
                })(i);
                obj.el_text4[i].innerHTML = (function(a) {
                    return '<i></i>' + data[a][text4];
                })(i);
            }

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
    },
    /**
     * 图片懒加载方法
     */
    img_load: function(ele_Arr) {
        var aImg_len = ele_Arr.length;
        var n = 0;
        var seeHeight = document.documentElement.clientHeight;
        var scrolltop = document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(seeHeight + ',' + scrolltop + ',' + getTop(ele_Arr[1]));
        for (var i = n; i < aImg_len; i++) {
            if (getTop(ele_Arr[i]) < seeHeight + scrolltop) {
                // console.log(seeHeight + ',' + scrolltop + ',' + getTop(ele_Arr[i]));
<<<<<<< HEAD
                if (ele_Arr[i].getAttribute('datasrc')) {
                    var attr = ele_Arr[i].getAttribute('datasrc');
                    ele_Arr[i].src = attr;
                    ele_Arr[i].removeAttribute('datasrc');
                    if (n == aImg_len - 1) {
                        window.onscroll = null;
                    }

                }
                n = i + 1;
            }
=======
                if (!ele_Arr[i].getAttribute('swiper')) {
                    ele_Arr[i].src = ele_Arr[i].getAttribute('datasrc');
                }

            }
            n = i + 1;
        }
>>>>>>> parent of 115ad67... 完善 图片懒加载

            function getTop(e) {
                var t = e.offsetTop;
                while (e = e.offsetParent) {
                    t += e.offsetTop;
                }
                return t;
            }

        }

    }
}
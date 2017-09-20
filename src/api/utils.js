var Util = {
    getData: function () {

    },
    getElements: function (cls) {
        var ele = document.getElementsByClassName(cls);
        return ele;
    },
    creatXML: function () {
        var xml = null;
        if (window.XMLHttpRequest) {
            xml = new XMLHttpRequest();
        }else if (window.ActiveXObject) {
            xml = new ActiveXObject("Microsoft.XMLHTTP");
        }
        return xml;
    },
    setElements: function (data, obj) {
        var title = obj.title;
        for (var i = 0; i < obj.ele.length; i++) {
                obj.img[i].src = (function (a) {
                    return data[a].img ? data[a].img : data[a].image;
                })(i);
                obj.p[i].innerHTML = (function (a) {
                    return data[a][title];
                })(i);
        }
    }


}
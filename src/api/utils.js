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


}

var ele1 = {
    ele: Util.getElements('div-img1'),
    img: Util.getElements('img1'),
    p: Util.getElements('name1'),
    button: Util.getElements('li-img-btn'),
    title: 'titleCn'
}
var ele2 = {
    ele: Util.getElements('div-img2'),
    img: Util.getElements('img2'),
    p: Util.getElements('name2'),
    button: Util.getElements('li-img-btn2'),
    title: 'tCn'
}
var ele3 = {
    ele: Util.getElements('div-img3'),
    img: Util.getElements('img3'),
    p: Util.getElements('name3'),
    button: Util.getElements('li-img-btn3'),
    title: 'title'
}
var that = this;
var getData = http.getrequest('get', 'http://localhost:3000/PageSubArea/HotPlayMovies.api?locationId=290')
    .then(function (res) {
        Util.setElements(res.movies, that.ele1);
    });
var getDataHot = http.getrequest('get', 'http://localhost:3000/Showtime/LocationMovies.api?locationId=290')
    .then(function (res) {
        Util.setElements(res.ms, that.ele2);
    });
var getDataHot = http.getrequest('get', 'http://localhost:3000/Movie/MovieComingNew.api?locationId=290')
    .then(function (res) {
        Util.setElements(res.moviecomings, that.ele3);
    });
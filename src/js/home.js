var ele1 = {
    ele: Util.getElements('.div-img1'),
    img: Util.getElements('.img1'),
    p: Util.getElements('.name1'),
    button: Util.getElements('.li-img-btn'),
    title: 'titleCn'
}
var ele2 = {
    ele: Util.getElements('.div-img2'),
    img: Util.getElements('.img2'),
    p: Util.getElements('.name2'),
    button: Util.getElements('.li-img-btn2'),
    title: 'tCn'
}
var ele3 = {
    ele: Util.getElements('.div-img3'),
    img: Util.getElements('.img3'),
    p: Util.getElements('.name3'),
    button: Util.getElements('.li-img-btn3'),
    title: 'title'
}

var that = this;
var getData = http.getrequest('get', 'http://localhost:3000/PageSubArea/HotPlayMovies.api?locationId=290')
    .then(function(res) {
        Util.setElements(res.movies, that.ele1);
    });
var getDataHot = http.getrequest('get', 'http://localhost:3000/Showtime/LocationMovies.api?locationId=290')
    .then(function(res) {
        Util.setElements(res.ms, that.ele2);
    });
var getDataHot = http.getrequest('get', 'http://localhost:3000/Movie/MovieComingNew.api?locationId=290')
    .then(function(res) {
        Util.setElements(res.moviecomings, that.ele3);
    });



var swiper_li = Util.getElements('.swiper-mian-div')[0];
var swiper_img = Util.getElements('.sw-img1');
var swiper_btn_left = Util.getElements('.swiper-btn-left')[0];
var swiper_btn_right = Util.getElements('.swiper-btn-right')[0];

Util.addEvent(swiper_btn_left, 'click', function(e) {
    my_Animate(swiper_li, 'right', 1200);
    // var parent = swiper_img[swiper_li.length-1].parentNode;
    console.log(swiper_img[swiper_img.length - 1]);
});
Util.addEvent(swiper_btn_right, 'click', function(e) {
    my_Animate(swiper_li, 'left', 1200);
});

function my_Animate(ele, direction, transitionX) {
    var liftX = 0;
    if (direction == 'left') {
        leftX = ele.offsetLeft - 100;
    } else {
        leftX = ele.offsetLeft + 100;
    }

    function move() {
        var timer = setTimeout(function() {
            move();
        }, 1);
        if (Math.abs(leftX) % transitionX == 0) {
            clearTimeout(timer);
        }
        if (direction == 'left') {
            ele.style.left = leftX + "px";
            leftX = leftX - 10;
        } else if (direction == 'right') {
            ele.style.left = leftX + "px";
            leftX = leftX + 10;
        }


    }
    move();
}
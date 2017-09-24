var that = this;
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
http.getrequest('get', 'http://localhost:3000/PageSubArea/HotPlayMovies.api?locationId=290')
    .then(function(res) {
        Util.setElements(res.movies, that.ele1);
    });
http.getrequest('get', 'http://localhost:3000/Showtime/LocationMovies.api?locationId=290')
    .then(function(res) {
        Util.setElements(res.ms, that.ele2);
    });
http.getrequest('get', 'http://localhost:3000/Movie/MovieComingNew.api?locationId=290')
    .then(function(res) {
        Util.setElements(res.moviecomings, that.ele3);
    });



var swiper_li = Util.getElements('.swiper-mian-div')[0];
var swiper_img = Util.getElements('.sw-img1');
var swiper_btn_left = Util.getElements('.swiper-btn-left')[0];
var swiper_btn_right = Util.getElements('.swiper-btn-right')[0];
var swiper_point_span = Util.getElements('.swiper-point-span');
var timer1;

Util.addEvent(swiper_btn_left, 'click', function(e) {
    my_Animate(swiper_li, 'right', 1200, swiper_point_span);
    
});
Util.addEvent(swiper_btn_right, 'click', function(e) {
    my_Animate(swiper_li, 'left', 1200, swiper_point_span);
});

Util.addEvent(swiper_li, 'mouseenter', function (e) {
    clearInterval(timer1);
});

Util.addEvent(swiper_li, 'mouseleave', function (e) {
    timer1 = setInterval(function() {
        my_Animate(swiper_li, 'left', 1200, swiper_point_span);
    },5000);
});

timer1 = setInterval(function() {
    my_Animate(swiper_li, 'left', 1200, swiper_point_span);
},5000);



function my_Animate(ele, direction, transitionX, point_ani) {
    
    var liftX = 0;
    var count = 0;
    if (direction == 'left') {
        leftX = ele.offsetLeft - 10;
    } else {
        leftX = ele.offsetLeft + 10;
    }
    movePoint();
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
            if (leftX <= -6000) {
                ele.style.left = 0 + "px";
            }
        } else if (direction == 'right') {
            ele.style.left = leftX + "px";
            leftX = leftX + 10;
            if (leftX >= 1200) {
                ele.style.left = -4800 + "px";    
            }
        }  
    }
    function movePoint() {
        // var leftX = ele.offsetLeft;
        point_ani[(Math.ceil(Math.abs(leftX) / 1200) - 1) == -1 ? 4 : Math.ceil(Math.abs(leftX) / 1200) - 1].className = point_ani[count].className.split(' ')[0];
        // console.log(point_ani[count].className);
        count = Math.ceil(Math.abs(leftX) / 1200) == 5?0:Math.ceil(Math.abs(leftX) / 1200);
        // console.log(count);
        // alert(1);
        point_ani[count].className = point_ani[count].className + ' swiper-point-hover';
        // console.log(point_ani[count].className);
    }
    move();
    
}


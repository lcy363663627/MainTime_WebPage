var that = this;
var ele1 = {
    type: 'selling',
    title_count: Util.getElements('.title-count')[0],
    ele: Util.getElements('.div-img1'),
    img: Util.getElements('.img1'),
    p: Util.getElements('.name1'),
    button: Util.getElements('.li-img-btn'),
    title: 'titleCn',
    el_text1: Util.getElements('.a-item-div-text1'),
    el_text2: Util.getElements('.a-item-div-text2'),
    el_text3: Util.getElements('.a-item-div-text3'),
    el_text4: Util.getElements('.a-item-text1'),
    text1: ['rMonth', 'rDay'],
    text2: 'type',
    text3: 'length',
    text4: 'commonSpecial'
};
var ele2 = {
    type: 'Hot',
    title_count: Util.getElements('.title-count1')[0],
    ele: Util.getElements('.div-img2'),
    img: Util.getElements('.img2'),
    p: Util.getElements('.name2'),
    button: Util.getElements('.li-img-btn2'),
    title: 'tCn'

};
var ele3 = {
    type: 'JJSY',
    title_count: Util.getElements('.title-count2')[0],
    ele: Util.getElements('.div-img3'),
    img: Util.getElements('.img3'),
    p: Util.getElements('.name3'),
    button: Util.getElements('.li-img-btn3'),
    title: 'title'
};

http.getrequest('get', 'http://localhost:3000/PageSubArea/HotPlayMovies.api?locationId=290')
    .then(function(res) {
        Util.setElements(res.movies, that.ele1);
        ele1.title_count.innerHTML = res.totalHotMovie - 1;

    });
http.getrequest('get', 'http://localhost:3000/Showtime/LocationMovies.api?locationId=290')
    .then(function(res) {
        Util.setElements(res.ms, that.ele2);
        ele2.title_count.innerHTML = res.ms.length;
        ele3.title_count.innerHTML = res.totalComingMovie;
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
var index = 1;
var shangying_left = Util.getElements('.shangying-left')[0];
var shangying_right = Util.getElements('.shangying-right')[0];
var shangying_div = Util.getElements('.shangying_div')[0];
Util.addEvent(shangying_left, 'click', function() {
    shangying_div.style.webkitTransform = 'translateX(0)';
});
Util.addEvent(shangying_right, 'click', function() {
    shangying_div.style.webkitTransform = 'translateX(-1200px)';
});

Util.addEvent(swiper_btn_left, 'click', move_right);
Util.addEvent(swiper_btn_right, 'click', move_left);
Util.addEvent(swiper_li, 'mouseenter', function(e) {
    clearInterval(timer1);
});
Util.addEvent(swiper_li, 'mouseleave', function(e) {
    timer1 = setInterval(function() {
        my_Animate(swiper_li, 'left', 1200);
        if (index > 4) {
            index = 1;
        } else {
            index++;
        }
        pointMove(swiper_point_span, index);
    }, 4000);
});

timer1 = setInterval(function() {
    my_Animate(swiper_li, 'left', 1200);
    if (index > 4) {
        index = 1;
    } else {
        index++;
    }
    pointMove(swiper_point_span, index);
}, 4000);



/**
 * 向右滚动  事件触发的方法
 */


function move_right() {
    my_Animate(swiper_li, 'right', 1200);
    clearInterval(timer1);
    if (index < 2) {
        index = 5;
    } else {
        index--;
    }
    pointMove(swiper_point_span, index);
}


/**
 * 向左滚动  事件触发的方法
 */


function move_left() {
    my_Animate(swiper_li, 'left', 1200);
    clearInterval(timer1);
    if (index > 4) {
        index = 1;
    } else {
        index++;
    }
    pointMove(swiper_point_span, index);
}

/**
 * 轮播图圆点样式显示
 * @param {*圆点元素[数组]} el 
 * @param {*当前图片滚动的索引} index 
 */



function pointMove(el, index) {
    for (var i = 0; i < el.length; i++) {
        if (el[i].className.split(' ').length > 1) {
            el[i].className = el[i].className.split(' ')[0];
        }
    }
    el[index - 1].className += ' swiper-point-hover';
}
/**
 * 轮播图 滚动  动画
 * @param {*轮播图  图片的父元素} ele 
 * @param {*滚动的方向} direction 
 * @param {*一次滚动的距离} transitionX 
 */



function my_Animate(ele, direction, transitionX) {

    var liftX = 0;
    var count = 0;
    if (direction == 'left') {
        leftX = ele.offsetLeft - 10;
    } else {
        leftX = ele.offsetLeft + 10;
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
    move();
}
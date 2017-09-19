var ele = Util.getElements('div-img1');
var img = Util.getElements('img1');
var p = Util.getElements('name1');
var button = Util.getElements('li-img-btn');
// var data1 = getData();

// console.log(img);
var that = this;
var getData = http.getHotrequest('get', 'http://localhost:3000/PageSubArea/HotPlayMovies.api?locationId=290')
            .then(function (res) {
                that.getElements(res.movies);
            });

// function getData () {
//     var xhr = new XMLHttpRequest();
//     xhr.open('get', 'http://localhost:3000/PageSubArea/HotPlayMovies.api?locationId=290');
//     xhr.onreadystatechange = function (res) {
//         if (xhr.readyState == 4) {
//             if(xhr.status == 200){
//                 var data = JSON.parse(res.target.response);
//                 getElements(data.movies);
//                 // console.log(data.movies);
//             }
//         }
//     }
//     xhr.send();
// }
function getElements (movies) {
    for (var i = 0 ; i < ele.length; i ++){
    img[i].src = (function (a) {
       return movies[a].img;
    })(i);
    p[i].innerHTML = (function (a) {
        return movies[a].titleCn;
    })(i);
}
}
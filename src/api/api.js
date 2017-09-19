var http = {
    baseUrl: 'http://localhost:3000/',
    getHotrequest: function (method, url) {
        return new Promise(function (resolve, reject) {
                        var xml = Util.creatXML();
                        xml.open(method, url);
                        xml.onreadystatechange = function (res, err) {
                            if (xml.readyState == 4) {
                                if (xml.status == 200) {
                                    var data = JSON.parse(res.target.response);
                                    // getElements(data.movies);
                                    // console.log(data.movies);
                                    resolve(data);
                                } else {
                                    reject(err);
                                }
                            }
                        }
                        xml.send();
                    });

    }
}
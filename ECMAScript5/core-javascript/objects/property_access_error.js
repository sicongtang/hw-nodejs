var book = {"main title": "Javascript",
            //"subtitle": "test_title",
            'sub-title': "Definitive guide",
            "for": "all audience",
            author: {
                firstname: "David",
                surname: "Flanagan"
             }
};

var len = book && book.subtitle && book.subtitle.length;
console.log(len);
var len2 = book.subtitle.length;
console.log(len2);

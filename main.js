$(document).ready(function () {

    var imgFrontElem = document.querySelector('.memory__front');
    var imgObject = [];

    function loadImages(i){
        i = i || 1;
        var img = new Image();
        img.onload = function(){
            loadImages(++i);
            imgObject.push(img);
        };
        img.src = 'img/image' + i + '.jpg';
        img.alt = 'image' + i;
    }

    loadImages();
    console.log('test1');
    console.log(Object.keys(imgObject).length);
    console.log(imgObject);
    console.log(Object.keys(imgObject).length);
    for (var i = 1; i <= imgObject.length; i++){
        console.log(i);
        $('#memoryElem').clone().appendTo('.memory__container');
        // imgFrontElem.appendChild(imgObject[i]);
    }
    console.log('test3');
});
$(document).ready(function () {

    const imgMax = 8;
    var imgFrontElem = document.querySelector('.memory__front');
    var $gameBoard = $('.memory__container');
    var $card = $('.memory__elem');
    var $cardExample = $('#memoryElem');
    var imgObject = [];
    var pairedCards = [];

    function loadImages(i){
        i = i || 1;
        var img = new Image();
        img.src = 'img/image' + i + '.jpg';
        img.alt = 'image' + i;
        imgObject.push(img);
        if (i === imgMax) {
            return imgObject;
        }else {
            loadImages(++i);
        }
        // img.onload = function(){
        //     loadImages(++i);
        // };
    }

    loadImages();

    for (var i = 0; i < imgObject.length; i++){

        var newCard = $cardExample.clone();
        // var newCard = $cardExample.clone().appendTo($gameBoard);


        // newCard.attr('id', 'memoryElem' + i);
        newCard.find('.memory__front').append(imgObject[i]);

        pairedCards.push([newCard, newCard]);

        for (var j = 0; j < 2; j++) {
            pairedCards[i][j].attr('id', 'memoryElem' + i + j);
            $gameBoard.append(pairedCards[i][j]);
            console.log(j);
        }
    }

    // for (var i = 0; i < imgObject.length; i++) {
    //     for (var j = 0; j < 2; j++) {
    //         pairedCards[i][j].attr('id', 'memoryElem' + i + j);
    //         $gameBoard.append(pairedCards[i][j]);
    //         console.log(j);
    //     }
    // }

    console.log(pairedCards);

    $gameBoard.find('.memory__elem').on('click', cardClickHandler);

    function cardClickHandler() {
        $(this).addClass('active');
    }
});
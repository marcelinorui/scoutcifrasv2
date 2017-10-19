var imgSrc = []; var imgDst = [];

function createCanvasAndOutput(image) { 
    var canvas = document.createElement('canvas'); 
    canvas.width = image.width + 10; 
    canvas.height = image.height + 10; 
    var ctx = canvas.getContext("2d"); 
    ctx.drawImage(image, 5, 5); 
    var imgData = canvas.toDataURL(); 
    imgDst.push(imgData); 
    delete canvas;
}

$('img').each(function () { 
    imgSrc.push($(this).attr('src')); 
});

imgSrc.forEach(function (item) { 
    var image = new Image(); 
    image.src = item; 
    image.onload = createCanvasAndOutput(image); 
});

window.open(encodeURI( "data:text/csv;charset=utf8," + imgDst.join("\n")));

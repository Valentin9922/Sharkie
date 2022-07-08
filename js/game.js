let canvas;
let charakter = new Image();
let ctx;

function init(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d'); //eine variable names standartmäßg img 
                                   //mit dem man coole funktionen ausführen kann
    charakter.src = '../img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/1.png'
    
    ctx.drawImage(character, 20, 20, 50, 150);
}
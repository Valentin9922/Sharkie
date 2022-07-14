class World{

    character = new Character();
    enemies = [
    new Chicken(),
    new Chicken(),
    new Chicken(),
];
    clouds =[ 
        new Clouds()
    ];

canvas;
ctx;

constructor(canvas){
    this.ctx = canvas.getContext('2d'); 
    this.canvas = canvas;
    this.draw();
}
 
    
    draw(){   
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.height, this.character.width);
        this.enemies.forEach(enemy => {
            //Zeile wird ausgeführt für jedes Element "new Pufferfish()"
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        })
            this.clouds.forEach(cloud => {
                //Zeile wird ausgeführt für jedes Element "new Pufferfish()"
            this.ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height);  

        })


        //draw wird immer wieder aufgerufen, je nach dem wie es deine grafikkarte zulässt
        let self = this;
         requestAnimationFrame(function(){ //weil this nicht mehr funktioniert muss man es als variable definieren
            self.draw();
         })
    }




}
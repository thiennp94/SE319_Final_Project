var gameState = "play";
var gameTime = 10;
var canvas;
var context;
var time;
var player;
var plat1;
var platArray = [];
var enemyArray = [];
var currPlat = -1;
var game;
var keys = {
    right: false,
    left: false,
    up: false,
    };
class NPC {
    isVisible;
    name;
    xPos;
    yPos;
    HP;
    constructor(name, x, y){
        this.isVisible = true;
        this.name = name;
        this.xPos = x;
        this.yPos = y;
    }
    draw(){
        context.fillStyle = "#FF00FF";
        context.fillRect(this.xPos, this.yPos, 50, 50);
    }
  
}
class Platform {
    xPos;
    yPos;
    width;
    height;
    constructor(x, y, w, h){
        this.xPos = x;
        this.yPos = y;
        this.width = w;
        this.height = h;
    }
    draw(){
        context.fillStyle = "#FF0000";
        context.fillRect(this.xPos, this.yPos, this.width, this.height);
    }
}
class PC {
    playerName;
    xPos;
    yPos;
    acc;
    inAir;
    xVol;
    yVol;
    constructor(name){
        this.playerName = name;
        this.xPos = 300;
        this.yPos = 100;
        this.acc = 0;
        this.inAir = false;
        this.xVol = 0;
        this.yVol = 0;
        if(name == "Marco"){

        }
        else if(name == "Polo"){

        }
        else{

        }
    }
    draw(){
        context.fillStyle = "#FFFF00";
        context.fillRect(this.xPos-50, this.yPos-50, 50, 50);
    }
   
}
class laser{
    isVisible;
    distance;
    xPos;
    yPos;
    xVol;
    constructor(dist){
        this.isVisible = false;
        this.distance = dist;
        this.xVol = 2;
    }
    draw(){
        if(this.isVisible){
            context.fillStyle = "#F0F0F0";
            context.fillRect(this.xPos-10, this.yPos, 10, 10);
        }
    }
}
function initLevel(){
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    document.getElementById("score").innerHTML = "Score: 0"
    player = new PC("Marco");
    player.draw();
    plat1 = new Platform(50, 50, 100, 20);
    var plat2 = new Platform(100, 100, 200, 50);
    platArray.push(plat1);
    platArray.push(plat2);
    var enemy1 = new NPC("", 400, 400);
    enemyArray.push(enemy1)
    console.log(enemy1.isVisible);
    enemy1.draw();
    context.fillStyle = "#FF0000";
    context.fillRect(plat1.xPos, plat1.yPos, plat1.width, plat1.height);
    context.fillRect(0, 450, canvas.width, 50);
    gameState = "play";
    drawCanvas();
    time = setInterval(function(){timer()}, 1000);
    game = setInterval(function(){gameLoop()}, 22);
    
} 
function gameLoop(){
    switch(gameState){
        case "end" :
            gameTime = 0;
            document.getElementById("timer").innerHTML = "timer: " + gameTime;
            window.clearInterval(time);
            window.clearInterval(game);
        case "play" :
            context.clearRect(0, 0, canvas.width, canvas.height);
            document.getElementById("timer").innerHTML = "timer: " + gameTime;
            document.getElementById("score").innerHTML = "Score: 0"
            if(player.inAir){
                player.yVol += 1;
            }
            else{
                player.yVol = 0;
            }
            if(keys.left) {
                player.xVol = -2.5;
            }
            if(keys.right) {
                player.xVol = 2.5;
            }
            // Updating the y and x coordinates of the player
            player.xPos += player.xVol;
            player.yPos += player.yVol;
           
            drawCanvas();
            if(gameTime == 0){
                gameState = "end";
            }
            for(i=0; i<platArray.length; i++)
            {
                if(platArray[i].xPos < player.xPos){
                    if(player.xPos < platArray[i].xPos + 50 + platArray[i].width){
                        if(platArray[i].yPos == player.yPos){
                            currPlat = i;   
                        }
                        else{
                            currPlat = -1;
                        }
                        console.log(currPlat);
                    }
                    else{
                        currPlat = -1;
                    }
                }
                else{
                    currPlat = -1;
                }
        
            }
            console.log(player.yPos);
            if(currPlat > -1 || player.yPos >= 450){
                player.inAir = false;
            }
            else{
                player.inAir = true;
            }
            
           
            
    }
    

}
function timer(){
    gameTime = gameTime-1;
}
function drawCanvas(){
    player.draw();
    for(i=0; i<platArray.length; i++){
        var plat = platArray[i];
        plat.draw();
    }
    for(i=0; i<enemyArray.length; i++){
        var enem = enemyArray[i];
        enem.draw();
    }
    context.fillStyle = "#FF0000";
    context.fillRect(0, 450, canvas.width, 50);
}
// This function will be called when a key on the keyboard is pressed
function keydown(e) {
    // 37 is the code for the left arrow key
    if(e.keyCode == 37) {
        keys.left = true;
    }

    // 39 is the code for the right arrow key
    if(e.keyCode == 39) {
        keys.right = true;
    }
    if(e.keyCode == 32){
        keys.up = true;
        player.yVol -= 1;
    }
}
// This function is called when the pressed key is released
function keyup(e) {
    if(e.keyCode == 37) {
        keys.left = false;
        player.xVol = 0;
    }
 
    if(e.keyCode == 39) {
        keys.right = false;
        player.xVol = 0;
    }
    if(e.keyCode == 32){
        keys.up = true;
        player.yVol = 0;
    }
} 
document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);
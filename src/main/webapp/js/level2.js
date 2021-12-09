 // The attributes of the player.
    var player = {
        x: 50,
        y: 600,
        x_v: 0,
        y_v: 0,
        jump : true,
        height: 20,
        width: 20
        };
    // The status of the arrow keys
    var keys = {
        right: false,
        left: false,
        up: false,
        };
    // The friction and gravity to show realistic movements    
    var gravity = 0.5;
    var friction = 0.7;
    // The number of platforms
    var num = 10;
    // The platforms
    var platforms = [];
    // Function to render the canvas
    function rendercanvas(){
        ctx.fillStyle = "#FFF000";
        ctx.fillRect(0, 0, 1280, 720);
    }
    // Function to render the player
    function renderplayer(){
        ctx.fillStyle = "#F08080";
        ctx.fillRect((player.x)-20, (player.y)-20, player.width, player.height);
        }
    // Function to create platforms
    function createplat(){
        for(i = 0; i < num; i++) {
            //Borders
			//Left Wall [0]
			platforms.push(
				{
                x: 0,
                y: 0,
                width: 20,
                height: 720
                }
            );
			//Right Wall [1]
			platforms.push(
                {
                x: 1260,
                y: 0,
                width: 20,
                height: 720
                }
            );
			//Floor [2]
			platforms.push(
                {
                x: 0,
                y: 600,
                width: 1280,
                height: 120
                }
            );
			//Ceiling [3]
			platforms.push(
                {
                x: 0,
                y: 0,
                width: 1280,
                height: 20
                }
            );
			
			//Platforms
			platforms.push(
                {
                x: 100,
                y: 475 + (30),
                width: 110,
                height: 15
                }
            );
			platforms.push(
                {
                x: 200,
                y: 400,
                width: 80,
                height: 15
                }
            );
			platforms.push(
                {
                x: 100,
                y: 325,
                width: 50,
                height: 15
                }
            );
			platforms.push(
                {
                x: 240,
                y: 250,
                width: 100,
                height: 15
                }
            );
			platforms.push(
                {
                x: 400,
                y: 200,
                width: 40,
                height: 40
                }
            );
			platforms.push(
                {
                x: 550,
                y: 400,
                width: 100,
                height: 40
                }
            );
			platforms.push(
                {
                x: 740,
                y: 400,
                width: 25,
                height: 15
                }
            );
			platforms.push(
                {
                x: 800,
                y: 300,
                width: 15,
                height: 15
                }
            );
			platforms.push(
                {
                x: 875,
                y: 250,
                width: 20,
                height: 20
                }
            );
			platforms.push(
                {
                x: 1000,
                y: 300,
                width: 200,
                height: 15
                }
            );
			platforms.push(
                {
                x: 1200,
                y: 210,
                width: 80,
                height: 15
                }
            );
			platforms.push(
                {
                x: 1100,
                y: 175,
                width: 50,
                height: 15
                }
            );
			platforms.push(
                {
                x: 900,
                y: 100,
                width: 175,
                height: 15
                }
            );
			
			//Goal
			platforms.push(
                {
                x: 675,
                y: 130,
                width: 20,
                height: 20
                }
            );
			//Goal Platform
			platforms.push(
                {
                x: 675,
                y: 150,
                width: 133,
                height: 15
                }
            );
        }
        }
		
	
    // Function to render platforms
    function renderplat(){
        ctx.fillStyle = "#45597E";
		//Borders
		ctx.fillRect(platforms[0].x, platforms[0].y, platforms[0].width, platforms[0]. height);
		ctx.fillRect(platforms[1].x, platforms[1].y, platforms[1].width, platforms[1]. height);
		ctx.fillRect(platforms[2].x, platforms[2].y, platforms[2].width, platforms[2]. height);
		ctx.fillRect(platforms[3].x, platforms[3].y, platforms[3].width, platforms[3]. height);
		//Platforms
		ctx.fillRect(platforms[4].x, platforms[4].y, platforms[4].width, platforms[4]. height);
		ctx.fillRect(platforms[5].x, platforms[5].y, platforms[5].width, platforms[5]. height);
		ctx.fillRect(platforms[6].x, platforms[6].y, platforms[6].width, platforms[6]. height);
		ctx.fillRect(platforms[7].x, platforms[7].y, platforms[7].width, platforms[7]. height);
		ctx.fillRect(platforms[8].x, platforms[8].y, platforms[8].width, platforms[8]. height);
		ctx.fillRect(platforms[9].x, platforms[9].y, platforms[9].width, platforms[9]. height);
		ctx.fillRect(platforms[10].x, platforms[10].y, platforms[10].width, platforms[10].height);
        ctx.fillRect(platforms[11].x, platforms[11].y, platforms[11].width, platforms[11].height);
		ctx.fillRect(platforms[12].x, platforms[12].y, platforms[12].width, platforms[12]. height);
		ctx.fillRect(platforms[13].x, platforms[13].y, platforms[13].width, platforms[13]. height);
		ctx.fillRect(platforms[14].x, platforms[14].y, platforms[14].width, platforms[14]. height);
		ctx.fillRect(platforms[15].x, platforms[15].y, platforms[15].width, platforms[15]. height);
		ctx.fillRect(platforms[16].x, platforms[16].y, platforms[16].width, platforms[16]. height);
		//Goal platform
		ctx.fillRect(platforms[18].x, platforms[18].y, platforms[18].width, platforms[18]. height);
    }
	
	//Render Spikes or death traps
	function renderDeath() {
		
	}
	
	//Render goal
	function renderGoal() {
		 ctx.fillStyle = "#1FFF00";
		 ctx.fillRect(platforms[17].x, platforms[17].y, platforms[17].width, platforms[17]. height);
	}
	
	
    // This function will be called when a key on the keyboard is pressed
    function keydown(e) {
        // 37 is the code for the left arrow key
        if(e.keyCode == 37) {
            keys.left = true;
        }
        // 37 is the code for the up arrow key
        if(e.keyCode == 38) {
            if(player.jump == false) {
                player.y_v = -10;
            }
        }
        // 39 is the code for the right arrow key
        if(e.keyCode == 39) {
            keys.right = true;
        }
    }
    // This function is called when the pressed key is released
    function keyup(e) {
        if(e.keyCode == 37) {
            keys.left = false;
        }
        if(e.keyCode == 38) {
            if(player.y_v < -2) {
            player.y_v = -3;
            }
        }
        if(e.keyCode == 39) {
            keys.right = false;
        }
    } 
    function loop() {
		var win = 0;
		var death = 0;
        // If the player is not jumping apply the effect of friction
        if(player.jump == false) {
            player.x_v *= friction;
        } else {
            // If the player is in the air then apply the effect of gravity
            player.y_v += gravity;
        }
        player.jump = true;
        // If the left key is pressed increase the relevant horizontal velocity
        if(keys.left) {
            player.x_v = -2.5;
			player.x += player.x_v;
        }
        if(keys.right) {
            player.x_v = 2.5;
			player.x += player.x_v;
        }
        // Updating the y and x coordinates of the player
        player.y += player.y_v;
        
        // A simple code that checks for collions with the platform
        let i = -1;
		//Borders
		//Left Wall
        if(player.x <= 40){
            player.x = 40;
        }
		//Right Wall
         if(player.x >= 1260){
            player.x = 1260;
        }
		//Floor
		if(platforms[2].x < player.x && player.x < platforms[2].x + platforms[2].width &&
        platforms[2].y  < player.y && player.y < platforms[2].y + platforms[2].height){
            i = 2;
        }
		//Ceiling
		if(player.y <= 20){
            player.y = 20;
        }
		
		//Platforms
		if(platforms[4].x < player.x && player.x < platforms[4].x + 20 + platforms[4].width &&
        platforms[4].y  < player.y && player.y < platforms[4].y + platforms[4].height){
            i = 4;
        }
		if(platforms[5].x < player.x && player.x < platforms[5].x + 20 + platforms[5].width &&
        platforms[5].y  < player.y && player.y < platforms[5].y + platforms[5].height){
            i = 5;
        } 
		if(platforms[6].x < player.x && player.x < platforms[6].x + 20 + platforms[6].width &&
        platforms[6].y  < player.y && player.y < platforms[6].y + platforms[6].height){
            i = 6;
        } 
		if(platforms[7].x < player.x && player.x < platforms[7].x + 20 + platforms[7].width &&
        platforms[7].y  < player.y && player.y < platforms[7].y + platforms[7].height){
            i = 7;
        } 
		if(platforms[8].x < player.x && player.x < platforms[8].x + 20 + platforms[8].width &&
        platforms[8].y  < player.y && player.y < platforms[8].y + platforms[8].height){
            i = 8;
        } 
		if(platforms[9].x < player.x && player.x < platforms[9].x + 20 + platforms[9].width &&
        platforms[9].y  < player.y && player.y < platforms[9].y + platforms[9].height){
            i = 9;
        } 
		if(platforms[10].x < player.x && player.x < platforms[10].x + 20 + platforms[10].width &&
        platforms[10].y  < player.y && player.y < platforms[10].y + platforms[10].height){
            i = 10;
        } 
		if(platforms[11].x < player.x && player.x < platforms[11].x + 20 + platforms[11].width &&
        platforms[11].y  < player.y && player.y < platforms[11].y + platforms[11].height){
            i = 11;
        } 
		if(platforms[12].x < player.x && player.x < platforms[12].x + 20 + platforms[12].width &&
        platforms[12].y  < player.y && player.y < platforms[12].y + platforms[12].height){
            i = 12;
        } 
		if(platforms[13].x < player.x && player.x < platforms[13].x + 20 + platforms[13].width &&
        platforms[13].y  < player.y && player.y < platforms[13].y + platforms[13].height){
            i = 13;
        } 
		if(platforms[14].x < player.x && player.x < platforms[14].x + 20 + platforms[14].width &&
        platforms[14].y  < player.y && player.y < platforms[14].y + platforms[14].height){
            i = 14;
        } 
		if(platforms[15].x < player.x && player.x < platforms[15].x + 20 + platforms[15].width &&
        platforms[15].y  < player.y && player.y < platforms[15].y + platforms[15].height){
            i = 15;
        } 
		if(platforms[16].x < player.x && player.x < platforms[16].x + 20 + platforms[16].width &&
        platforms[16].y  < player.y && player.y < platforms[16].y + platforms[16].height){
            i = 16;
        } 
		//Goal
		if(platforms[17].x < player.x && player.x < platforms[17].x + 20 + platforms[17].width &&
        platforms[17].y  < player.y && player.y < platforms[17].y + platforms[17].height){
            i = 17;
			win = 1;
        } 
		if(platforms[18].x < player.x && player.x < platforms[18].x + 20 + platforms[18].width &&
        platforms[18].y  < player.y && player.y < platforms[18].y + platforms[18].height){
            i = 18;
        } 
        if (i > -1){
            player.jump = false;
            player.y = platforms[i].y;    
        }
        // Rendering the canvas, the player and the platforms
        rendercanvas();
        renderplayer();
        renderplat();
		renderDeath();
		renderGoal();
		
		if(win == 1) {
			ctx.font = "160px Arial";
			ctx.fillStyle = "black";
			ctx.fillText("You Win!", 300, 300);
		}
		
		if(death == 1) {
			ctx.font = "160px Arial";
			ctx.fillStyle = "black";
			ctx.fillText("You Died!", 300, 300);
		}
    }
	
    canvas=document.getElementById("canvas");
    ctx=canvas.getContext("2d");
    ctx.canvas.height = 720;
    ctx.canvas.width = 1280;
    createplat();
	
    // Adding the event listeners
    document.addEventListener("keydown",keydown);
    document.addEventListener("keyup",keyup);
    setInterval(loop,22);
	win();

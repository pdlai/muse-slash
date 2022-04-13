const PLAYER_SCALE_RATIO = 2.4;
const RUN_DELAY = 3;
const ATTACK_DELAY = 0;
const FREEZE_DELAY = 12;
const JUMP_DELAY = 1;

class Player {
    constructor(canvas){
        this.canvas = canvas;
        this.velX = 0;
        this.velY = 0;

        this.x = -130;
        this.y = 440;

        this.runImage = new Image();
        this.runImage.src = "./assets/character/Run.png";
        this.hitImage = new Image();
        this.hitImage.src = "./assets/character/TakeHit.png";
        this.jumpImage = new Image();
        this.jumpImage.src = "./assets/character/Jump.png";
        this.idleImage = new Image();
        this.idleImage.src = "./assets/character/Idle.png";
        this.fallImage = new Image();
        this.fallImage.src = "./assets/character/Fall.png";
        this.deathImage = new Image();
        this.deathImage.src = "./assets/character/Death.png";
        this.atk1Image = new Image();
        this.atk1Image.src = "./assets/character/Attack1.png";
        this.atk2Image = new Image();
        this.atk2Image.src = "./assets/character/Attack2.png";

        this.width = 200;
        this.height = 200;
        this.frameWidth = 200;

        this.scaledWidth = this.width*PLAYER_SCALE_RATIO;
        this.sclaedHeight = this.height*PLAYER_SCALE_RATIO;

        this.frameCount = 0;
        this.numFrames = 0;

        this.state = "run";
        this.attackSwitch = false;
        this.inAir = false;
        this.inAirTimer = 0;
        this.attackFreeze = false;
        this.loopIndex = 0;

    }

    // going to have to set states for jumping and falling while state is inAir
    changeState(state, airAttack){
        this.frameCount = 0;
        this.loopIndex = 0;
        this.attackFreeze = false;

        if (airAttack === true){
            // this.state = "jump";
            this.switchAttack();
            this.inAir = true;
            this.inAirTimer = 0;
            this.velY = -50;
            return;
        }
        if(airAttack === false){
            this.velY = 50;
            if(this.inAir){
                // this.state = "fall";
                this.switchAttack();
                this.inAir = false;
                return;
            }
        }
        if(state === "attack"){
            this.switchAttack();
            return;
        }
        this.state = state;
    }

    switchAttack(){
        if(this.attackSwitch){
            this.state = "attack2";
            this.attackSwitch = false;
        } else {
            this.state = "attack1";
            this.attackSwitch = true;
        }
    }

    move(){
        this.y += this.velY;
        if(this.y < 235){
            this.velY = 0;
            this.y = 235;
        }
        if(this.y > 440){
            this.velY = 0;
            this.y = 440;
        }
        if(this.inAir){
            this.inAirTimer++;
            if(this.inAirTimer > 24){
                this.velY = 50;
                this.inAir = false;
            }
        }
    }

    draw(ctx){
        switch (this.state){
            case "off":
                return;
            case "run":
                this.drawRun(ctx);
                break;
            case "attack1":
                this.drawAttack1(ctx);
                break;
            case "attack2":
                this.drawAttack2(ctx);
                break;
            case "damaged":
                this.drawDamaged(ctx);
                break;
            case "jump":
                this.drawJump(ctx);
                break;
            case "fall":
                this.drawFall(ctx);
                break;
            case "death":
                this.drawDeath(ctx);
                break;
            case "idle":
                this.drawIdle(ctx);
                break;
        }
    }
}

Player.prototype.drawRun = function(ctx){
    this.numFrames = 8;
    ctx.drawImage(this.runImage, this.frameCount*this.frameWidth, 0, this.width, this.height,
                  this.x, this.y, this.width*PLAYER_SCALE_RATIO, this.height*PLAYER_SCALE_RATIO);
    
    this.loopIndex++;
    if (this.loopIndex > RUN_DELAY){
        this.frameCount++;
        if (this.frameCount >= this.numFrames) this.frameCount = 0;
        this.loopIndex = 0;
    }
}

Player.prototype.drawAttack1 = function(ctx){
    this.numFrames = 6;
    ctx.drawImage(this.atk1Image, this.frameCount*this.frameWidth, 0, this.width, this.height,
        this.x, this.y, this.width*PLAYER_SCALE_RATIO, this.height*PLAYER_SCALE_RATIO);

    this.loopIndex++;
    if(this.attackFreeze){
        if (this.loopIndex > FREEZE_DELAY){
            this.changeState("run");
        }
        return;
    }
    if (this.loopIndex > ATTACK_DELAY){
        this.frameCount++;
        if (this.frameCount >= this.numFrames){
            this.attackFreeze = true;
            this.frameCount -= 1;
        }
        this.loopIndex = 0;
    }
}

Player.prototype.drawAttack2 = function(ctx){
    this.numFrames = 6;
    ctx.drawImage(this.atk2Image, this.frameCount*this.frameWidth, 0, this.width, this.height,
        this.x, this.y, this.width*PLAYER_SCALE_RATIO, this.height*PLAYER_SCALE_RATIO);
    
    this.loopIndex++;
    if(this.attackFreeze){
        if (this.loopIndex > FREEZE_DELAY){
            this.changeState("run");
        }
        return;
    }
    if (this.loopIndex > ATTACK_DELAY){
        this.frameCount++;
        if (this.frameCount >= this.numFrames){
            this.attackFreeze = true;
            this.frameCount -= 1;
        }
        this.loopIndex = 0;
    }
}

Player.prototype.drawDamaged = function(ctx){
    this.numFrames = 4;
    ctx.drawImage(this.hitImage, this.frameCount*this.frameWidth, 0, this.width, this.height,
        this.x, this.y, this.width*PLAYER_SCALE_RATIO, this.height*PLAYER_SCALE_RATIO);
        
    this.loopIndex++;
    if (this.loopIndex > RUN_DELAY){
        this.frameCount++;
        if (this.frameCount >= this.numFrames) this.changeState("run");
        this.loopIndex = 0;
    }
}

Player.prototype.drawJump = function(ctx){
    this.numFrames = 2;
    ctx.drawImage(this.jumpImage, this.frameCount*this.frameWidth, 0, this.width, this.height,
        this.x, this.y, this.width*PLAYER_SCALE_RATIO, this.height*PLAYER_SCALE_RATIO);
        
    this.loopIndex++;
    if (this.loopIndex > JUMP_DELAY){
        this.frameCount++;
        if (this.frameCount >= this.numFrames) this.changeState("attack");
        this.loopIndex = 0;
    }
}

Player.prototype.drawFall = function(ctx){
    this.numFrames = 2;
    ctx.drawImage(this.fallImage, this.frameCount*this.frameWidth, 0, this.width, this.height,
        this.x, this.y, this.width*PLAYER_SCALE_RATIO, this.height*PLAYER_SCALE_RATIO);
        
    this.loopIndex++;
    if (this.loopIndex > JUMP_DELAY){
        this.frameCount++;
        if (this.frameCount >= this.numFrames) this.changeState("attack");
        this.loopIndex = 0;
    }
}

Player.prototype.drawDeath = function(ctx){
    this.numFrames = 6;
    ctx.drawImage(this.deathImage, this.frameCount*this.frameWidth, 0, this.width, this.height,
        this.x, this.y, this.width*PLAYER_SCALE_RATIO, this.height*PLAYER_SCALE_RATIO);
        
    this.loopIndex++;
    if (this.loopIndex > RUN_DELAY){
        this.frameCount++;
        if (this.frameCount >= this.numFrames) this.changeState("run");
        this.loopIndex = 0;
    }
}

Player.prototype.drawIdle = function(ctx){
    this.numFrames = 8;
    ctx.drawImage(this.idleImage, this.frameCount*this.frameWidth, 0, this.width, this.height,
        this.x, this.y, this.width*PLAYER_SCALE_RATIO, this.height*PLAYER_SCALE_RATIO);
    
    this.loopIndex++;
    if (this.loopIndex > RUN_DELAY){
        this.frameCount++;
        if (this.frameCount >= this.numFrames) this.changeState("run");
        this.loopIndex = 0;
    }
}

export default Player;
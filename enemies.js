class Skeleton {
	constructor(game,x,y) {
		Object.assign(this, { game,x,y });
		this.leftbound = this.x - 300;
		this.rightbound = this.x + 300;
		this.speed = 100;
		this.health = 50;
		this.facing = 1; // right = 1 left = -1
		this.state = 0; // walking = 0, attack = 1, dead = 2,
		this.game.Skeleton = this;
		this.deathtime = 0;
		this.attacktime = 0;
		this.spritesheet = [];
		this.animation = [];
		
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Skeletonwalking.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Skeletonattack.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Skeletondeath.png"));
		//spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
		this.animation.push(new Animator(this.spritesheet[0], 71, 0, 71, 75, 8, 0.1, 1, false, true));
		this.animation.push(new Animator(this.spritesheet[1], 0, 0, 95, 90, 4, 0.2, 1, false, false));
		this.animation.push(new Animator(this.spritesheet[2], 0, 0, 68, 75, 6, 0.2, 1, false, false));

		this.dead = false;
		this.updateBB();
	};

	updateBB() {
		this.lastBB = this.BB;
		this.lastSwordBB = this.SwordBB;
		if (this.state == 1 && this.attacktime >= 0.5) {
			if (this.facing == 1) {
				//this.SwordBB = new BoundingBox(this.x + 100, this.y, 122, 185);
			} else {
				//this.SwordBB = new BoundingBox(this.x - 123, this.y, 122, 185);
			}
			this.attacktime = 0;
		} else {
			//this.SwordBB = new BoundingBox(0, 0, 0, 0);
		}
		this.BB = new BoundingBox(this.x, this.y, 100, 185, "enemy", this);
	}

	update() {
		this.x += this.speed * this.game.clockTick;
		// walking path
		if (this.x > this.rightbound) {
			this.speed = -100;
			this.facing = -1;
			//this.state = 0;
		} else if (this.x < this.leftbound) {
			this.speed = 100;
			this.facing = 1;
			//this.state = 0;
		}
		//this.updateBB();
		 // collisions
		
		if (this.state == 1) {
			this.attacktime += this.game.clockTick;
			/*
			if (this.attacktime >= 1) {
				this.attacktime = 0;
			}
			*/
		}
		this.updateBB();
		
		var that = this;
		this.game.entities.forEach(entity => {
			/* if (entity.BB && that.SwordBB.collide(entity.BB)) {
				if (entity instanceof Knight && this.state == 1) {
					console.log("skeleton hurts the knight!")
				}
			} */
			if (entity.BB && that.BB.collide(entity.BB)) {
				if (entity instanceof Knight) {
					this.state = 1;
					this.speed = 0;
					console.log("skeleton has collided")
				}
			};
		});
		if (this.animation[this.state].isDone()) {
			var tempState = this.state;
			this.state = 0;
			this.animation[tempState].elapsedTime = 0;
			if (this.facing == 1) {
				this.speed = 100;
			} else {
				this.speed = -100;
			}
		};
		if (this.health <= 0) {
			this.speed = 0;
			this.state = 2;
			this.deathtime += this.game.clockTick;
			if (this.deathtime >= 1) {
				this.dead = true;
			}
		}
	};

	draw(ctx) {
		//hit box
		ctx.strokeStyle = "purple";
		if (this.facing == 1) {
			ctx.strokeRect((this.x + 100) - this.game.camera.x, this.y- this.game.camera.y, 122, 185);
		} else {
			ctx.strokeRect((this.x - 123) - this.game.camera.x, this.y- this.game.camera.y, 122, 185);
		}
		// hurt box
		ctx.strokeStyle = "green";
		ctx.strokeRect(this.x - this.game.camera.x, this.y- this.game.camera.y, 100, 185);
		// vision box
		ctx.strokeStyle = "red";
		ctx.strokeRect((this.leftbound) - this.game.camera.x, this.y- this.game.camera.y, 695, 185);
		
		if (this.facing == -1) {
			ctx.save()
			ctx.scale(-1, 1)
		} else if (this.facing == 1) {
			ctx.save()
			ctx.scale(1, 1)
		}
		var stateMod = 0;
		if (this.state == 0) stateMod = 0;
		else if (this.state == 1) stateMod = -48;
		else if (this.state == 2) stateMod = 0;
		else if (this.state == 3) stateMod = 0;
		if (this.dead == false) {
			if (this.facing == 1) {
				this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.x * this.facing)- this.game.camera.x, this.y + stateMod- this.game.camera.y, 2.5)
			} else {
				this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.x * this.facing - 95)- (this.game.camera.x * this.facing), this.y + stateMod- this.game.camera.y, 2.5)
			}

		} else {
			this.removeFromWorld = true;
			console.log("is ded");
		}

		ctx.restore();

		//ctx.drawImage(ASSET_MANAGER.getAsset("./Skeletonwalking.png"), 0, 0);
	};
}

class Cyclops {
	constructor(game, x, y) {
		Object.assign(this, {game, x, y})

		this.state = 0; // idle = 0, walking = 1, attack1 = 2, attack2 = 3, attack3 = 4, death = 5
		this.spritesheet = [];
		this.animation = [];

		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Cyclops_Idle.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Cyclops_Walking.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Cyclops_Attack1.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Cyclops_Attack2.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Cyclops_Attack3.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Cyclops_Death.png"));
		//spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
		this.animation.push(new Animator(this.spritesheet[0], 13, 9, 46, 80, 10, 0.5, 99, false, true));
		this.animation.push(new Animator(this.spritesheet[1], 8, 15, 50, 81, 6, 0.35, 103, false, true));
		this.animation.push(new Animator(this.spritesheet[2], 19, 13, 139, 81, 5, 0.2, 6, false, true));
		this.animation.push(new Animator(this.spritesheet[3], 16, 7, 104, 132, 5, 0.2, 41, false, true));
		this.animation.push(new Animator(this.spritesheet[4], 34, 20, 88, 175, 5, 0.2, 57, false, true));
		this.animation.push(new Animator(this.spritesheet[5], 39, 13, 58, 79, 7, 0.25, 89, false, true));

		this.updateBB();
	};

	updateBB() {

	};

	update() {

	};

	draw(ctx) {
		this.animation[this.state].drawFrame(this.game.clockTick, ctx, 100, 50, 3);
	};
}
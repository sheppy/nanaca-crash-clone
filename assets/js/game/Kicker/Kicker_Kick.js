AssetLoader.queueImage("../assets/img/kicker.png", "kicker");

var Kicker_Kick = Kicker.extend({

    constructor: function (width, height) {
        this.base(width, height);

        this.move = Move_Kick.create(width, height);
        this.img = Img.create("kicker", width, height);
    },

    draw: function (ctx, x, y) {
        ctx = ctx || GFX.ctx;
        x = x || this.x;
        y = y || this.y;

        x = x - Game.world.x;

        ctx.fillStyle = "#0000A0";

        this.base(ctx, x, y);
        this.move.draw(ctx, x, y);
        this.img.draw(ctx, x, y);
    }
}, {
    // Static functions
});
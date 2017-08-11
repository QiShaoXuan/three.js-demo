class QThree {
    constructor() {
    }
    //message设置的信息内容 /n 表示换行
    //{}设置字体参数
    //name：弹出窗口的name
    makeTextSprite(message,
                   {
                       fontface = "Arial",
                       fontsize = '100',
                       borderThickness = 1,
                       borderColor = {r: 0, g: 0, b: 0, a: 1.0},
                       backgroundColor = {r: 255, g: 255, b: 255, a: 1.0}
                   } = {},
                   name = 'modelText') {
        //处理信息
        var msg = message.split('/n');
        var height = msg.length * fontsize *1.5;
        //基础设置
        var canvas = document.createElement('canvas');
        canvas.width = 2048;
        canvas.height = 1024;
        var context = canvas.getContext('2d');
        context.font = "Bold " + fontsize + "px " + fontface;
        // get size data (height depends only on font size)
        var metrics = context.measureText(message);
        var textWidth = metrics.width;

        // background color
        context.fillStyle = "rgba(" + backgroundColor.r + "," + backgroundColor.g + ","
            + backgroundColor.b + "," + backgroundColor.a + ")";
        // border color
        context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + ","
            + borderColor.b + "," + borderColor.a + ")";

        context.lineWidth = borderThickness;
        roundRect(context, borderThickness / 2, borderThickness / 2, canvas.width - borderThickness, canvas.height - borderThickness, 6);
        // 1.4 is extra height factor for text below baseline: g,j,p,q.

        // text color
        context.fillStyle = "rgba(0, 0, 0, 1.0)";
        msg.forEach((v,i) => {
            var top = i * fontsize *1.5 + (fontsize + borderThickness);
            context.fillText(v, borderThickness+20, top);
        })

        // canvas contents will be used for a texture
        var texture = new THREE.Texture(canvas)
        texture.needsUpdate = true;

        var spriteMaterial = new THREE.SpriteMaterial(
            {map: texture});
        var sprite = new THREE.Sprite(spriteMaterial);
        sprite.name = name;
        sprite.scale.set(1000, 500, 1.0);
        return sprite;

        function setMessage(msg){



        }
        function roundRect(ctx, x, y, w, h, r) {
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.lineTo(x + w - r, y);
            ctx.quadraticCurveTo(x + w, y, x + w, y + r);
            ctx.lineTo(x + w, y + h - r);
            ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
            ctx.lineTo(x + r, y + h);
            ctx.quadraticCurveTo(x, y + h, x, y + h - r);
            ctx.lineTo(x, y + r);
            ctx.quadraticCurveTo(x, y, x + r, y);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    }


}

var QT = new QThree();

// function for drawing rounded rectangles
/* jshint esnext: true */

const PIXEL_PERFECT_CORRECTION = 0.5;

export default (options) => {
    options = options || {
        container: null,
        lineColor: '#F2F2F2',
        fillColor: '#FFFFFF',
        cellHeight: 25
    };

    const container = options.container;
    const canvas = options.container.find('.fakeCells');
    const context = canvas.getContext("2d");

    const { width, height } = document.getComputedStyle(container);
    canvas.style.width = width;
    canvas.style.height = height;

    // Erase
    context.clearRect(0, 0, +width, +height);

    // Background for fake cells
    context.fillStyle = options.fillColor;
    context.fillRect(0, 0, +width, +height);

    // Style for lines
    context.lineWidth = 1;
    context.strokeStyle = options.lineColor;

    // Draw lines for columns
    var thead_height = options.cellHeight + 1;

    // Draw lines for rows
    for (var i = 1 ; i < height / options.cellHeight; i++) {
        var y = thead_height + options.cellHeight * i - PIXEL_PERFECT_CORRECTION;
        drawCanvasLine(context, 0, y, +width, y);
    }

    function drawCanvasLine(ctx, ax, ay, bx, by) {
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.stroke();
    }
};

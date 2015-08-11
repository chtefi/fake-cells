const PIXEL_PERFECT_CORRECTION = 0.5;

export default function fakeCells(opts) {
  const options = { ...
    { container: null,
    lineColor: '#F2F2F2',
    fillColor: '#FFFFFF',
    cellHeight: 25
  }, ...opts};

  const canvas = options.container;
  const context = canvas.getContext('2d');

  const { width, height } = window.getComputedStyle(canvas);
  //canvas.style.width = width;
  //canvas.style.height = height;

  const w = parseInt(width, 10);
  const h = parseInt(height, 10);

  // Erase
  context.clearRect(0, 0, w, h);

  // Background for fake cells
  context.fillStyle = options.fillColor;
  context.fillRect(0, 0, w, h);

  // Style for lines
  context.lineWidth = 1;
  //context.strokeStyle = options.lineColor;

  // Draw lines for columns
  const theadHeight = options.cellHeight + 1;
  
  // Draw lines for rows
  for (let i = 1; i < h / options.cellHeight; i++) {
    const y = theadHeight + options.cellHeight * i;
    drawCanvasLine(context, 0, y, w, y);
  }

  function drawCanvasLine(ctx, ax, ay, bx, by) {
    ctx.beginPath();
    ctx.moveTo(ax, ay + PIXEL_PERFECT_CORRECTION);
    ctx.lineTo(bx, by + PIXEL_PERFECT_CORRECTION);
    ctx.stroke();
  }
}

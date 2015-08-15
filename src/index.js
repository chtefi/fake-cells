const PIXEL_PERFECT_CORRECTION = 0.5;

function drawCanvasLine(ctx, ax, ay, bx, by) {
  ctx.beginPath();
  ctx.moveTo(ax, ay + PIXEL_PERFECT_CORRECTION);
  ctx.lineTo(bx, by + PIXEL_PERFECT_CORRECTION);
  ctx.stroke();
}

export default function fakeCells(opts) {
  const options = { ...
    { containerId: null,
    tableId: null,
    lineColor: '#CCCCCC',
    fillColor: '#FFFFFF'
  }, ...opts};

  const container = document.querySelector(options.containerId);
  const table = document.querySelector(options.tableId);
  const firstRow = document.querySelector(options.tableId + ' tbody tr:first-child');
  const cells = document.querySelectorAll(options.tableId + ' thead tr:first-child th');

  const [ containerWidth, containerHeight ] = [ container.offsetWidth, container.offsetHeight ];
  const [ tableHeight ] = [ table.offsetHeight ];

  const canvas = document.createElement('canvas');
  const [ width, height ] = [ containerWidth, containerHeight - tableHeight ];
  canvas.width = width;
  canvas.height = height;
  container.appendChild(canvas);

  const context = canvas.getContext('2d');

  // Erase
  context.clearRect(0, 0, width, height);

  // Background for fake cells
  context.fillStyle = options.fillColor;
  context.fillRect(0, 0, width, height);

  // Style for lines
  context.lineWidth = 1;
  context.strokeStyle = options.lineColor;

  // Get width and height of the table cells
  const columnsWidth = [].slice.call(cells).map(cell => cell.offsetWidth);
  const cellHeight = firstRow.offsetHeight;

  // Draw columns line
  const totalWidth = columnsWidth.reduce((currentWidth, column) => {
    drawCanvasLine(context, currentWidth, 0, currentWidth, height);
    return currentWidth + column;
  }, 0);
  drawCanvasLine(context, totalWidth, 0, totalWidth, height);

  // Draw rows line
  const currentY = 0;
  const nbRows = Math.floor(height / cellHeight);
  for (let i = 1; i < nbRows + 1; i++) {
    const y = currentY + cellHeight * i;
    drawCanvasLine(context, 0, y, totalWidth, y);
  }
}

setDocDimensions(200, 200); // 200x200 mm

// Step 2: Create the outer circle of the basketball
const turtle = new bt.Turtle()
  .down()
  .arc(360, 50); // Draw a circle with radius 50mm

const outerCircle = turtle.lines();

// Step 3: Draw the stripes
const stripe1 = new bt.Turtle()
  .jump([0, -50])
  .down()
  .forward(100)
  .lines();

const stripe2 = new bt.Turtle()
  .jump([-50, 0])
  .down()
  .forward(100)
  .lines();

const stripe3 = new bt.Turtle()
  .jump([25, 25])
  .down()
  .left(135)
  .forward(70)
  .lines();

const stripe4 = new bt.Turtle()
  .jump([-25, 25])
  .down()
  .right(135)
  .forward(70)
  .lines();

// Combine all stripes into one array
const stripes = [stripe1, stripe2, stripe3, stripe4];

// Step 4: Apply perspective transformations
const perspectiveStripes = stripes.map(polyline => bt.scale(polyline, [1, 0.6], [0, 0])); // Flatten vertically
const perspectiveOuterCircle = bt.scale(outerCircle, [1, 0.6], [0, 0]);

// Step 5: Draw everything
drawLines(perspectiveOuterCircle, { stroke: 'black', width: 2 });
drawLines(perspectiveStripes, { stroke: 'black', width: 2 });

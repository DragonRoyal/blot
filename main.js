const { Turtle, scale, rotate, translate, originate, iteratePoints, rand, randInRange, join } = blotToolkit;

// Set up the document dimensions
setDocDimensions(125, 125);

// Function to create a flower stem
function createStem() {
  const stem = new Turtle();
  stem.down();
  for (let i = 0; i < 15; i++) {
    const angle = randInRange(-10, 10);
    const length = randInRange(5, 10);
    stem.forward(length);
    stem.left(angle);
  }
  return stem.lines();
}

// Function to create a single petal
function createPetal() {
  const petal = new Turtle();
  petal.down();
  petal.forward(10);
  petal.arc(60, 5);
  petal.forward(10);
  petal.arc(60, 5);
  return petal.lines();
}

// Function to generate petals around the flower center
function createPetals(numPetals) {
  const petals = [];
  for (let i = 0; i < numPetals; i++) {
    let petal = createPetal();
    const angle = (360 / numPetals) * i + randInRange(-10, 10);
    petal = rotate(petal, angle);
    petal = translate(petal, [0, 50]);
    petals.push(petal);
  }
  return petals;
}

// Create the stem
const stem = createStem();
const stemTransformed = translate(stem, [62.5, 0]);
drawLines(stemTransformed, { stroke: 'green', width: 2 });

// Create and draw the petals
const numPetals = 7;
const petals = createPetals(numPetals);
const allPetals = join([], ...petals);
drawLines(allPetals, { fill: 'red', stroke: 'red', width: 1 });

// Add a flower center
const center = new Turtle();
center.down();
center.forward(3);
center.arc(360, 3);
const centerLines = center.lines();
const centerTransformed = translate(centerLines, [62.5, 50]);
drawLines(centerTransformed, { fill: 'yellow', stroke: 'yellow', width: 1 });

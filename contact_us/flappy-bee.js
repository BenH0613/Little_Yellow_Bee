const canvas = document.getElementById("flappyBee");
const ctx = canvas.getContext("2d");

const beeImg = new Image();
beeImg.src = "../bee-logo.png";

const pipeImg = new Image();
pipeImg.src = "pipe.png"; // Make sure 'pipe.png' is in /contact_us/

let velocity = 0;
let gravity = 0.5;
let isGameOver = false;

const bee = {
  x: 50,
  y: 150,
  width: 40,
  height: 40
};

const pipes = [];
const pipeWidth = 50;
const pipeGap = 120;
let frame = 0;
let score = 0;

function drawBee() {
  ctx.drawImage(beeImg, bee.x, bee.y, bee.width, bee.height);
}

function drawPipe(pipe) {
  // Top pipe flipped
  ctx.save();
  ctx.translate(pipe.x, pipe.top);
  ctx.scale(1, -1);
  ctx.drawImage(pipeImg, 0, 0, pipeWidth, canvas.height);
  ctx.restore();

  // Bottom pipe
  ctx.drawImage(pipeImg, pipe.x, pipe.bottom, pipeWidth, canvas.height);
}

function resetGame() {
  bee.y = 150;
  velocity = 0;
  pipes.length = 0;
  frame = 0;
  score = 0;
  isGameOver = false;
  requestAnimationFrame(updateGame);
}

function updateGame() {
  if (isGameOver) {
    ctx.font = "24px Arial";
    ctx.fillStyle = "#d32f2f";
    ctx.textAlign = "center";
    ctx.fillText("Game Over! Click to Restart", canvas.width / 2, canvas.height / 2);
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  velocity += gravity;
  bee.y += velocity;

  if (bee.y + bee.height > canvas.height || bee.y < 0) {
    isGameOver = true;
  }

  if (frame % 90 === 0) {
    const topHeight = Math.random() * 200 + 50;
    pipes.push({
      x: canvas.width,
      top: topHeight,
      bottom: topHeight + pipeGap
    });
  }

  pipes.forEach(pipe => {
    pipe.x -= 2;
    drawPipe(pipe);

    // Collision check
    if (
      bee.x + bee.width > pipe.x &&
      bee.x < pipe.x + pipeWidth &&
      (bee.y < pipe.top || bee.y + bee.height > pipe.bottom)
    ) {
      isGameOver = true;
    }

    if (pipe.x + pipeWidth === bee.x) {
      score++;
    }
  });

  drawBee();

  ctx.font = "20px Arial";
  ctx.fillStyle = "#333";
  ctx.fillText("Score: " + score, 10, 30);

  frame++;
  requestAnimationFrame(updateGame);
}

document.addEventListener("keydown", e => {
  if (e.code === "Space") {
    velocity = -7;
  }
});

canvas.addEventListener("click", () => {
  if (isGameOver) {
    resetGame();
  } else {
    velocity = -7;
  }
});

beeImg.onload = () => {
  updateGame();
};

const canvas = document.getElementById("flappyBee");
const ctx = canvas.getContext("2d");

// Game variables
let beeY = 150;
let velocity = 0;
let gravity = 0.5;
let isGameOver = false;

const bee = {
  x: 50,
  y: beeY,
  radius: 15,
};

const pipes = [];
const pipeWidth = 50;
const pipeGap = 120;
let frame = 0;
let score = 0;

function drawBee() {
  ctx.beginPath();
  ctx.arc(bee.x, bee.y, bee.radius, 0, Math.PI * 2);
  ctx.fillStyle = "#fdd835";
  ctx.fill();
  ctx.strokeStyle = "#000";
  ctx.stroke();
  ctx.closePath();

  // Stripes
  ctx.beginPath();
  ctx.moveTo(bee.x - 5, bee.y - 10);
  ctx.lineTo(bee.x - 5, bee.y + 10);
  ctx.moveTo(bee.x + 5, bee.y - 10);
  ctx.lineTo(bee.x + 5, bee.y + 10);
  ctx.stroke();
}

function drawPipe(pipe) {
  ctx.fillStyle = "#4caf50";
  ctx.fillRect(pipe.x, 0, pipeWidth, pipe.top);
  ctx.fillRect(pipe.x, pipe.bottom, pipeWidth, canvas.height - pipe.bottom);
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

  if (bee.y + bee.radius > canvas.height || bee.y - bee.radius < 0) {
    isGameOver = true;
  }

  if (frame % 90 === 0) {
    const topHeight = Math.random() * 200 + 50;
    pipes.push({
      x: canvas.width,
      top: topHeight,
      bottom: topHeight + pipeGap,
    });
  }

  pipes.forEach((pipe, index) => {
    pipe.x -= 2;
    drawPipe(pipe);

    if (
      bee.x + bee.radius > pipe.x &&
      bee.x - bee.radius < pipe.x + pipeWidth &&
      (bee.y - bee.radius < pipe.top || bee.y + bee.radius > pipe.bottom)
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

updateGame();

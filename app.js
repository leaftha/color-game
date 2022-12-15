const grids = document.querySelector(".grids");
const grid = document.querySelectorAll(".grid");
const btn = document.querySelector(".btn-start");
const Level = document.querySelector(".level");
let randomR;
let randomG;
let randomB;
let randomRGB;
let randomtile;
let randomtileRGB;
let num;
let count = 0;
let currentLevel;

function startGame() {
  if (count < 10) {
    num = 100;
    currentLevel = 1;
  } else if (count < 20) {
    num = 50;
    currentLevel = 2;
  } else if (count < 30) {
    num = 25;
    currentLevel = 3;
  } else if (count < 40) {
    num = 10;
    currentLevel = 4;
  } else if (count < 50) {
    num = 5;
    currentLevel = "max";
  }
  Level.innerHTML = `<p class="level started">Level : ${currentLevel}</p>`;
  randomR = Math.floor(Math.random() * 255);
  randomG = Math.floor(Math.random() * 255);
  randomB = Math.floor(Math.random() * 255);
  randomRGB = `rgb(${randomR}, ${randomG}, ${randomB})`;
  randomtile = Math.floor(Math.random() * 8);
  randomtileRGB = Math.floor(Math.random() * 2);
  grid.forEach((grids) => {
    grids.style.background = randomRGB;
    if (randomtileRGB === 0) {
      if (randomR + num > 255) {
        grid[randomtile].style.background = `rgb(
          ${randomR - num},
          ${randomG},
          ${randomB})`;
      } else {
        grid[randomtile].style.background = `rgb(
          ${randomR + num},
          ${randomG},
          ${randomB})`;
      }
    } else if (randomtileRGB === 1) {
      if (randomG + num > 255) {
        grid[randomtile].style.background = `rgb(
          ${randomR},
          ${randomG - num},
          ${randomB})`;
      } else {
        grid[randomtile].style.background = `rgb(
          ${randomR},
          ${randomG + num},
          ${randomB})`;
      }
    } else if (randomtileRGB === 2) {
      if (randomB + num > 255) {
        grid[randomtile].style.background = `rgb(
          ${randomR},
          ${randomG},
          ${randomB - num})`;
      } else {
        grid[randomtile].style.background = `rgb(
          ${randomR},
          ${randomG},
          ${randomB + num})`;
      }
    }
  });
  //   for (let color in grid) {
  //     grid[color].style.background = randomRGB;
  //     if (randomtileRGB === 0) {
  //       grid[randomtile].style.background = `rgb(
  //         ${randomR + add},
  //         ${randomG},
  //         ${randomB})`;
  //     } else if (randomtileRGB === 1) {
  //       grid[randomtile].style.background = `rgb(
  //         ${randomR},
  //         ${randomG + add},
  //         ${randomB})`;
  //     } else if (randomtileRGB === 2) {
  //       grid[randomtile].style.background = `rgb(
  //         ${randomR},
  //         ${randomG},
  //         ${randomB + add})`;
  //     }
  //   }
}

function clickHandler(e) {
  const tile = e.target.style.background;
  if (tile !== randomRGB) {
    startGame();
    count++;
  }
}

btn.addEventListener("click", () => {
  btn.classList.add("started");
  Level.classList.add("started");
  startGame();
});

grids.addEventListener("click", clickHandler);

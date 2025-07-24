//starter page
window.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    
     enableFighterControls();
  }
});

// Fighter 1 (Left Side)
var fighter1 = document.getElementById("fighter1");
var speed1 = 50;
var flag1 = false;
var flag2 = false;

function moveFighter1(order) {
  if (order === "move") {
    speed1 += 5;
    fighter1.style.left = speed1 + "px";
    if (!flag1) {
      flag2 = false;
      fighter1.src = "https://www.fightersgeneration.com/characters4/tung-super3.gif";
    }
    flag1 = true;
  } else if (order === "back") {
    flag1 = false;
    speed1 -= 5;
    fighter1.style.left = speed1 + "px";
    if (!flag2) {
      fighter1.src = "https://www.fightersgeneration.com/news2023/char3/tung-fu-rue-realbout2-super.gif";
    }
    flag2 = true;
  }
}

window.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    moveFighter1("move");
  } else if (event.key === "ArrowLeft") {
    moveFighter1("back");
  }
});

window.addEventListener("keyup", function (event) {
  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
    fighter1.src = "https://www.fightersgeneration.com/news2023/char3/tung-fu-rue-realbout2-muscle.gif";
  }
});


// Fighter 2 (Right Side)
var fighter2 = document.getElementById("fighter2");
var speed2 = 50;
var position2 = 50;
var flag3 = false;
var flag4 = false;

function moveFighter2(order) {
  if (order === "move") {
    position2 += 5;
    fighter2.style.right = position2 + "px";
    if (!flag3) {
      flag4 = false;
      fighter2.src = "https://fightersgeneration.com/characters2/omega-special.gif";
    }
    flag3 = true;
  } else if (order === "back") {
    flag3 = false;
    position2 -= 5;
    fighter2.style.right = position2 + "px";
    if (!flag4) {
      fighter2.src = "https://fightersgeneration.com/characters2/omega-crouchattacks.gif";
    }
    flag4 = true;
  }
}

window.addEventListener("keydown", function (event) {
  if (event.key === "d" || event.key === "D") {
    moveFighter2("move");
  } else if (event.key === "a" || event.key === "A") {
    moveFighter2("back");
  }
});

window.addEventListener("keyup", function (event) {
  if (event.key === "a" || event.key === "A" || event.key === "d" || event.key === "D") {
    fighter2.src = "https://fightersgeneration.com/characters2/omega-wins2.gif";
  }
});

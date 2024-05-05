function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  function getRandomStyles() {
    var r = getRandomInt(1, 255);
    var g = getRandomInt(1, 255);
    var b = getRandomInt(1, 255);
    var mt = getRandomInt(1, 200);
    var ml = getRandomInt(1, 50);
    var dur = getRandomInt(1, 5) + 5;
    return `
    background-color: rgba(${r},${g},${b},0.7);
    color: rgba(${r},${g},${b},0.7); 
    box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in infinite;
    z-index: 1;
    `;
  }

const balloonContainer = document.getElementById("balloon-container");
function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.appendChild(balloon); // Sử dụng appendChild() thay cho append()
  }
}

createBalloons(40);


function removeBalloons() {
  balloonContainer.style.opacity = 0;
  setTimeout(() => {
    balloonContainer.remove();
  }, 500);
}

const mySound = document.getElementById("mySound");
const playButton = document.getElementById("playButton");
playButton.addEventListener("click", () => {
  mySound.play();
  mySound.muted=false;
});


const cakeButton = document.getElementById("cakeButton");
cakeButton.addEventListener("click", function() {
  // Chuyển hướng đến trang cake.html
  window.location.href = "cake.html";
});

function showAlertandMusic() {
  const myMusic = document.getElementById("mySound2");
  myMusic.play();
  myMusic.muted = false;
    alert(
      "Dạ thì tự nhiên cái em nghĩ ra cái ý tưởng là làm cái web này để như là một món quà nho nhỏ mừng sinh nhật cô.\nNhìn chung là sản phẩm cũng có phần khác với ý tưởng ban đầu của em với lại có vài chỗ chưa được chỉn chu, hài lòng lắm. Nhưng mà dù sao thì em cũng mong là cô sẽ vui.\nChúc cô sẽ luôn có thật nhiều nhiều sức khỏe để dìu dắt thêm nhiều thế hệ học trò (mong là không lì như tụi em lúc trước) và có thêm nhiều ô tô với Iphone đời mới nữa nha cô.\nHehe."
    )
}














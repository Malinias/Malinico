document.addEventListener('keydown', jump);

function jump(event) {
  if (event.keyCode === 32) { // Spacebar key
    const dino = document.getElementById('dino');
    dino.classList.add('jump');

    setTimeout(() => {
      dino.classList.remove('jump');
    }, 500);
  }
}

setInterval(() => {
  const obstacle = document.getElementById('obstacle');
  const dino = document.getElementById('dino');

  const obstaclePosition = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));
  const dinoPosition = parseInt(window.getComputedStyle(dino).getPropertyValue('left'));

  if (dinoPosition < obstaclePosition + 20 && dinoPosition + 50 > obstaclePosition) {
    alert('Game Over!');
  }
}, 10);

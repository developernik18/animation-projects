function createConfetti() {
  const confettiContainer = document.getElementById('confetti-container');

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.setProperty('--dx', `${Math.random() * window.innerWidth}px`);
    confetti.style.setProperty('--dy', `${Math.random() * window.innerHeight}px`);
    confetti.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
    confettiContainer.appendChild(confetti);
  }
}

function startConfetti() {
  createConfetti();
}

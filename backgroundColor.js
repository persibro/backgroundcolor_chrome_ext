function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function fadeOutInfoBox() {
  const infoBox = document.getElementById('infoBox');
  infoBox.classList.add('fade-out');
  setTimeout(() => {
    infoBox.style.display = 'none';
  }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
  });

  setTimeout(() => {
    fadeOutInfoBox();
  }, 10000);
});
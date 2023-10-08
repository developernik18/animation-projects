const targetElement = document.getElementById('target');
const tooltip = document.getElementById('tooltip');

targetElement.addEventListener('mouseover', () => {
  tooltip.classList.add('show');
});

targetElement.addEventListener('mouseout', () => {
  tooltip.classList.remove('show');
});

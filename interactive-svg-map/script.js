const regions = document.querySelectorAll('path');

regions.forEach(region => {
  region.addEventListener('mouseenter', () => {
    region.style.fill = '#00ff00'; // Color on hover
  });

  region.addEventListener('mouseleave', () => {
    region.style.fill = '#ccc'; // Default color on mouse leave
  });
});

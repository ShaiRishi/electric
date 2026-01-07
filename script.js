document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
  const carousel = wrapper.querySelector('.carousel');
  const leftBtn = wrapper.querySelector('.carousel-btn.left');
  const rightBtn = wrapper.querySelector('.carousel-btn.right');

  const scrollAmount = 280;

  rightBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  leftBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
});


const checkboxWrapper = document.querySelector(".checkbox-wrapper");

checkboxWrapper.addEventListener("mouseenter", () => {
  // Get the maximum X and Y values based on the container size and window size
  const maxX = window.innerWidth - checkboxWrapper.offsetWidth;
  const maxY = window.innerHeight - checkboxWrapper.offsetHeight;

  // Generate random X and Y values for translation
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // Apply the random translation for both X and Y directions
  checkboxWrapper.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

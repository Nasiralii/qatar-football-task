document.addEventListener("DOMContentLoaded", function () {
  // Get references to carousel elements
  const track = document.getElementById("match-carousel-track");
  const cards = document.querySelectorAll(".match-card");
  const matchPreviousButton = document.getElementById("match-prev-btn");
  const matchNextButton = document.getElementById("match-next-btn");

  // Set initial state
  let currentIndex = 0;
  let cardWidth = 0;
  let cardsPerView = 1;

  // Function to update card width and cards per view based on screen size
  function updateCardWidth() {
    if (window.innerWidth >= 1024) {
      // Large screens: show 4 cards
      cardsPerView = 4;
    } else if (window.innerWidth >= 768) {
      // Medium screens: show 2 cards
      cardsPerView = 2;
    } else {
      // Small screens: show 1 card
      cardsPerView = 1;
    }

    // Set card width based on container width and cards per view
    const containerWidth = track.parentElement.clientWidth;
    cardWidth = containerWidth / cardsPerView;

    // Update card widths
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.minWidth = `${cardWidth}px`;
    }

    // Reset position when screen size changes
    goToCard(currentIndex);
  }

  // Function to move carousel to a specific card
  function goToCard(index) {
    // Ensure index is within bounds
    if (index < 0) {
      index = 0;
    } else if (index > cards.length - cardsPerView) {
      index = cards.length - cardsPerView;
    }

    currentIndex = index;
    const offset = -1 * currentIndex * cardWidth;
    track.style.transform = `translateX(${offset}px)`;

    // Update button states
    updateButtonStates();
  }

  // Function to update button states (disabled/enabled)
  function updateButtonStates() {
    matchPreviousButton.disabled = currentIndex === 0;
    matchPreviousButton.style.opacity = currentIndex === 0 ? 0.5 : 1;

    matchNextButton.disabled = currentIndex >= cards.length - cardsPerView;
    matchNextButton.style.opacity =
      currentIndex >= cards.length - cardsPerView ? 0.5 : 1;
  }

  // Event listeners for buttons
  matchPreviousButton.addEventListener("click", function () {
    goToCard(currentIndex - 1);
  });

  matchNextButton.addEventListener("click", function () {
    goToCard(currentIndex + 1);
  });

  // Initialize carousel on load and resize
  window.addEventListener("resize", updateCardWidth);
  updateCardWidth();
});

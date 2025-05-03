document.addEventListener("DOMContentLoaded", function () {
  // Get references to carousel elements
  const track = document.getElementById("twitter-carousel-track");
  const cards = document.querySelectorAll(".twitter-news-card");
  const prevButton = document.getElementById("twitter-prev-btn");
  const nextButton = document.getElementById("twitter-next-btn");

  // Set initial state
  let currentIndex = 0;
  let cardWidth = 0;
  let cardsPerView = 1;

  // Function to update card width and cards per view based on screen size
  function updateCardWidth() {
    if (window.innerWidth >= 1024) {
      // Large screens: show 4 cards (changed from 3 to 4 as requested)
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
    cards.forEach((card) => {
      card.style.minWidth = `${cardWidth}px`;
    });

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
    prevButton.disabled = currentIndex === 0;
    prevButton.style.opacity = currentIndex === 0 ? 0.5 : 1;

    nextButton.disabled = currentIndex >= cards.length - cardsPerView;
    nextButton.style.opacity =
      currentIndex >= cards.length - cardsPerView ? 0.5 : 1;
  }

  // Event listeners for buttons
  prevButton.addEventListener("click", function () {
    goToCard(currentIndex - 1);
  });

  nextButton.addEventListener("click", function () {
    goToCard(currentIndex + 1);
  });

  // Initialize carousel on load and resize
  window.addEventListener("resize", updateCardWidth);
  updateCardWidth();
});

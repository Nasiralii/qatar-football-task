// News Carousel Functionality
document.addEventListener("DOMContentLoaded", function () {
  // Get references to carousel elements
  const track = document.getElementById("carousel-track");
  const cards = document.querySelectorAll(".news-card");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  // Set initial state
  let currentIndex = 0;
  let cardWidth = 0;
  let cardsPerView = 1;

  // Function to update card width and cards per view based on screen size
  function updateCardWidth() {
    if (window.innerWidth >= 1024) {
      // Large screens: show 3 cards
      cardsPerView = 3;
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

document.addEventListener("DOMContentLoaded", function () {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tables = {
    fifa: document.getElementById("fifa-table"),
    asian: document.getElementById("asian-table"),
    ooredoo: document.getElementById("ooredoo-table"),
  };

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all tabs
      tabBtns.forEach((b) => {
        b.classList.remove("bg-indigo-700", "text-white");
        b.classList.add("bg-gray-200", "text-gray-700");
      });

      // Add active class to clicked tab
      this.classList.add("bg-indigo-700", "text-white");
      this.classList.remove("bg-gray-200", "text-gray-700");

      // Hide all tables
      for (const table in tables) {
        tables[table].classList.add("hidden");
      }

      // Show the selected table
      const tableId = this.getAttribute("data-tab");
      tables[tableId].classList.remove("hidden");
    });
  });
});

// tab first section national team

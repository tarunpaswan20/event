document.addEventListener("DOMContentLoaded", () => {
  const dropdownButton = document.getElementById("dropdown-button");
  const navbarLinks = document.querySelector(".custom-navbar-links");
  const homeButton = document.getElementById("home-button");
  const whatwedobutton = document.getElementById("whatwedobutton");
  const about = document.getElementById("About");

  // Toggle dropdown menu on button click
  dropdownButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("show");
  });

  // Redirect to the home page when Home button is clicked
  homeButton.addEventListener("click", () => {
    window.location.href = "index.html"; // Assuming "index.html" is your home page file
  });

  // Redirect to the "What We Do" page when button is clicked
  whatwedobutton.addEventListener("click", () => {
    window.location.href = "whatwedo.html"; // Assuming "whatwedo.html" is your "What We Do" page
  });

  // Redirect to the "About Us" page when button is clicked
  about.addEventListener("click", () => {
    window.location.href = "about.html"; // Assuming "about.html" is your "About Us" page
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Function to handle the counting animation
  const animateCount = (counterElement) => {
    const target = parseInt(counterElement.getAttribute("data-target"), 10);
    const duration = 1500; // Animation duration in ms
    const increment = target / (duration / 20); // Value to increase per step

    let current = 0;

    const countUp = () => {
      current += increment;
      if (current < target) {
        counterElement.textContent = Math.floor(current);
        requestAnimationFrame(countUp); // Smoother animation
      } else {
        counterElement.textContent = target; // Ensure it ends exactly at the target
      }
    };

    countUp();
  };

  // Preload the final numbers initially and add hover functionality
  document.querySelectorAll(".count-card").forEach((card) => {
    const counterElement = card.querySelector(".counter");
    const target = counterElement.getAttribute("data-target");

    // Display the final value initially
    counterElement.textContent = target;

    // On hover, trigger the counting animation
    card.addEventListener("mouseenter", () => {
      animateCount(counterElement);
    });
  });
});

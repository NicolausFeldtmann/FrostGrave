function createSnowfall() {
  // Create a new image element for the snowflake
  const snowflake = document.createElement('img');
  snowflake.src = 'img/snow.png';
  snowflake.className = 'snowflake'; // Add a class for styling

  // Set random initial position
  snowflake.style.position = 'absolute';
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.top = '-50px'; // Start above the viewable area

  document.body.appendChild(snowflake);

  // Animate falling
  snowflake.animate([
      { transform: 'translateY(0)' },
      { transform: `translateY(${window.innerHeight + 50}px)` }  // Ends below the viewable area
  ], {
      duration: Math.random() * 3000 + 2000, // Random speed
  });

  // Remove the snowflake after animation completes
  setTimeout(() => document.body.removeChild(snowflake), 5000);
}

// Function to start the snowfall effect
function startSnowfall() {
  // Create snowflakes at an interval
  setInterval(createSnowfall, 200);
}

// Call this function when the page loads or when you want to start the effect
window.onload = function() {
  startSnowfall();
};
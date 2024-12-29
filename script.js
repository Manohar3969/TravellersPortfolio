  // Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  darkModeToggle.textContent = body.classList.contains('dark-mode') ? '🌙' : '☀️';
});

// Smooth Scroll Effect for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Form Submission Alert
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
});


//  New JS Code added for portfolio - Check and clear unnecessary code
const destinations = [
    {
      image: "midground.jpg",
      title: "Mount Everest",
      description: "Hiked the tallest peak in the world! A once-in-a-lifetime adventure."
    },
    {
      image: "midground.jpg",
      title: "Paris",
      description: "Explored the City of Lights, from the Eiffel Tower to Montmartre."
    },
    {
      image: "midground.jpg",
      title: "Tokyo",
      description: "From the bustling streets to serene temples, Tokyo is an unforgettable city."
    },
    {
        image: "midground.jpg",
        title: "Mount Everest",
        description: "Hiked the tallest peak in the world! A once-in-a-lifetime adventure."
      },
      {
        image: "midground.jpg",
        title: "Paris",
        description: "Explored the City of Lights, from the Eiffel Tower to Montmartre."
      },
      {
        image: "midground.jpg",
        title: "Tokyo",
        description: "From the bustling streets to serene temples, Tokyo is an unforgettable city."
      },
    // Add new destinations as needed
  ];
  
  const portfolioGrid = document.querySelector('.portfolio-grid');
  
  destinations.forEach(destination => {
    const item = document.createElement('div');
    item.classList.add('destination-item');
    
    item.innerHTML = `
      <img src="${destination.image}" alt="${destination.title}">
      <div class="destination-info">
        <h3>${destination.title}</h3>
        <p>${destination.description}</p>
      </div>
    `;
    
    portfolioGrid.appendChild(item);
  });
  
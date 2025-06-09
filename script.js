// Hide scroll bar when in menu
document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('menu-toggle');
    const body = document.body;
    checkbox.addEventListener('change', function() {
        if (this.checked) {
          body.classList.add('blur-active');
        } else {
          body.classList.remove('blur-active');
        }
      });
});

// Button to service page
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('get-started').addEventListener('click', function() {
        const serviceSection = document.querySelector('.service');
        if (serviceSection) {
            serviceSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('Service section not found');
        }
    });
});

// All links to their page
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('service').addEventListener('click', function() {
        const serviceSection = document.querySelector('.service');
        if (serviceSection) {
            serviceSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('Service section not found');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('work').addEventListener('click', function() {
        const serviceSection = document.querySelector('.work');
        if (serviceSection) {
            serviceSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('Service section not found');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('about').addEventListener('click', function() {
        const serviceSection = document.querySelector('.about');
        if (serviceSection) {
            serviceSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('Service section not found');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact').addEventListener('click', function() {
        const serviceSection = document.querySelector('.contact');
        if (serviceSection) {
            serviceSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('Service section not found');
        }
    });
});

// Animations
document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.service-item');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(item => {
  observer.observe(item);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.portfolio-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.1 });
  items.forEach(item => {
  observer.observe(item);
  });
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}
function onScroll() {
  const paragraph = document.getElementById('about-paragraph');
  if (paragraph.classList.contains('visible')) {
    window.removeEventListener('scroll', onScroll);
    return;
  }
  if (isInViewport(paragraph)) {
    paragraph.classList.add('visible');
    window.removeEventListener('scroll', onScroll);
  }
}
window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

document.addEventListener('scroll', function() {
    const contactDetails = document.querySelector('.contact-details');
    const rect = contactDetails.getBoundingClientRect();
    
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        contactDetails.classList.add('visible'); // Add class when in view
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('menu-toggle');
    const body = document.body;

// Function to close the menu
  function closeMenu() {
    checkbox.checked = false; // Uncheck the checkbox to close the menu
    body.classList.remove('blur-active'); // Remove blur effect
}

// Add event listeners to each menu link
document.querySelectorAll('.list ul li a').forEach(link => {
  link.addEventListener('click', function() {
    closeMenu(); // Close the menu when a link is clicked
    const targetId = this.getAttribute('href'); // Get the target section ID
    const targetSection = document.querySelector(targetId); // Find the target section
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
        } else {
        console.error('Target section not found: ' + targetId);
        }
      });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  // Add animate class to portfolio items for initial animation
  const portfolioItems = document.querySelectorAll('.portfolio-item');
            
  // Animate portfolio items on load
  portfolioItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('animate');
    }, index * 200);
  });

  // Add click event listeners to portfolio items
  portfolioItems.forEach(item => {
    item.addEventListener('click', function(e) {
    // Prevent event bubbling when clicking on extra images
      if (e.target.closest('.extra-images img')) {
        return;
      }

      const extraImages = this.querySelector('.extra-images');
                    
      // Toggle the show class
      extraImages.classList.toggle('show');
      this.classList.toggle('expanded');
    });
  });

  // Optional: Close extra images when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.portfolio-item')) {
        portfolioItems.forEach(item => {
            const extraImages = item.querySelector('.extra-images');
            extraImages.classList.remove('show');
            item.classList.remove('expanded');
        });
    }
  });
});
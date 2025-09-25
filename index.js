const menu = document.querySelector(".navbar .menu");
const menuBtn = document.querySelector(".menu-btn i");

document.querySelector(".menu-btn").addEventListener("click", () => {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

document.querySelectorAll(".navbar .menu li a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
  });
});

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

function updateDarkModeIcon(isDark) {
  if (darkModeToggle) {
    darkModeToggle.innerHTML = isDark
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
  }
}

function enableDarkMode() {
  body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled');
  updateDarkModeIcon(true);
}

function disableDarkMode() {
  body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', 'disabled');
  updateDarkModeIcon(false);
}

if (localStorage.getItem('darkMode') === 'enabled') {
  enableDarkMode();
} else {
  disableDarkMode();
}

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
}


document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_sc8ntsd', 'template_hcqzaw5', this)
    .then(function() {
      alert('Message sent successfully!');
    }, function(error) {
      alert('Failed to send message. Please try again.');
    });
});

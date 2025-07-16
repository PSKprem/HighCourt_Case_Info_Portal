// === 1. Toggle dark/bright mode ===
document.getElementById('modeToggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// === 2. Voice search feature ===
const voiceBtn = document.getElementById('voiceSearchBtn');
const searchInput = document.getElementById('searchInput');

if ('webkitSpeechRecognition' in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'en-US';
  recognition.interimResults = false;

  voiceBtn.addEventListener('click', () => {
    recognition.start();
  });

  recognition.onresult = (event) => {
    const voiceText = event.results[0][0].transcript;
    searchInput.value = voiceText;

    // Optional: Auto-show dropdown when voice fills input
    dropdownList.style.display = 'block';
  };

  recognition.onerror = (event) => {
    alert("Voice recognition error: " + event.error);
  };
} else {
  voiceBtn.disabled = true;
  voiceBtn.title = "Voice search not supported in this browser";
}
     // Show dropdown on focus
     searchInput.addEventListener('focus', () => {
      dropdownList.style.display = 'block';
    });

    // Hide dropdown if clicked outside
    document.addEventListener('click', function (event) {
      if (!event.target.closest('.search-container')) {
        dropdownList.style.display = 'none';
      }
    });

    // Navigate on option click
    dropdownList.addEventListener('click', function (e) {
      const target = e.target;
      if (target.dataset.url) {
        window.location.href = target.dataset.url; // Navigate to the page
      }
    });
  // Show dropdown when focused
  searchInput.addEventListener('focus', () => {
    dropdownList.style.display = 'block';
  });

  // Hide dropdown when clicking outside
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.search-container')) {
      dropdownList.style.display = 'none';
    }
  });

  // Redirect to selected option's URL
  dropdownList.addEventListener('click', function (e) {
    const target = e.target;
    if (target.dataset.url) {
      window.location.href = target.dataset.url;
    }
  });

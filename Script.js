// Get the popup window
const modal = document.getElementById("downloadModal");
// Get the X button to close
const closeBtn = document.querySelector(".close");
// Where to put download buttons
const downloadOptionsContainer = document.getElementById("download-options");
// The title of the popup
const modalTitle = document.getElementById("modal-title");

// Your download links go here - CHANGE THESE TO YOUR REAL LINKS!
const appDownloadOptions = {
  "app-one": [
    { text: "Download for Windows", url: "https://your-windows-link.com" },
    { text: "Download for Mac", url: "https://your-mac-link.com" }
  ],
  "app-two": [
    { text: "Download from Google Play", url: "https://play.google.com/store" },
    { text: "Download from App Store", url: "https://apps.apple.com" },
    { text: "Direct Download", url: "https://your-direct-link.com" }
  ]
};

// Open the popup with download options
function openModal(appId) {
  const options = appDownloadOptions[appId];
  downloadOptionsContainer.innerHTML = '';
  
  modalTitle.textContent = `Download ${appId.replace('-', ' ')}`;
  
  options.forEach(option => {
    const link = document.createElement('a');
    link.href = option.url;
    link.textContent = option.text;
    link.classList.add('download-option');
    link.target = '_blank';
    downloadOptionsContainer.appendChild(link);
  });
  
  modal.style.display = "block";
}

// Close the popup
function closeModal() {
  modal.style.display = "none";
}

// When download link is clicked
document.querySelectorAll('.download-link').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const appId = this.getAttribute('data-app');
    openModal(appId);
  });
});

// Close when X is clicked
closeBtn.addEventListener('click', closeModal);

// Close when clicking outside popup
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    closeModal();
  }
});

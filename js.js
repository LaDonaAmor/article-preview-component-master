document.addEventListener('DOMContentLoaded', function() {
    const shareBtn = document.getElementById("shareBtn");
    const sharePopup = document.querySelector('.share-popup');
    const profile = document.querySelector('.profile');

    // Toggle share popup when clicking the share button
    shareBtn.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent this click from triggering the document click
        shareBtn.querySelector('.share-icon-svg').classList.toggle('share-icon-svg--active');
        sharePopup.classList.toggle('visible');
        profile.classList.toggle('active');
    });

    // Hide popup when clicking anywhere else on the document
    document.addEventListener("click", function(event) {
        // Check if click is outside the share popup and share button
        if (!sharePopup.contains(event.target) && !shareBtn.contains(event.target)) {
            sharePopup.classList.remove('visible');
            profile.classList.remove('active');
        }
    });

    // Prevent popup from closing when clicking inside it
    sharePopup.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});
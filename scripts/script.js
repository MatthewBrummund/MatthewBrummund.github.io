document.addEventListener('DOMContentLoaded', function() {
    var downloadButton = document.getElementById('download-button');
    downloadButton.addEventListener('click', function() {
        // Assuming the resume PDF is in the same directory
        window.location.href = '../assets/resume.pdf';
    });
});

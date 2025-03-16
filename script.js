document.addEventListener("DOMContentLoaded", function () {
    const downloadButton = document.getElementById("downloadResume");

    if (downloadButton) {
        downloadButton.addEventListener("click", function () {
            alert("Your resume is downloading...");
        });
    }
});


function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    let modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

document.addEventListener("DOMContentLoaded", function () {
    let searchInput = document.getElementById("search");

    // Listen for "Enter" keypress on desktop
    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevents default form submission
            navigate();
        }
    });

    // Ensure search works when tapping "Go" on mobile keyboards
    searchInput.addEventListener("input", function () {
        if (searchInput.value.includes("\n")) {
            navigate();
        }
    });

    // If the user clicks outside the input field, trim extra spaces
    searchInput.addEventListener("blur", function () {
        searchInput.value = searchInput.value.trim();
    });
});

function navigate() {
    let input = document.getElementById("search").value.trim().toLowerCase();

    if (input.endsWith(".m0d")) {
        let convertedUrl = input.replace(/\./g, '') + ".html"; // Convert "web.m0d" -> "webm0d.html"
        document.getElementById("browserFrame").src = convertedUrl;
    } else {
        alert("Invalid site format. Use .m0d domains.");
    }
}

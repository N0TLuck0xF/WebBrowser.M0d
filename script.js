// Handle search input for desktop and mobile (Enter key + button click)
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchM0dSite();
    }
});

document.querySelector(".search-button").addEventListener("click", searchM0dSite);

function searchM0dSite() {
    let query = document.getElementById("searchInput").value.trim().toLowerCase();

    if (query.endsWith(".m0d")) {
        let convertedUrl = query.replace(/\./g, '') + ".html"; // Converts "sitebuilder.m0d" → "sitebuilderm0d.html"
        window.location.href = convertedUrl;
    } else {
        alert("Invalid site format. Use .m0d domains.");
    }
}

// Email Creation Simulation (Original Script)
document.querySelector('button').addEventListener('click', () => {
    alert('Email created successfully! (This is a prototype.)');
});

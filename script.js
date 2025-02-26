document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.querySelector(".search-button");

    if (searchInput && searchButton) {
        function searchM0dSite() {
            const query = searchInput.value.trim().toLowerCase();

            if (query.endsWith(".m0d")) {
                const convertedUrl = query.replace(/\./g, '') + ".html"; // Convert "example.m0d" → "examplem0d.html"
                
                // Check if the file exists before redirecting
                fetch(convertedUrl)
                    .then(response => {
                        if (response.ok) {
                            window.location.href = convertedUrl;
                        } else {
                            alert("The site does not exist. Check your spelling or create the .m0d site.");
                        }
                    })
                    .catch(error => {
                        console.error("Error loading site:", error);
                        alert("Error loading site. Please try again.");
                    });
            } else {
                alert("Invalid site format. Use .m0d domains.");
            }
        }

        searchInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                searchM0dSite();
            }
        });

        searchButton.addEventListener("click", searchM0dSite);
    } else {
        console.error("Search input or button not found!");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let searchInput = document.getElementById("searchInput");
    let searchButton = document.querySelector(".search-button");

    if (searchInput && searchButton) {
        function searchM0dSite() {
            let query = searchInput.value.trim().toLowerCase();
            
            if (query.endsWith(".m0d")) {
                let convertedUrl = query.replace(/\./g, '') + ".html"; // Converts "sitebuilder.m0d" → "sitebuilderm0d.html"
                
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

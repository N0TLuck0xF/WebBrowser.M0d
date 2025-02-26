document.addEventListener("DOMContentLoaded", function() {
    let searchInput = document.getElementById("search"); // Matches the HTML id
    let iframe = document.getElementById("browserFrame"); // The iframe to display content

    if (searchInput && iframe) {
        function searchM0dSite() {
            let query = searchInput.value.trim().toLowerCase();
            
            if (query.endsWith(".m0d")) {
                let convertedUrl = query.replace(/\./g, '') + ".html"; // e.g., "worldm0d.m0d" → "worldm0dm0d.html"
                
                // Check if the file exists before loading into iframe
                fetch(convertedUrl)
                    .then(response => {
                        if (response.ok) {
                            iframe.src = convertedUrl; // Load the URL into the iframe
                        } else {
                            iframe.src = "data:text/html,<h1 style='color:black;text-align:center;'>The site does not exist. Check your spelling or create the .m0d site.</h1>";
                        }
                    })
                    .catch(error => {
                        iframe.src = "data:text/html,<h1 style='color:black;text-align:center;'>Error loading site. Please try again.</h1>";
                    });
            } else {
                iframe.src = "data:text/html,<h1 style='color:black;text-align:center;'>Invalid site format. Use .m0d domains.</h1>";
            }
        }

        searchInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                searchM0dSite();
            }
        });
    } else {
        console.error("Search input or iframe not found!");
    }
});

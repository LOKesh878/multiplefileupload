document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    const fileBrowseButton = document.querySelector(".file-browse-button");
    const fileBrowseInput = document.querySelector(".file-browse-input");

    const handleSelectedFiles = (e) => {
        console.log(e.target.files);
    }

    fileBrowseInput.addEventListener('change', handleSelectedFiles);
    fileBrowseButton.addEventListener("click", () => fileBrowseInput.click());
});

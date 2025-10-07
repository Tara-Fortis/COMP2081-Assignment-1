// search the page for input
// Event listener to display a message when the search button is clicked
document.addEventListener("DOMContentLoaded", function () {
    // don't run script yet 
    document.querySelector('.search-form').addEventListener('submit', function (event) {
        event.preventDefault(); // stop the form default submission
        const inputValue = document.querySelector('.search-form .search').value;
        const messageDiv = document.getElementById('search-message');
        messageDiv.textContent = `You searched for: "${inputValue}"`;
    });
});
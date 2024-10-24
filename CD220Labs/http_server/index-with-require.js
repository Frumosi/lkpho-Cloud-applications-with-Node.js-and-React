const http = require('http');

// Function to determine the greeting based on the current hour
function getGreeting() {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        return "Good morning!";
    } else if (currentHour < 18) {
        return "Good afternoon!";
    } else {
        return "Good evening!";
    }
}

// Create an HTTP server
http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Get the dynamic greeting
    const greeting = getGreeting();

    // Send the response body with the dynamic greeting
    res.end(greeting + ' Welcome to our service!\n');

}).listen(8080); // Server listens on port 8080

console.log('Server running at http://localhost:8080/');

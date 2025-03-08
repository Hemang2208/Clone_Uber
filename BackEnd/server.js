// Description: Entry point for the application. Creates an HTTP server and listens on the specified port.

import http from "http";
import app from "./app.js";

// Use environment variable PORT or fallback to 3000
const PORT = process.env.PORT || 3000;

// Create HTTP server
const server = http.createServer(app);

// Start server and listen on specified port
server.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

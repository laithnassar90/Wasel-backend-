const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all origins (customize if needed)
app.use(cors());

// Automatically parse incoming JSON requests
app.use(express.json());

// Health check / test route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Wasel backend 🚀' });
});

// Global 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start the server and handle port errors
const server = app.listen(PORT, () => {
  console.log(`✅ Wasel backend running on port ${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use. Please free the port or change to a different one.`);
  } else {
    console.error('Server error:', err);
  }
});

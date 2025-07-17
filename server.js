const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Routers
const tripsRouter = require('./routes/trips');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/trips', tripsRouter);

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Wasel backend 🚀' });
});

// ✅ Root route (add it here)
app.get('/', (req, res) => {
  res.send('🚀 Wasel backend root is live');
});

// Global 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`✅ Wasel backend running on port ${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use.`);
  } else {
    console.error('Server error:', err);
  }
});

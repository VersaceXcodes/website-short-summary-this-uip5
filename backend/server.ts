import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Serve static files from the frontend build
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// Serve index.html for all non-API routes (SPA fallback)
app.get('*', (req, res) => {
  // Skip API routes
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'API endpoint not found' });
  }
  
  // Serve the React app
  const indexPath = path.join(publicPath, 'index.html');
  res.sendFile(indexPath);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

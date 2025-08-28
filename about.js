import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the build directory
app.use(express.static(join(__dirname, "build")));

// Serve index.html on root
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "build", "index.html"));
});

// Start server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

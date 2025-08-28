import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files
app.use(express.static(join(__dirname, "build")));

// Catch-all: send index.html for React Router paths
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

import express from "express";
import cors from "cors";
import animeRoutes from "./routes/animeRoutes.js"; // Use .js extension
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Register Routes
app.use("/api/anime", animeRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

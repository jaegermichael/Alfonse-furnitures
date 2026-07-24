import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// In-memory quote requests store
const quoteRequests: Array<{
  id: string;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budgetRange: string;
  roomDimensions?: string;
  selectedMaterials?: string[];
  items?: any[];
  notes?: string;
  status: string;
  createdAt: string;
}> = [];

// Initialize Gemini Client
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Submit Quote Request / Project Inquiry
app.post("/api/quotes", (req, res) => {
  const { name, email, phone, projectType, budgetRange, roomDimensions, selectedMaterials, items, notes } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  const newQuote = {
    id: `AF-${Math.floor(100000 + Math.random() * 900000)}`,
    name,
    email,
    phone: phone || "",
    projectType: projectType || "Custom Project",
    budgetRange: budgetRange || "$10,000 - $25,000",
    roomDimensions: roomDimensions || "",
    selectedMaterials: selectedMaterials || [],
    items: items || [],
    notes: notes || "",
    status: "Pending Master Craftsman Review",
    createdAt: new Date().toISOString(),
  };

  quoteRequests.unshift(newQuote);

  res.json({
    success: true,
    quote: newQuote,
    message: "Your consultation request has been submitted to Alfonse Master Craftsmen.",
  });
});

app.get("/api/quotes", (req, res) => {
  res.json({ success: true, count: quoteRequests.length, quotes: quoteRequests });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Alfonse Furniture] Luxury Showroom server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();

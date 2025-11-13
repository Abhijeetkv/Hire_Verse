import express from "express";
import Path from "path";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import { inngest, functions } from "./lib/inngest.js";
import { serve } from "inngest/express";

const app = express();

const __dirname = Path.resolve();

// middleware
app.use(express.json());
// credentials:true means ?? => server allows a browser to include cookies on request
app.use(cors({origin:ENV.CLIENT_URL, credentials:true}));

app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/hey", (req, res) => {
  res.send("Hello, HireVerse Backend!");
});

//  make our app ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(Path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(Path.join(__dirname, "../frontend/dist/index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log("✅ Server is running on", ENV.PORT);
    });
  } catch (error) {
    console.error("❌ Server failed to start:", error);
  }
};

startServer();
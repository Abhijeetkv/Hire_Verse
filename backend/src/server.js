import express from "express";
import Path from "path";
import { ENV } from "./lib/env.js";

const app = express();

const __dirname = Path.resolve();

app.get("/hey", (req, res) => {
  res.send("Hello, HireVerse Backend!");
});


//  make our app ready for deployment
if(ENV.NODE_ENV === "production") {
  app.use(express.static(Path.join(__dirname,"../frontend/dist")))

  app.get("/{*any}", (req, res) => {
    res.sendFile(Path.join(__dirname, "../frontend/dist/index.html"));
  });
}

app.listen(ENV.PORT, () => {
  console.log("✅ Server is running on", ENV.PORT);
});

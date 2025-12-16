import express from "express";
import cors from "cors";

import routes from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.json({ message: "Mobile parts API is running" });
});

app.use("/api", routes);

export default app;

import { Router } from "express";

const router = Router();

router.post("/", (_req, res) => {
  res.status(501).json({ message: "Create product not implemented yet" });
});

router.get("/", (_req, res) => {
  res.status(501).json({ message: "List products not implemented yet" });
});

router.get("/:id", (_req, res) => {
  res.status(501).json({ message: "Get product not implemented yet" });
});

export default router;

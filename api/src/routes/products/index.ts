import { Router } from "express";

// Products endpoints
const router = Router();

router.get("/", (req, res) => {
  res.send("The list of products");
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  res.send("Product B");
});

router.post("/", (req, res) => {
  res.send("Product created");
});

export default router;

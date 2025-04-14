import { Router } from "express";
import {
  listProducts,
  getProductbyId,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./productsController";

// Products endpoints
const router = Router();

router.get("/", listProducts);

router.get("/:id", getProductbyId);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;

import { Router } from "express";
import {
  listProducts,
  getProductbyId,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./productsController";
import { validateData } from "../../middlewares/validationMiddleware";
import { z } from "zod";
import {
  createProductSchema,
  updateProductSchema,
} from "../../db/productsSchema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { productsTable } from "../../db/productsSchema";

// Products endpoints
const router = Router();

router.get("/", listProducts);

router.get("/:id", getProductbyId);

router.post("/", validateData(createProductSchema), createProduct);

router.put("/:id", validateData(updateProductSchema), updateProduct);

router.delete("/:id", deleteProduct);

export default router;

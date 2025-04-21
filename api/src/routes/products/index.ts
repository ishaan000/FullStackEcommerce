import { Router } from "express";
import {
  listProducts,
  getProductbyId,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./productsController";
import { validateData } from "../../middlewares/validationMiddleware";
import {
  createProductSchema,
  updateProductSchema,
} from "../../db/productsSchema";
import { verifyToken } from "../../middlewares/authMiddleware";
import { verifySeller } from "../../middlewares/authMiddleware";

// Products endpoints
const router = Router();

router.get("/", listProducts);

router.get("/:id", getProductbyId);

router.post(
  "/",
  verifyToken,
  verifySeller,
  validateData(createProductSchema),
  createProduct
);

router.put(
  "/:id",
  verifyToken,
  verifySeller,
  validateData(updateProductSchema),
  updateProduct
);

router.delete("/:id", verifyToken, verifySeller, deleteProduct);

export default router;

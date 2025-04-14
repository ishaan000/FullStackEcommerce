import { Request, Response } from "express";

export function listProducts(req: Request, res: Response) {
  res.send("listProducts");
}

export function getProductbyId(req: Request, res: Response) {
  res.send("getProductbyId");
}

export function createProduct(req: Request, res: Response) {
  res.send("createProduct");
}

export function updateProduct(req: Request, res: Response) {
  res.send("updateProduct");
}

export function deleteProduct(req: Request, res: Response) {
  res.send("deleteProduct");
}

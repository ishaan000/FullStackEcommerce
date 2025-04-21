import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header("Authorization");

  if (!token) {
    res.status(401).json({ error: "Access denied" });
    return;
  }

  try {
    //decode the token
    const decoded = jwt.verify(token, "secret");
    if (typeof decoded !== "object" || !decoded?.userId) {
      res.status(401).json({ error: "Access denied" });
      return;
    }
    req.userId = decoded.userId;
    req.role = decoded.role;
    next();
  } catch (e) {
    return res.status(401).json({ message: "Access denied" });
  }
}

export function verifySeller(req: Request, res: Response, next: NextFunction) {
  const role = req.role;
  if (role !== "seller") {
    res
      .status(401)
      .json({ error: "You dont have access to perfom this action" });
    return;
  }
  next();
}

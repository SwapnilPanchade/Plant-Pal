import { error } from "console";
import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

export const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({ body: req.body });
      next();
    } catch (err: any) {
      res.status(400).json({
        error: err.errors,
        msg: "Got an error while parsing the json body",
      });
    }
  };

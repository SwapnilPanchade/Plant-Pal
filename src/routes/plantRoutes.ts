import { Router } from "express";
import { validate } from "../middlewares/validate";
import { createPlantSchema } from "../validators/plantValidator";
import * as ctrl from "../controllers/plantController";

const router = Router();

router.post("/", validate(createPlantSchema), ctrl.createPlant);

router.get("/all", ctrl.getAllPlants);

router.put("/update", validate(createPlantSchema), ctrl.updatePlant);

export default router;

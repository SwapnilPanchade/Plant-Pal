//! This is controller where we will save all our plant realted api's here
import { Request, Response } from "express";
import { Plant } from "../models/Plant";

export const createPlant = async (req: Request, res: Response) => {
  const plant = new Plant(req.body);
  await plant.save();
  res.status(201).json({
    plant,
    msg: "plant created successfully",
  });
};

export const getAllPlants = async (req: Request, res: Response) => {
  const allPlants = await Plant.find();
  res.status(200).json({
    allPlants,
  });
};

export const updatePlant = async (req: Request, res: Response) => {
  try {
    const plantToUpdate = await Plant.findOneAndUpdate({
      name: req.body.name,
      description: req.body.description,
      new: true,
      upsert: true,
    });

    if (!plantToUpdate) {
      res.status(404).json({
        msg: "The given plant with name not found but created new one using upsert",
      });
    }

    res.status(201).json({
      msg: "Plant updated Successfully",
      plant: plantToUpdate,
    });
  } catch (error: any) {
    res.status(500).json({
      msg: "Some internal error has occured",
      err: error,
    });
  }
};

//! Declare the model of plant here like the things plant will contain like name,species and all and it's the model that will be stored in the DB like the model we declare
import mongoose, { Schema, model, Document, mongo } from "mongoose";

interface IPlant extends Document {
  name: string;
  description: string;
  lastWatered: Date;
}

const PlantSchema = new Schema<IPlant>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  lastWatered: {
    type: Date,
    default: Date.now,
  },
});

export const Plant = model<IPlant>("Plants", PlantSchema);

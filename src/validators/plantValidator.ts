import { z } from "zod";

export const createPlantSchema = z.object({
    body: z.object({
        name:z.string().min(1,"Name is required"),
        description : z.string().min(1,"Description is required")
    })
})
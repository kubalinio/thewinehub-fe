import { z } from "zod";

export const BikeDataSchema = z.object({
  id: z.string(),
  bikeName: z.string(),
  manufacturer: z.string(),
  modelYear: z.number(),
  frameMaterial: z.string(),
  frameSize: z.string(),
  image: z.string(),
  color: z.string(),
  weight: z.string(),
  price: z.number(),
  components: z.object({
    groupset: z.string(),
    brakes: z.string(),
    wheelset: z.string(),
    tires: z.string(),
    saddle: z.string(),
    handlebar: z.string(),
    stem: z.string(),
  }),
  features: z.array(z.string()),
});

export type BikeDetails = z.infer<typeof BikeDataSchema>;

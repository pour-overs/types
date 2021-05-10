import { CoffeeRequirements } from "./CoffeeRequirements";

export declare interface Guide {
  createdAt: string, // firestore timestamp
  lastModified: string, // firestore timestamp
  owner: string, // GAuth userID
  description: string,
  isPublished: boolean,
  slug: string,
  title: string,
  steps: any[],
  introduction: any,
  coffee: CoffeeRequirements,
}
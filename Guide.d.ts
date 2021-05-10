import { CoffeeRequirements } from "./CoffeeRequirements";
import { CoffeeIntroduction } from "./GuideIntroduction";

export declare interface Guide {
  createdAt: string, // firestore timestamp
  lastModified: string, // firestore timestamp
  owner: string, // GAuth userID
  description: string,
  isPublished: boolean,
  slug: string,
  title: string,
  steps: any[],
  introduction: CoffeeIntroduction,
  coffee: CoffeeRequirements,
}
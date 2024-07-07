import { RealEstate } from "./RealEstate";

export interface Listing {
  id: number;
  createdOn: number;
  createdBy: string;
  softwareVersion: string;
  customer: string;
  entry: RealEstate;
}

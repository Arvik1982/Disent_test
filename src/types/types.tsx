import { Dispatch } from "react";

export type elementType = {
  name: { common: string };
  capital: string;
  flags: {
    png: string;
    alt: string;
  };
  region: string;
  subregion: string;
  population: number;
};
export interface propsInterface {
  setError: Dispatch<string>;
}

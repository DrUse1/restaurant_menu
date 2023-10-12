/// <reference types="astro/client" />

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

type TCard = {
  title: string;
  sections: TSection[];
};

type TSection = {
  title: string;
  categories?: {
    title: string;
    dishes: TDish[];
  }[];
  dishes?: TDish[];
};

type TDish = {
  title: string;
  description: string;
  price: number;
};

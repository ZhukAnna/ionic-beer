export interface Beer {
  abv: number;
  attenuation_level: number;
  boil_volume: {
    value: number;
    unit: string;
  };
  brewers_tips: string;
  contributed_by: string;
  description: string;
  ebc: number;
  first_brewed: string;
  food_pairing: string[];
  ibu: number;
  id: number;
  image_url: string;
  ingredients: {
    malt: [];
    hops: [];
    yeast: string;
  };
  method: {
    mash_temp: [
      {
        duration: number;
        temp: { value: number; unit: string };
      }
    ];
    fermentation: {
      temp: { value: number; unit: string };
    };
    twist: null;
  };
  name: string;
  ph: number;
  srm: number;
  tagline: string;
  target_fg: number;
  target_og: number;
  volume: {
    value: number;
    unit: string;
  };
}

export type Description = {
  title: string;
  text: string[];
};

export type Product = {
  id: string;
  category: string;
  namespaceId?: string;
  name: string;
  capacityAvailable?: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable?: string[];
  color: string;
  images: string[];
  description?: Description[];
  screen?: string;
  resolution?: string;
  processor?: string;
  ram?: string;
  camera?: string;
  zoom?: string;
  cell?: string[];
  year?: number;
};

export interface ApiPhone {
  id?: string;
  itemId?: string;
  category: string;
  name: string;
  capacity: string;
  priceRegular?: number;
  fullPrice?: number;
  priceDiscount?: number;
  price?: number;
  screen: string;
  ram: string;
  color: string;
  year?: number;
  images?: string[];
  image?: string;
}

export interface PhonesSliderProps {
  title: string;
  apiEndpoint: string;
  filterType?: 'newModels' | 'hotPrices';
}

export type Color =
  | 'green'
  | 'black'
  | 'red'
  | 'yellow'
  | 'white'
  | 'purple'
  | 'spacegray'
  | 'midnightgreen'
  | 'gold'
  | 'silver'
  | 'rosegold'
  | 'coral'
  | 'midnight'
  | 'spaceblack'
  | 'blue'
  | 'pink'
  | 'graphite'
  | 'sierrablue'
  | 'starlight'
  | 'skyblue';

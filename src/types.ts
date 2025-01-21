export type Description = {
  title: string;
  text: string[];
};

export type Product = {
  itemId: string;
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
  year: number;
};

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

export type Category = {
  id: number;
  title: string;
  count: number;
  image: string;
  path: string;
};

export type SortType = 'name' | 'cheapest' | 'expensive' | 'newest' | 'oldest';

export type FilterType = 'newModels' | 'hotPrices' | 'all';

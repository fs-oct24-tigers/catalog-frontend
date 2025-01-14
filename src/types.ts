export type Description = {
  title: string;
  text: string[];
};

export type Phone = {
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
  | 'sierrablue';

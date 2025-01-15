import { Color } from './types';
import { Product } from './types';

export const colorOptions: Record<Color, string> = {
  green: '#51E5BD',
  black: '#2C2C2C',
  red: '#DC143C',
  yellow: '#FFCC00',
  white: '#E0FFFF',
  purple: '#7B68EE',
  spacegray: '#3D3D3D',
  midnightgreen: '#008000',
  gold: '#ffdab9',
  silver: '#C1C1C1',
  rosegold: '#f799bb',
  coral: '#e6b8c7',
  midnight: '#008080',
  spaceblack: '#2F4F4F',
  blue: '#7ab4ea',
  pink: '#db7093',
  graphite: '#5B5B5B',
  sierrablue: '#4682B4',
  starlight: '#FFFAE5',
  skyblue: '#5FABFF',
};

export const getSpecs = (product: Product) => {
  if (!product) return [];
  return [
    { name: 'Screen', value: product.screen },
    { name: 'Resolution', value: product.resolution },
    { name: 'Processor', value: product.processor },
    { name: 'RAM', value: product.ram },
    { name: 'Camera', value: product.camera },
    { name: 'Zoom', value: product.zoom },
    { name: 'Cell', value: product.cell?.join(', ') },
  ];
};

export const getProperties = (product: Product) => {
  if (!product) return [];
  return [
    { name: 'Screen', value: product.screen },
    { name: 'Resolution', value: product.resolution },
    { name: 'Processor', value: product.processor },
    { name: 'RAM', value: product.ram },
  ];
};

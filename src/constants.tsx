import { Color } from './types';
import { Product } from './types';
import creator1Image from '../public/img/creator1.png';
import creator2Image from '../public/img/creator2.png';
import creator3Image from '../public/img/creator3.png';
import creator4Image from '../public/img/creator4.png';
import creator5Image from '../public/img/creator5.png';

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

export const creators = [
  {
    image: creator4Image,
    name: 'Ihor Krykunov',
    role: 'Team leader, developer',
    github: 'https://github.com/Krykunov',
    linkedin: 'https://www.linkedin.com/in/igor443/',
  },
  {
    image: creator2Image,
    name: 'Andrii Yanchuk',
    role: 'Developer',
    github: 'https://github.com/Andrii-Yanchuk',
    linkedin: '',
  },
  {
    image: creator1Image,
    name: 'Stanislav Chyrva',
    role: 'Developer',
    github: 'https://github.com/schyrva',
    linkedin: '',
  },
  {
    image: creator3Image,
    name: 'Dmytro Fridrif',
    role: 'Developer',
    github: 'https://github.com/Fridrif27',
    linkedin:
      'https://www.linkedin.com/in/dmytro-fridrif-971444261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    image: creator5Image,
    name: 'Alyona Verbanova',
    role: 'Developer',
    github: 'https://github.com/AlyonaV22',
    linkedin: '',
  },
];

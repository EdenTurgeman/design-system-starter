/* eslint-disable @typescript-eslint/naming-convention */
export const purplePalette: Record<number, string> = {
  100: '#F0EDFC',
  200: '#D1C9F7',
  300: '#B3A6F2',
  400: '#9482ED',
  500: '#8570EB',
  600: '#755EE8',
  700: '#5C41E4',
  800: '#573BE3',
  900: '#4729E0',
  1000: '#3D1FD6',
};

export const yellowPalette: Record<number, string> = {
  100: '#fef9ef',
  200: '#fdf3de',
  300: '#fce6be',
  400: '#fada9d',
  500: '#f9cd7d',
  600: '#f7c15c',
  700: '#deae53',
  800: '#c69a4a',
  900: '#947437',
  1000: '#634d25',
};

export const royalBluePalette: Record<number, string> = {
  100: '#e6eaec',
  200: '#ccd5d9',
  300: '#b3c0c6',
  400: '#99abb3',
  500: '#8097a1',
  600: '#66828e',
  700: '#4d6d7b',
  800: '#335868',
  900: '#1a4355',
  1000: '#002e42',
};

export const bluePalette: Record<number, string> = {
  100: '#f0f3f8',
  200: '#e0e7f0',
  300: '#c1cee2',
  400: '#a3b6d3',
  500: '#849dc5',
  600: '#6585b6',
  700: '#5b78a4',
  800: '#516a92',
  900: '#3d506d',
  1000: '#283549',
};

export const grayPalette: Record<number, string> = {
  0: '#ffffff',
  100: '#f7f7f7',
  200: '#efefef',
  300: '#e7e7e7',
  400: '#d7d7d7',
  500: '#afafaf',
  600: '#8c8c8c',
  700: '#7a7a7a',
  800: '#696969',
  900: '#464646',
  1000: '#000000',
};

export const redPalette: Record<number, string> = {
  100: '#fbdfd7',
  200: '#f8cec4',
  300: '#f6beb0',
  400: '#f29e88',
  500: '#ed7d61',
  600: '#e95d39',
  700: '#d25433',
  800: '#ba4a2e',
  900: '#8c3822',
  1000: '#5d2517',
};

export const greenPalette: Record<number, string> = {
  100: '#e6f5e6',
  200: '#ccebcd',
  300: '#b3e2b5',
  400: '#99d89c',
  500: '#80ce83',
  600: '#73b976',
  700: '#66a569',
  800: '#5a905c',
  900: '#4d7c4f',
  1000: '#335234',
};

export type Color = [
  'white',
  'black',
  'royalBlue.100',
  'royalBlue.200',
  'royalBlue.300',
  'royalBlue.400',
  'royalBlue.500',
  'royalBlue.600',
  'royalBlue.700',
  'royalBlue.800',
  'royalBlue.900',
  'royalBlue.1000',
  'blue.100',
  'blue.200',
  'blue.300',
  'blue.400',
  'blue.500',
  'blue.600',
  'blue.700',
  'blue.800',
  'blue.900',
  'blue.1000',
  'yellow.100',
  'yellow.200',
  'yellow.300',
  'yellow.400',
  'yellow.500',
  'yellow.600',
  'yellow.700',
  'yellow.800',
  'yellow.900',
  'yellow.1000',
  'red.100',
  'red.200',
  'red.300',
  'red.400',
  'red.500',
  'red.600',
  'red.700',
  'red.800',
  'red.900',
  'red.1000',
  'green.100',
  'green.200',
  'green.300',
  'green.400',
  'green.500',
  'green.600',
  'green.700',
  'green.800',
  'green.900',
  'green.1000',
  'gray.0',
  'gray.100',
  'gray.200',
  'gray.300',
  'gray.400',
  'gray.500',
  'gray.600',
  'gray.700',
  'gray.800',
  'gray.900',
  'gray.1000',
  'purple.0',
  'purple.100',
  'purple.200',
  'purple.300',
  'purple.400',
  'purple.500',
  'purple.600',
  'purple.700',
  'purple.800',
  'purple.900',
  'purple.1000',
][number];

export const colors = {
  yellow: yellowPalette,
  green: greenPalette,
  blue: bluePalette,
  royalBlue: royalBluePalette,
  red: redPalette,
  gray: grayPalette,
  purple: purplePalette,
};
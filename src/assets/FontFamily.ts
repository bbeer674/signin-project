import {fontFamilies} from './Fonts';

export const getFontFamily = (weight: 'regular' | 'medium' | 'bold') => {
  const selectedFontFamily = fontFamilies.PROMPT;
  return selectedFontFamily[weight];
};

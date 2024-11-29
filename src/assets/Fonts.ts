import {Platform} from 'react-native';

export const fontFamilies = {
  PROMPT: {
    regular: Platform.OS === 'ios' ? 'SukhumvitSet' : 'Prompt-Regular',
    medium: Platform.OS === 'ios' ? 'SukhumvitSet-Medium' : 'Prompt-Medium',
    bold: Platform.OS === 'ios' ? 'SukhumvitSet-Bold' : 'Prompt-Bold',
  },
};

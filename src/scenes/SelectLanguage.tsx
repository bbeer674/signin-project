import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Color} from '../assets/Color';
import {useDispatch} from 'react-redux';
import {setDataLocale} from '../redux/slices/localeSlice';
import i18n from '../i18n';
import {fontText} from '../assets/FontText';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {DISCLAIMER_SCREEN_SCENE} from '../Constants';

type RootStackParamList = {
  [DISCLAIMER_SCREEN_SCENE]: undefined;
};

function SelectLanguage() {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    dispatch(setDataLocale(language));
    navigation.navigate(DISCLAIMER_SCREEN_SCENE);
  };
  return (
    <View style={styles.container}>
      <Text style={fontText.Text_Black_Bold_20}>{t('welcome')}</Text>
      <Text style={fontText.Text_Gray_15}>{t('select_language')}</Text>

      <TouchableOpacity
        onPress={() => handleChangeLanguage('en')}
        style={[styles.button, {marginTop: 104}]}>
        <Text style={fontText.Text_White_14}>{t('english')}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleChangeLanguage('th')}
        style={styles.button}>
        <Text style={fontText.Text_White_14}>{t('thai')}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Color.white,
    paddingHorizontal: 24,
  },
  button: {
    height: 45,
    width: '100%',
    borderRadius: 5,
    backgroundColor: Color.purple_primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
});

export default SelectLanguage;

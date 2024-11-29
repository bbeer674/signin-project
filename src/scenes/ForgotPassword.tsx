import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Color} from '../assets/Color';
import Header from '../components/Header';
import {useTranslation} from 'react-i18next';
import {fontText} from '../assets/FontText';
import {getFontFamily} from '../assets/FontFamily';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SEND_FORGOT_SUCCESS_SCREEN_SCENE} from '../Constants';

type RootStackParamList = {
  [SEND_FORGOT_SUCCESS_SCREEN_SCENE]: undefined;
};

function ForgotPassword() {
  const {t} = useTranslation();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSend = () => {
    navigation.navigate(SEND_FORGOT_SUCCESS_SCREEN_SCENE);
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.boxCard}>
        <View style={styles.boxTitle}>
          <Text style={fontText.Text_Black_Bold_20}>{t('forgot')}</Text>
          <Text style={[fontText.Text_Gray_15, {marginTop: 7}]}>
            {t('enter_forgot')}
          </Text>
        </View>
        <View style={styles.boxInput}>
          <TextInput placeholder={t('user_forgot')} style={styles.inputStyle} />
        </View>
        <TouchableOpacity style={styles.buttonSend} onPress={handleSend}>
          <Text style={fontText.Text_White_14}>{t('send')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  boxCard: {
    paddingHorizontal: 24,
  },
  boxInput: {
    paddingTop: 40,
  },
  boxTitle: {
    paddingTop: 20,
  },
  inputStyle: {
    borderColor: Color.gray_light,
    borderBottomWidth: 1,
    width: '100%',
    height: 56,
    fontSize: 13,
    color: Color.input_color,
    fontFamily: getFontFamily('regular'),
    alignItems: 'center',
  },
  buttonSend: {
    marginTop: 48,
    height: 44,
    borderRadius: 5,
    backgroundColor: Color.purple_primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ForgotPassword;

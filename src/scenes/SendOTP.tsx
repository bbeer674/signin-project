import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../assets/Color';
import Header from '../components/Header';
import {IconSendOTP} from '../assets/Icon';
import {useTranslation} from 'react-i18next';
import {fontText} from '../assets/FontText';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ENTER_OTP_SCREEN_SCENE} from '../Constants';

type RootStackParamList = {
  [ENTER_OTP_SCREEN_SCENE]: {mobile: string};
};
function SendOTP() {
  const {t} = useTranslation();
  const [mobile, setMobile] = useState('082-XXX-8998');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const sendOTP = () => {
    navigation.navigate(ENTER_OTP_SCREEN_SCENE, {mobile});
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.boxItem}>
        <View style={styles.boxIcon}>
          <IconSendOTP />
        </View>
        <Text style={[fontText.Text_Black_Bold_20, {marginTop: 40}]}>
          {t('otp_send')}
        </Text>
        <Text style={[fontText.Text_Purple_Bold_20, {marginTop: 9}]}>
          {mobile}
        </Text>
        <TouchableOpacity style={styles.buttonSend} onPress={sendOTP}>
          <Text style={fontText.Text_White_14}>{t('re_otp')}</Text>
        </TouchableOpacity>
        <Text style={[fontText.Text_Gray_11, {marginTop: 24}]}>
          {t('otp_warning')}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  boxItem: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxIcon: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: Color.gray_dark,
    borderStyle: 'dashed',
  },
  buttonSend: {
    marginTop: 55,
    height: 44,
    borderRadius: 5,
    backgroundColor: Color.purple_primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default SendOTP;

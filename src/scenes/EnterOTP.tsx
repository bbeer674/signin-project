import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Keyboard, StyleSheet, Text, View, TextInput} from 'react-native';
import {Color} from '../assets/Color';
import {fontText} from '../assets/FontText';
import {ENTER_OTP_SCREEN_SCENE, SET_PIN_SCREEN_SCENE} from '../Constants';
import Header from '../components/Header';
import {getFontFamily} from '../assets/FontFamily';

type RootStackParamList = {
  [ENTER_OTP_SCREEN_SCENE]: {mobile: string};
  [SET_PIN_SCREEN_SCENE]: undefined;
};

type SendOTPProps = {
  route: RouteProp<RootStackParamList, typeof ENTER_OTP_SCREEN_SCENE>;
};

function EnterOTP({route}: SendOTPProps) {
  const {t} = useTranslation();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {mobile} = route.params;
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const inputs = useRef<Array<any | any>>([]);
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [mobile]);

  const handleInputChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }

    if (newOtp.every(digit => digit.length === 1)) {
      Keyboard.dismiss();
      navigation.navigate(SET_PIN_SCREEN_SCENE);
    }
  };

  const handleBackspace = (text: string, index: number) => {
    if (!text && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.boxCard}>
        <View style={styles.boxTitle}>
          <Text style={fontText.Text_Black_Bold_20}>{t('authen')}</Text>
          <Text style={[fontText.Text_Gray_15, {marginTop: 7}]}>
            {t('authen_desc')}
          </Text>
          <Text style={[fontText.Text_Gray_15, {marginTop: 5}]}>{mobile}</Text>
        </View>
        <View style={styles.boxOtp}>
          {otp.map((_, index) => (
            <TextInput
              key={index}
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              value={otp[index]}
              onChangeText={text => handleInputChange(text, index)}
              onKeyPress={({nativeEvent}) =>
                nativeEvent.key === 'Backspace' && handleBackspace('', index)
              }
              ref={ref => (inputs.current[index] = ref)}
            />
          ))}
        </View>
        <View style={styles.boxRequest}>
          <Text style={fontText.Text_Gray_15}>{t('re_send_desc')}</Text>
          <Text style={[fontText.Text_Purple_15, {marginTop: 12}]}>
            {t('resend_otp')} ({countdown})
          </Text>
        </View>
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
  boxTitle: {
    paddingTop: 20,
  },
  boxOtp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 40,
    alignItems: 'center',
  },
  input: {
    width: 33,
    height: 56,
    borderBottomWidth: 1,
    textAlign: 'center',
    marginHorizontal: 13,
    borderColor: Color.gray_light,
    fontSize: 24,
    fontFamily: getFontFamily('regular'),
  },
  boxRequest: {
    marginTop: 128,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default EnterOTP;

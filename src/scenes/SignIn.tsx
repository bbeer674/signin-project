import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../assets/Color';
import {useTranslation} from 'react-i18next';
import {getFontFamily} from '../assets/FontFamily';
import {fontText} from '../assets/FontText';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  FORGOT_PASSWORD_SCREEN_SCENE,
  SEND_OTP_SCREEN_SCENE,
} from '../Constants';

type RootStackParamList = {
  [FORGOT_PASSWORD_SCREEN_SCENE]: undefined;
  [SEND_OTP_SCREEN_SCENE]: undefined;
};

function SignIn() {
  const {t} = useTranslation();
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleForgotPassword = () => {
    navigation.navigate(FORGOT_PASSWORD_SCREEN_SCENE);
  };

  const handleSignin = () => {
    navigation.navigate(SEND_OTP_SCREEN_SCENE);
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxCard}>
        <TextInput placeholder={t('user')} style={styles.inputStyle} />
        <TextInput
          placeholder={t('password')}
          style={[styles.inputStyle, {marginTop: 20}]}
          secureTextEntry
        />
        <View style={styles.boxRow}>
          <View style={styles.checkboxStyle}>
            <TouchableOpacity
              style={[styles.checkbox, isChecked && styles.checkedCheckbox]}
              onPress={toggleCheckbox}></TouchableOpacity>
            <Text style={fontText.Text_Gray_13}>{t('remember')}</Text>
          </View>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={fontText.Text_Gray_13}>{t('forgot')}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonLogin} onPress={handleSignin}>
          <Text style={fontText.Text_White_14}>{t('login')}</Text>
        </TouchableOpacity>
        <View style={styles.textLine}>
          <View style={styles.line} />
          <Text style={styles.text}>{t('no_account')}</Text>
          <View style={styles.line} />
        </View>
        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={fontText.Text_Purple_14}>{t('register_account')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white,
  },
  boxCard: {
    flexDirection: 'column',
    paddingHorizontal: 24,
    width: '100%',
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
  boxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  checkboxStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 0.5,
    borderColor: Color.gray_light,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
    backgroundColor: Color.white,
  },
  checkedCheckbox: {
    backgroundColor: Color.purple_primary,
  },
  buttonLogin: {
    marginTop: 37,
    height: 44,
    borderRadius: 5,
    backgroundColor: Color.purple_primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
  },
  line: {
    flex: 1,
    height: 0.5,
    backgroundColor: Color.gray_light,
  },
  text: {
    marginHorizontal: 7,
    fontSize: 13,
    color: Color.input_color,
    fontFamily: getFontFamily('regular'),
  },
  buttonRegister: {
    marginTop: 26,
    height: 44,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.gray_dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SignIn;

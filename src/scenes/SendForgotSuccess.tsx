import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Color} from '../assets/Color';
import {IconSuccess} from '../assets/Icon';
import {fontText} from '../assets/FontText';
import {useTranslation} from 'react-i18next';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SIGNIN_SCREEN_SCENE} from '../Constants';

type RootStackParamList = {
  [SIGNIN_SCREEN_SCENE]: undefined;
};

function SendForgotSuccess() {
  const {t} = useTranslation();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleAccept = () => {
    navigation.navigate(SIGNIN_SCREEN_SCENE);
  };
  return (
    <View style={styles.container}>
      <IconSuccess />
      <Text style={[fontText.Text_Black_Bold_20, {marginTop: 68}]}>
        {t('success')}
      </Text>
      <Text style={[fontText.Text_Gray_15, {marginTop: 15}]}>
        {t('reset_success')}
      </Text>
      <TouchableOpacity style={styles.buttonSend} onPress={handleAccept}>
        <Text style={fontText.Text_White_14}>{t('accept_button')}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  buttonSend: {
    marginTop: 48,
    height: 44,
    borderRadius: 5,
    backgroundColor: Color.purple_primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default SendForgotSuccess;

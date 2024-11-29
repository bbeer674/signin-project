import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Color} from '../assets/Color';
import {getFontFamily} from '../assets/FontFamily';
import {useTranslation} from 'react-i18next';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {fontText} from '../assets/FontText';
import {IconTouchID} from '../assets/Icon';
import {ENTER_PIN_SCREEN_SCENE} from '../Constants';

type RootStackParamList = {
  [ENTER_PIN_SCREEN_SCENE]: undefined;
};

function SetTouchID() {
  const {t} = useTranslation();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const skipSetTouchID = () => {
    navigation.navigate(ENTER_PIN_SCREEN_SCENE);
  };
  return (
    <View style={styles.container}>
      <View style={styles.boxCard}>
        <Text style={fontText.Text_Black_Bold_20}>{t('touch_id')}</Text>
        <Text style={[fontText.Text_Gray_15, {marginTop: 15}]}>
          {t('touch_id_desc')}
        </Text>
      </View>
      <View style={styles.boxID}>
        <View style={styles.boxItem}>
          <IconTouchID />
        </View>
      </View>
      <View style={styles.boxButton}>
        <TouchableOpacity style={styles.buttonSetID}>
          <Text style={fontText.Text_White_14}>{t('set_touch_id')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSkip} onPress={skipSetTouchID}>
          <Text style={fontText.Text_Purple_14}>{t('skip')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    paddingHorizontal: 24,
  },
  boxCard: {
    paddingTop: 101,
  },
  boxID: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 103,
  },
  boxItem: {
    width: 90,
    height: 90,
    borderRadius: 50,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.16,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: Color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxButton: {
    marginTop: 183,
  },
  buttonSetID: {
    height: 44,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.purple_primary,
  },
  buttonSkip: {
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SetTouchID;

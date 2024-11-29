import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {getFontFamily} from '../assets/FontFamily';
import {Color} from '../assets/Color';
import {fontText} from '../assets/FontText';
import {useTranslation} from 'react-i18next';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import {
  CONFIRM_PIN_SCREEN_SCENE,
  SET_TOUCH_ID_SCREEN_SCENE,
} from '../Constants';

type RootStackParamList = {
  [CONFIRM_PIN_SCREEN_SCENE]: {key: string};
  [SET_TOUCH_ID_SCREEN_SCENE]: undefined;
};

type PinProps = {
  route: RouteProp<RootStackParamList, typeof CONFIRM_PIN_SCREEN_SCENE>;
};
function ConfirmPinCode({route}: PinProps) {
  const [confirmPin, setConfirmPin] = useState<string>('');
  const {t} = useTranslation();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {key} = route.params;

  const handleKeyPress = (inputKey: string) => {
    if (inputKey === 'delete') {
      setConfirmPin(prev => prev.slice(0, -1));
    } else if (confirmPin.length < 6) {
      setConfirmPin(prev => prev + inputKey);

      if (inputKey === key) {
        navigation.navigate(SET_TOUCH_ID_SCREEN_SCENE);
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={fontText.Text_Gray_15}>{t('confirm_pin')}</Text>

      <View style={styles.pinContainer}>
        {Array.from({length: 6}).map((_, index) => (
          <View
            key={index}
            style={[
              styles.circle,
              confirmPin.length > index && styles.filledCircle,
            ]}
          />
        ))}
      </View>

      <View style={styles.keypad}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'delete'].map(
          (key, index) => {
            if (key === '0') {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleKeyPress(key)}
                  style={styles.keyZero}>
                  <Text style={fontText.Text_Gray_Bold_30}>{key}</Text>
                </TouchableOpacity>
              );
            }
            if (key === 'delete') {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleKeyPress(key)}
                  style={styles.keyDelete}>
                  <Text style={fontText.Text_Gray_Bold_30}>⌫</Text>
                </TouchableOpacity>
              );
            }
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleKeyPress(key)}
                style={styles.key}>
                <Text style={fontText.Text_Gray_Bold_30}>{key}</Text>
              </TouchableOpacity>
            );
          },
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
    paddingHorizontal: 44,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  circle: {
    width: 14,
    height: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.gray_dark,
    marginHorizontal: 9,
  },
  filledCircle: {
    backgroundColor: Color.purple_primary,
  },
  keypad: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 66,
    height: 402,
  },
  key: {
    width: 76,
    height: 76,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 14,
    marginHorizontal: 10,
    borderRadius: 40,
    borderWidth: 0.86,
    borderColor: Color.gray_medium,
  },
  keyZero: {
    position: 'absolute',
    width: 76,
    height: 76,
    borderRadius: 40,
    borderWidth: 0.86,
    borderColor: Color.gray_medium,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
  },
  keyDelete: {
    position: 'absolute',
    width: 76,
    height: 76,
    right: 0,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
  },
  keyText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ConfirmPinCode;

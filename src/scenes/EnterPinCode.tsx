import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../assets/Color';
import {fontText} from '../assets/FontText';
import {useTranslation} from 'react-i18next';
import {IconTouchID, IconTouchIDAlert, IconTouchIDSize40} from '../assets/Icon';
import {getFontFamily} from '../assets/FontFamily';

function EnterPinCode() {
  const [pin, setPin] = useState<string>('');
  const {t} = useTranslation();
  const [modalVisible, setModalVisible] = useState(true);

  const handleKeyPress = (key: string) => {
    if (key === 'delete') {
      setPin(prev => prev.slice(0, -1));
    } else if (pin.length < 6) {
      setPin(prev => prev + key);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={fontText.Text_Gray_15}>{t('enter_pin')}</Text>

      <View style={styles.pinContainer}>
        {Array.from({length: 6}).map((_, index) => (
          <View
            key={index}
            style={[styles.circle, pin.length > index && styles.filledCircle]}
          />
        ))}
      </View>

      <View style={styles.keypad}>
        {[
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          'touch_id',
          '0',
          'delete',
        ].map((key, index) => {
          if (key === '0') {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleKeyPress(key)}
                style={styles.key}>
                <Text style={fontText.Text_Gray_Bold_30}>{key}</Text>
              </TouchableOpacity>
            );
          }
          if (key === 'delete') {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleKeyPress(key)}
                style={styles.keyNoneBorder}>
                <Text style={fontText.Text_Gray_Bold_30}>⌫</Text>
              </TouchableOpacity>
            );
          }
          if (key === 'touch_id') {
            return (
              <TouchableOpacity key={index} style={styles.keyNoneBorder}>
                <IconTouchIDSize40 />
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
        })}
      </View>
      <TouchableOpacity style={styles.forgotPin}>
        <Text style={fontText.Text_Gray_15}>{t('forgot_pin')}</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.overlay}>
          <View style={styles.containerAlert}>
            <IconTouchIDAlert />
            <Text style={styles.title}>{t('touchId_title')}</Text>
            <Text style={styles.subtitle}>{t('touchId_desc')}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{t('enter_password')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.buttonCancel}>
              <Text style={styles.cancelText}>{t('cancel')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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

  keyNoneBorder: {
    width: 76,
    height: 76,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 14,
    marginHorizontal: 10,
    borderRadius: 40,
  },
  keyText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  forgotPin: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(4, 4, 15, 0.4)',
  },
  containerAlert: {
    width: 270,
    backgroundColor: Color.white,
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 17,
    fontFamily: getFontFamily('medium'),
    textAlign: 'center',
    color: Color.black,
    marginBottom: 4,
    marginTop: 10,
    paddingHorizontal: 15,
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'center',
    color: Color.black_light,
    fontFamily: getFontFamily('regular'),
    marginBottom: 3,
    paddingHorizontal: 15,
  },
  button: {
    width: '100%',
    height: 44,
    borderColor: '#4D4D4DC7',
    borderBottomWidth: 0.2,
    borderTopWidth: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#0076FF',
    fontSize: 17,
    fontFamily: getFontFamily('medium'),
    alignItems: 'center',
  },
  buttonCancel: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    color: '#007AFF',
    fontSize: 17,
    fontFamily: getFontFamily('regular'),
    paddingTop: 10,
  },
});

export default EnterPinCode;

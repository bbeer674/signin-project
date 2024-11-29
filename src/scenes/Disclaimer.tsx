import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {IconBack, IconTerms} from '../assets/Icon';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Color} from '../assets/Color';
import {useTranslation} from 'react-i18next';
import {fontText} from '../assets/FontText';
import {SIGNIN_SCREEN_SCENE} from '../Constants';
import Header from '../components/Header';

const {height} = Dimensions.get('window');
type RootStackParamList = {
  [SIGNIN_SCREEN_SCENE]: undefined;
};
function Disclaimer() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {t} = useTranslation();

  const handleAccept = () => {
    navigation.navigate(SIGNIN_SCREEN_SCENE);
  };
  return (
    <LinearGradient
      colors={['#FFFFFF', '#D0D0D0']}
      start={{x: 0, y: 1}}
      end={{x: 0, y: 1}}
      style={styles.container}>
      <Header />
      <View style={styles.scrollViewWrapper}>
        <View style={styles.viewBox}>
          <View style={styles.headerTerms}>
            <IconTerms />
            <Text style={[fontText.Text_Black_Bold_20, {marginLeft: 12}]}>
              {t('terms')}
            </Text>
          </View>
          <View style={styles.borderedView} />
          <View style={styles.boxTerms}></View>
        </View>
        <View style={styles.stickyButtonContainer}>
          <TouchableOpacity style={styles.buttonReject}>
            <Text style={fontText.Text_Purple_14}>{t('reject')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAccept} onPress={handleAccept}>
            <Text style={fontText.Text_White_14}>{t('accept')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewWrapper: {
    flex: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    marginTop: 215,
    shadowColor: Color.black,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.16,
    shadowRadius: 5,
    elevation: 5,
  },
  viewBox: {
    paddingTop: 30,
    paddingHorizontal: 24,
  },
  headerTerms: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  borderedView: {
    borderWidth: 1,
    borderColor: '#E4E4E4',
    borderStyle: 'solid',
    marginTop: 18,
  },
  boxTerms: {},
  stickyButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  buttonReject: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.purple_primary,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 156,
  },
  buttonAccept: {
    borderRadius: 5,
    backgroundColor: Color.purple_primary,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 156,
  },
});
export default Disclaimer;

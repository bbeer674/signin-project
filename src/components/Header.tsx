import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import React from 'react';
import {IconBack} from '../assets/Icon';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconBack />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const GradientHeader = () => (
  <LinearGradient
    colors={['#FFFFFF', '#D0D0D0']}
    start={{x: 0, y: 0}}
    end={{x: 0, y: 1}}
    style={StyleSheet.absoluteFill}
  />
);

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  headerContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: Platform.OS === 'ios' ? 50 : 20,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;

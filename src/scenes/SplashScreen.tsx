import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Color} from '../assets/Color';
import {SELECT_LANGUAGE_SCREEN_SCENE} from '../Constants';

type RootStackParamList = {
  [SELECT_LANGUAGE_SCREEN_SCENE]: undefined;
};

function SplashScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        delay: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigation.navigate(SELECT_LANGUAGE_SCREEN_SCENE);
    });
  }, [navigation, fadeAnim]);

  return (
    <Animated.View
      style={[styles.container, {opacity: fadeAnim}]}></Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.purple_primary,
  },
});

export default SplashScreen;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SelectLanguage from './src/scenes/SelectLanguage';
import SplashScreen from './src/scenes/SplashScreen';
import {
  CONFIRM_PIN_SCREEN_SCENE,
  DISCLAIMER_SCREEN_SCENE,
  ENTER_OTP_SCREEN_SCENE,
  ENTER_PIN_SCREEN_SCENE,
  FORGOT_PASSWORD_SCREEN_SCENE,
  SELECT_LANGUAGE_SCREEN_SCENE,
  SEND_FORGOT_SUCCESS_SCREEN_SCENE,
  SEND_OTP_SCREEN_SCENE,
  SET_PIN_SCREEN_SCENE,
  SET_TOUCH_ID_SCREEN_SCENE,
  SIGNIN_SCREEN_SCENE,
  SPLASH_SCREEN_SCENE,
} from './src/Constants';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Disclaimer from './src/scenes/Disclaimer';
import SignIn from './src/scenes/SignIn';
import ForgotPassword from './src/scenes/ForgotPassword';
import SendForgotSuccess from './src/scenes/SendForgotSuccess';
import SendOTP from './src/scenes/SendOTP';
import EnterOTP from './src/scenes/EnterOTP';
import SetPinCode from './src/scenes/SetPinCode';
import ConfirmPinCode from './src/scenes/ConfirmPinCode';
import SetTouchID from './src/scenes/SetTouchID';
import EnterPinCode from './src/scenes/EnterPinCode';

type RootStackParamList = {
  ENTER_OTP_SCREEN_SCENE: {mobile: string};
  DISCLAIMER_SCREEN_SCENE: {};
  FORGOT_PASSWORD_SCREEN_SCENE: {};
  SELECT_LANGUAGE_SCREEN_SCENE: {};
  SEND_FORGOT_SUCCESS_SCREEN_SCENE: {};
  SEND_OTP_SCREEN_SCENE: {};
  SIGNIN_SCREEN_SCENE: {};
  SPLASH_SCREEN_SCENE: {};
  SET_PIN_SCREEN_SCENE: {};
  CONFIRM_PIN_SCREEN_SCENE: {key: string};
  SET_TOUCH_ID_SCREEN_SCENE: {};
  ENTER_PIN_SCREEN_SCENE: {};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}>
          <Stack.Screen name={SPLASH_SCREEN_SCENE} component={SplashScreen} />
          <Stack.Screen
            name={SELECT_LANGUAGE_SCREEN_SCENE}
            component={SelectLanguage}
          />
          <Stack.Screen name={DISCLAIMER_SCREEN_SCENE} component={Disclaimer} />
          <Stack.Screen name={SIGNIN_SCREEN_SCENE} component={SignIn} />
          <Stack.Screen
            name={FORGOT_PASSWORD_SCREEN_SCENE}
            component={ForgotPassword}
          />
          <Stack.Screen
            name={SEND_FORGOT_SUCCESS_SCREEN_SCENE}
            component={SendForgotSuccess}
          />

          <Stack.Screen name={SEND_OTP_SCREEN_SCENE} component={SendOTP} />
          <Stack.Screen name={ENTER_OTP_SCREEN_SCENE} component={EnterOTP} />
          <Stack.Screen name={SET_PIN_SCREEN_SCENE} component={SetPinCode} />
          <Stack.Screen
            name={CONFIRM_PIN_SCREEN_SCENE}
            component={ConfirmPinCode}
          />
          <Stack.Screen
            name={SET_TOUCH_ID_SCREEN_SCENE}
            component={SetTouchID}
          />
          <Stack.Screen
            name={ENTER_PIN_SCREEN_SCENE}
            component={EnterPinCode}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

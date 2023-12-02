/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
// import SplashScreen from 'react-native-splash-screen';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ToastProvider} from 'react-native-toast-notifications';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Generate from './components/Generate';
import Scanner from './components/Scanner';
import QRCode from './components/QRDetails';
import ScannerDetails from './components/ScannerDetails';
import AllTypeQr from './components/AllTypeQr';
import NameQR from './components/NameQR';
import PhoneQR from './components/PhoneQR';
import GmailQR from './components/GmailQR';
import TextQR from './components/TextQR';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, [])
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  const MyTheme = {
    colors: {
      dark: false,
      background: '#353636',
      border: 'rgb(199, 199, 204)',
    },
  };

  return (
    <ToastProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="TabN"
            component={TabN}
            options={{headerShown: false}}
          />
          <Stack.Screen name="QRCode" component={QRCode} />
          <Stack.Screen name="ScanDetail" component={ScannerDetails} />
          <Stack.Screen name="allQR" component={AllTypeQr} />
          <Stack.Screen name="Name QRCode" component={NameQR} />
          <Stack.Screen name="Phone QRCode" component={PhoneQR} />
          <Stack.Screen name="Gmail QRCode" component={GmailQR} />
          <Stack.Screen name="Text QRCode" component={TextQR} />
        </Stack.Navigator>
      </NavigationContainer>
    </ToastProvider>
  );
}

const TabN = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Generate QR') {
            iconName = focused ? 'qr-code' : 'qr-code';
          } else if (route.name === 'Scanner') {
            iconName = focused ? 'qr-code-scanner' : 'qr-code-scanner';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#b5e1f0',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          // borderTopLeftRadius: 15,
          // borderTopRightRadius: 15,
          height: 50,
          backgroundColor: '#090909',
        },
      })}>
      <Tab.Screen
        name="Generate QR"
        component={AllTypeQr}
        options={{headerShown: false}}
      />
      {/* <Tab.Screen name="Generate QR"
        component={Generate}
        options={{ headerShown: false }}
      /> */}
      <Tab.Screen
        name="Scanner"
        component={Scanner}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({});

export default App;

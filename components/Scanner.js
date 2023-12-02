import { View, Text, StyleSheet, TouchableOpacity, Linking, Button, Alert } from 'react-native'
import Contacts from 'react-native-contacts';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import React, { useState } from 'react'
import { useToast } from "react-native-toast-notifications";

const Screen3 = ({ navigation }) => {
  // const [show, setShow] = useState(false);
  const toast = useToast();
  const onScanner = (e) => {

    console.log('e dta', e.data)
    const data = e.data

    const phoneRegex = /\b\d{10}\b/;
    const match = data.match(phoneRegex);
    const phoneNumber = match ? match[0] : "Phone number not found";
    console.log('Scan Data match', phoneNumber)
    if (phoneNumber === "Phone number not found") {
      // setShow(false)
      // Alert.alert("Invalid Contact Number")
      toast.show('"Invalid Contact Number',{
        type: "warning",
        placement: "top",
        duration: 4000,
        offset: 30,
        animationType: "slide-in",
      })
      console.log("phone number false")
      navigation.navigate('ScanDetail', { data, show: false })
    } else {
      // setShow(true)
      // Alert.alert("Invalid Contact Number")
       // Alert.alert("Invalid Contact Number")
       toast.show("Phone number have in QR Code",{
        type: "success",
        placement: "top",
        duration: 4000,
        offset: 50,
        animationType: "slide-in",
      })
      console.log("phone number true")
      navigation.navigate('ScanDetail', { data, show:true })
    }
    // navigation.navigate('ScanDetail',{data,show})
    console.log('edata', e)

  }
  return (
    // style={{ flex: 1, flexDirection: 'column', flexWrap: 'wrap' }}
    <View style={{ flex: 1, flexDirection: 'column', flexWrap: 'wrap' }}>
      <QRCodeScanner
        onRead={(e) => onScanner(e)}
        showMarker
        markerStyle={{ borderColor: 'lightblue', borderRadius: 20 }}
        reactivate={true}
        reactivateTimeout={3000}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        style={styles.qrScanner}
      />
      {/* <Button title='scan '/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
    // marginTop:200
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  },
  qrScanner: {
    width: 100,
    height: 200,
    borderWidth: 2,
    borderColor: 'green',
  }
});

export default Screen3
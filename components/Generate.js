import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import PhoneInput from "react-native-phone-number-input";
import Icon from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Share from 'react-native-share';
import QRCode from 'react-native-qrcode-svg'
import React, { useEffect, useState } from 'react'

const Generate = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('')
  const [initialItemState, setInitialItemState] = useState('')
  const [show, setShow] = useState(false);
  const [productQRref, setProductQRref] = useState({});
  // const [base64, setBase64] = useState("")


  const Generate = () => {
    console.log('navigator', navigation)

    const data = `Name:${name}/n Phone:${phone}/n Email:${email}`
    navigation.navigate('QRCode', { data })
    // setInitialItemState(data)
    // setShow(true)
    // console.warn(data)
  }
  // const QRShare = () => {

  //   productQRref?.toDataURL(data => {
  //     const shareOptions = {
  //       url: `data:image/png;base64,${data}`,
  //     };

  //     Share.open(shareOptions);
  //   })

  // }
  return (
    // '#d3f3fb'
    // color={'#69d6fa'}
    <LinearGradient colors={['#60402f', '#d3f3fb', '#57d723']} style={{ height: '100%' }}>
      <View >
        <LinearGradient colors={['#83d9f4', '#57d723',]} style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
          <Icon style={{ textAlign: 'center', marginTop: 20, marginBottom: 30 }} name='qrcode' size={50} color={'#f3f8f9'} />
        </LinearGradient>
        {/* <LinearGradient colors={['#d9b03c', '#d9493c', '#6cd93c']} style={{padding:10}}> */}
        <Text style={styles.scan}>Generate <Text style={{ color: '#154a57' }}>QRCode</Text></Text>
        {/* </LinearGradient> */}
        <View style={styles.incon}>
          <TextInput style={styles.input}
            placeholderTextColor={"#7879af"}
            value={name}
            placeholder='Enter Your Name'
            onChangeText={(text) => setName(text)} />
          <TextInput style={styles.input}
            keyboardType='numeric'
            placeholderTextColor={"#7879af"}
            value={phone}
            placeholder='Enter Your Phone Number'
            onChangeText={(text) => setPhone(text)} />
          {/* <View >
            <PhoneInput
              placeholder='Enter Phone'
              textContainerStyle={{ placeholderTextColor: '#1c1d50', paddingVertical: 0 }}
              // placeholderTextColor={"#7879af"}
              containerStyle={styles.pinput}
              defaultValue={phone}
              defaultCode="IN"
              layout="first"
              onChangeText={(text) => {
                setPhone(text);
              }}

            />
          </View> */}
          <TextInput style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor={"#7879af"}
            value={email}
            placeholder='Enter Your Email'
            onChangeText={(text) => setEmail(text)} />
          <LinearGradient
            colors={['#097195', '#57d723']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }} style={styles.btn}>
            <TouchableOpacity onPress={Generate}>
              {/* <LinearGradient colors={['#0d8cb0', '#d3f3fb', '#02a2de']}> */}
              <Text style={{ textAlign: 'center', color: '#faf7f9', fontWeight: '500' }}>Create</Text>
              {/* </LinearGradient> */}
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  pinput: {
    height: 50,
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    color: 'blue',
    borderRadius: 20,
    fontSize: 5
  },
  sharebtn: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'

  },
  scan: {
    // color: '#1c1d50',
    color: 'white',
    fontSize: 30,
    marginTop: 20,
    textAlign: 'center',
    // fontWeight:'5'
    // bold: {fontWeight: 'bold'}
    fontWeight: 'bold',
    fontFamily: 'EuphemiaUCAS-Bold'
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 40,
    width: '80%',
    margin: 5,
    padding: 5,
    paddingLeft: 20,
    borderRadius: 35,
    color: 'black',
    fontSize: 10,
    backgroundColor: 'white'

  },
  incon: {
    alignItems: 'center',
    marginTop: '20%'

  },
  btn: {
    width: 150,
    marginTop: 40,
    borderRadius: 20,
    // backgroundColor: '#1c1d50',
    padding: 10,
    // borderWidth:2,

  },
  QR: {
    marginTop: 5,
    alignItems: 'center'

  },
  share: {
    width: 200,
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: '#1c1d50',
    padding: 10,
    height: 45
  },
  linearGradient: {

  }
})
export default Generate
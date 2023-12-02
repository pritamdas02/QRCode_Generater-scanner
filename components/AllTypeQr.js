import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialCommunity from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
// import Icon from 'react-native-vector-icons/dist/AntDesign';
const AllTypeQr = props => {
  const onhandleName = () => {
    props.navigation.navigate('Name QRCode');
  };
  const onhandlePhone = () => {
    props.navigation.navigate('Phone QRCode');
  };
  const onhandleGmail = () => {
    props.navigation.navigate('Gmail QRCode');
  };
  const onhandleText = () => {
    props.navigation.navigate('Text QRCode');
  };
  return (
    <LinearGradient
      colors={[ '#ffffff', '#00008B']}
      style={{height: '100%'}}>
      <LinearGradient
        colors={['#00008B', '#ffffff', ]}
        style={{
          height: '30%',
          width: '100%',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '12%',
          }}>
          <Text style={styles.scan}>Generate</Text>
          <Icon
            style={{textAlign: 'center', marginTop: 20, marginBottom: 30}}
            name="qrcode"
            size={40}
            color={'#f3f8f9'}
          />
          <Text style={{color: '#a5cc11', fontSize: 30}}>QRCode</Text>
        </View>
      </LinearGradient>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 20,
          marginTop: '15%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity style={styles.btn} onPress={() => onhandleName()}>
          <View style={{alignItems: 'center'}}>
            <MaterialIcons name="drive-file-rename-outline" size={25} color={'orange'} />
            <Text style={styles.btnText}>Name</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => onhandlePhone()}>
          <View style={{alignItems: 'center'}}>
            <MaterialCommunityIcons name="phone-dial" size={25}  color={'green'} />
            <Text style={styles.btnText}>Phone</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => onhandleGmail()}>
          <View style={{alignItems: 'center'}}>
            <MaterialCommunity name="gmail" size={25} color={'red'} />
            <Text style={styles.btnText}>Gmail</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => onhandleText()}>
          <View style={{alignItems: 'center'}}>
            <Entypo name="text" size={25} color={'yellow'}/>
            <Text style={styles.btnText}>Text</Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default AllTypeQr;

const styles = StyleSheet.create({
  scan: {
    color: 'white',
    fontSize: 30,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'EuphemiaUCAS-Bold',
  },
  btn: {
    width: '30%',
    backgroundColor: '#d8d7da',
    paddingVertical: '10%',
    borderRadius: 10,
    elevation: 4,
  },
  btnText: {
    textAlign: 'center',
    color: 'black',
    alignItems: 'center',
  },
});

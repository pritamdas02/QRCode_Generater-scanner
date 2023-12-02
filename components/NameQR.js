import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import React, {useState} from 'react';

const NameQR = props => {
  const [name, setName] = useState('');
  const onGenerateQR = () => {
    const data=`Name:${name}`
    props.navigation.navigate('QRCode',{data});
  };
  return (
    // <View style={{height: '100%', backgroundColor: 'white'}}>
    <LinearGradient
      colors={['#57d723','#ffffff', '#00008B']}
      style={{height: '100%'}}>
      <View style={{margin: '15%', gap: 10, marginTop: '45%'}}>
        <Text style={{fontWeight: 'bold'}}>Enter name</Text>
        <TextInput
          style={{
            borderColor:'grey',
            borderWidth:1,
            height: '22%',
            borderRadius: 10,
            paddingHorizontal: 10,
          }}
          placeholder="Type here"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            borderRadius: 10,
            paddingVertical: 15,
            marginTop:'5%'
          }}
          onPress={() => onGenerateQR()}>
          <Text style={{textAlign: 'center', color: 'white'}}>
            Generate QRCode
          </Text>
        </TouchableOpacity>
      </View>
      </LinearGradient>
  );
};

export default NameQR;

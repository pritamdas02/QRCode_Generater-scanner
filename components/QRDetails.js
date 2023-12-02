import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'
import Share from 'react-native-share';
import QRCode from 'react-native-qrcode-svg'
import React, { useState } from 'react'

const QRDetails = (props) => {
  const data = props.route.params.data;
  const [initialItemState, setInitialItemState] = useState(data)
  const [productQRref, setProductQRref] = useState({});
  const [qrData, setQRdata] = useState(data)
  // console.log('QR', props.route.params.data)

  const QRShare = () => {

    productQRref?.toDataURL(data => {
      const shareOptions = {
        url: `data:image/png;base64,${data}`,
      };

      Share.open(shareOptions);
    })

  }
  return (
    <LinearGradient colors={['#57d723','#ffffff', '#00008B']} style={{ height: '100%' }}>
      <View style={styles.QRDetail}>
        <LinearGradient colors={['#575858', '#d3f3fb', '#575858']} style={{ marginTop: 50, width: '90%', padding: 15 }}>
          {/* <View style={{marginTop:50,width:'90%',borderRadius:5,borderWidth:2,padding:15}}> */}
          <Text style={{ color: 'black', textAlign: 'center' }}>
            {qrData}
          </Text>
        </LinearGradient>
        {/* </View> */}
        <Text style={{ textAlign: 'center', color: '#1c1d50', marginTop: '20%',fontWeight:'bold' }}>QR Code</Text>
        <View style={styles.QR}>
          <QRCode
            value={initialItemState}
            size={130}
            color='black'
            backgroundColor='white'
            getRef={(c) => setProductQRref(c)}
            quietZone={10}
             />
        </View>
        <LinearGradient style={styles.share} colors={['#097195','#57d723']} start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }} >
          <TouchableOpacity onPress={QRShare}>
            <View style={styles.sharebtn}>
              <FontAwesome name="share-alt" size={20} color={'white'} />
              <Text style={{ textAlign: 'center', color: '#ffffff', marginLeft: 10 }}>Share</Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  QRDetail: {
    alignItems: 'center',
    // backgroundColor:'#d3f3fb',
    height: '100%'

  },
  QR: {
    marginTop: 5,
    alignItems: 'center'

  },
  share: {
    width: 150,
    marginTop: 30,
    borderRadius: 30,
    // backgroundColor: '#1c1d50',
    padding: 10,
    height: 40,
    alignItems: 'center'
  },
  sharebtn: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'

  },

})
export default QRDetails
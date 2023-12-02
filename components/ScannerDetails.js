import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import LinearGradient from 'react-native-linear-gradient'
import React, { useState, useEffect } from 'react'
import Contacts from 'react-native-contacts';
import QRCode from 'react-native-qrcode-svg'
import { useToast } from "react-native-toast-notifications";

const ScannerDetails = (props) => {
    const toast = useToast();
    console.log('props data', props)
    const scData = props.route.params.data
    console.log('scdata', scData)
    const showBtn = props.route.params.show
    console.log('show data', showBtn)
    const [scanData, setScanData] = useState(scData)
    const [initialItemState, setInitialItemState] = useState(scData)
    // const [show, setShow] = useState(false);
    const lines = scData.split('/n');

    // Find the line with the name information
    const nameLine = lines.find(line => line.includes('Name:'));

    // Extract the name value
    let name = '';
    if (nameLine) {
        name = nameLine.split(':')[1];
    }

    // console.log('show name data', name)

    const saveContact = async () => {
        console.log('btn', scData)
        const phoneRegex = /\b\d{10}\b/;
        const match = scData.match(phoneRegex);
        const phoneNumber = match ? match[0] : "Phone number not found";
        console.log('match', phoneNumber)
        console.log('show name data', name)
        let newPerson = {
            phoneNumbers: [{
                label: "mobile",
                number: phoneNumber,
            }],
            familyName: "Nietzsche",
            givenName: "Friedrich",
        };
        await Contacts.openContactForm(newPerson);

    }

    console.log('scan', scData)
    return (
        <LinearGradient colors={['#57d723','#ffffff', '#00008B']} style={{ height: '100%' }}>
            <View style={{ alignItems: 'center', height: '100%' }}>
                <LinearGradient colors={['#575858', '#d3f3fb', '#575858']} style={{ marginTop: 50, width: '90%', shadowColor: 'green', padding: 10, }}>
                    {/* <View style={{ marginTop: 50, width: '90%', borderRadius: 5, borderWidth: 2, padding: 10, }}> */}
                    <Text style={{ color: 'black', textAlign: 'center', padding: 20 }}>{scanData}</Text>
                    {/* </View> */}
                </LinearGradient>

                <View style={styles.QR}>
                    <QRCode value={initialItemState} size={130} padding={20} quietZone={10} />
                </View>
                {showBtn ?
                    <TouchableOpacity style={styles.save} onPress={saveContact}>
                        <LinearGradient style={styles.save} colors={['#097195','#57d723']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                            <View style={styles.savebtn}>
                                <AntDesign name="contacts" size={20} color={'white'} />
                                <Text style={{ textAlign: 'center', color: 'whitesmoke', marginLeft: 10 }}>Save</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity> : null
                }
            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    QR: {
        marginTop: 50,
        alignItems: 'center'

    },
    save: {
        width: 150,
        marginTop: 30,
        borderRadius: 30,
        // backgroundColor: '#1c1d50',
        padding: 10,
        height: 45,
        alignItems: 'center'
    },
    savebtn: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    }
})

export default ScannerDetails
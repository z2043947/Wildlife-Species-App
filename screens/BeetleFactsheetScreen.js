import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    ActivityIndicator,
    Button,
    Alert,
    ScrollView,
    Dimensions,
    ImageBackground
} from 'react-native';
import CardItem from '../component/CardItem'
import { darkGreen, darkRed,classIndex,BeetleFactdata } from '../GlobalVars'
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const borderWidth = 6;
const borderLength = 50;
const borderWidthSmall = 3;
const borderLongthSmall = 40;
const BeetlesIcons = [require("../assets/Amphistomus_cunninghamensis.png"), require("../assets/Amphistomus_primonactus.png"),
    require("../assets/Aulcopris_maximus.png"), require("../assets/Amphistomus_trispiculatus.png"),
    require("../assets/Cardiothorax_femoratus.png"), require("../assets/Cardiothorax_iridipes.png"),
    require("../assets/Coripera_morleyana.png"), require("../assets/Diorygopyx_asciculifer.png"),
    require("../assets/Diorygopyx_duplodentatus.png"), require("../assets/Diorygopyx_incrassatus.png"),
    require("../assets/Diorygopyx_niger.png"), require("../assets/Diorygopyx_simpliciclunis.png"),
    require("../assets/Figulus_trilobus.png"), require("../assets/Lissapterus_hopsoni.png"),
    require("../assets/Mitophyllus_ocularis.png"), require("../assets/Onthophagus_compositus.png"),
    require("../assets/Onthophagus_turrbal.png"), require("../assets/Safrina_dekeyzeri.png")]
const BeetleFactsheetScreen = props => {
    const [icon, setIcon] = useState();
    const [iconWH, setIconWH] = useState(1);
    const scientificName = BeetleFactdata[classIndex]["Genus"] + " " + BeetleFactdata[classIndex]["Specific epitaph"]
    useEffect(() => {
        function GetWH() {
            let src = BeetlesIcons[classIndex]
            setIcon(src)
            let width = Image.resolveAssetSource(src).width
            let height = Image.resolveAssetSource(src).height
            console.log("Beetle Height, width = ", src, width, height)
            setIconWH(width / height)
        }
        GetWH()
    })
    let TouchableCmp = TouchableOpacity;
    return (
        <ScrollView style={styles.screen}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, width: screenWidth * 0.8, marginLeft: screenWidth * 0.1 }}>
           <TouchableCmp onPress={() => { props.navigation.navigate('Beetle') }} useForeground>
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', width: screenWidth * 0.26, height: screenWidth * 0.12 }}>
                        <Text style={{ color: 'white', fontFamily: 'normal', fontSize: 18, paddingLeft: 3 }}>
                            <Image style={{ width: screenWidth * 0.06, height: screenWidth * 0.06 }} source={require('../assets/back.png')} /> Back</Text>
                </View>
            </TouchableCmp>
            <TouchableCmp onPress={() => { props.navigation.navigate('Home') }} useForeground>
                <View style={{ justifyContent: 'center', alignItems: 'center',  backgroundColor: 'green', width: screenWidth * 0.25, height: screenWidth * 0.12 }}>
                        <Text style={{ color: 'white', fontFamily: 'normal', fontSize: 18, paddingLeft: 3 }}>
                            <Image style={{ width: screenWidth * 0.06, height: screenWidth * 0.06 }} source={require('../assets/home.png')} /> Home</Text>
                </View>
            </TouchableCmp>
            </View>

            <CardItem style={{ marginTop: 20, marginLeft: screenWidth * 0.05, width: screenWidth * 0.9, display: 'flex', flexDirection: 'column', padding: 15, backgroundColor: '#dcdcdc' }}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{BeetleFactdata[classIndex]["Common Name"].toUpperCase()} FACT SHEET </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ backgroundColor: 'black', width: screenWidth * 0.3, height: screenWidth * 0.3, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ position: 'absolute', top: 0, left: 0, width: borderWidthSmall, height: borderLongthSmall, backgroundColor: darkGreen, zIndex: 1 }} />
                        <View style={{ position: 'absolute', top: 0, left: 0, width: borderLongthSmall, height: borderWidthSmall, backgroundColor: darkGreen, zIndex: 1 }} />
                        <View style={{ position: 'absolute', bottom: 0, left: 0, width: borderWidthSmall, height: borderLongthSmall, backgroundColor: darkGreen, zIndex: 1 }} />
                        <View style={{ position: 'absolute', bottom: 0, left: 0, width: borderLongthSmall, height: borderWidthSmall, backgroundColor: darkGreen, zIndex: 1 }} />
                        <View style={{ position: 'absolute', bottom: 0, right: 0, width: borderWidthSmall, height: borderLongthSmall, backgroundColor: darkGreen, zIndex: 1 }} />
                        <View style={{ position: 'absolute', bottom: 0, right: 0, width: borderLongthSmall, height: borderWidthSmall, backgroundColor: darkGreen, zIndex: 1 }} />
                        <View style={{ position: 'absolute', top: 0, right: 0, width: borderWidthSmall, height: borderLongthSmall, backgroundColor: darkGreen, zIndex: 1 }} />
                        <View style={{ position: 'absolute', top: 0, right: 0, width: borderLongthSmall, height: borderWidthSmall, backgroundColor: darkGreen, zIndex: 1 }} />

                        {
                            iconWH > 1 ?
                                <Image source={icon} style={{ width: screenWidth * 0.3, height: screenWidth * 0.3 / iconWH }} />
                                :
                                <Image source={icon} style={{ width: screenWidth * 0.3 * iconWH, height: screenWidth * 0.3 }} />
                        }
                    </View>
                </View>

                <View style={styles.textContainer} >
                    <Text style={styles.textTitle}>Scientific Name: </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text style={styles.textBodyitalic}>{scientificName}</Text>
                        <Text style={styles.textBody}>{BeetleFactdata[classIndex]["Morphospecies"]}</Text>
                        <Text style={styles.textBody}>{BeetleFactdata[classIndex]["Author"]}</Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Description: </Text>
                    <Text style={styles.textBody}>{BeetleFactdata[classIndex]["Description"]}</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Distribution: </Text>
                    <Text style={styles.textBody}>{BeetleFactdata[classIndex]["Distribution"]}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Habitat: </Text>
                    <Text style={styles.textBody}>{BeetleFactdata[classIndex]["Habitat"]}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Life History: </Text>
                    <Text style={styles.textBody}>{BeetleFactdata[classIndex]["Life History"]}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={{ fontFamily: 'normal', fontSize: 16, marginBottom: 5 }}>References: </Text>
                    {
                        BeetleFactdata[classIndex]["References"].split('+').map(
                            (tmp, index) => (
                                <Text key={tmp} style={styles.textBodyRef}>{index + 1}.{tmp}</Text>
                            )
                        )
                    }

                </View>
            </CardItem>
                          
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'black',
        marginTop: 25
    },
    container: {
        display: "flex",
        flexDirection: "column",
        marginBottom: 50
    },
    imageCard: {
        width: screenWidth * 0.80,
        height: screenWidth * 0.80,
        backgroundColor: '#dcdcdc',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 20,
        fontFamily: 'normal',
        textAlign: "center"
  },

    imgPreview: {
        width: 300,
        height: 300,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden'
    },
    name: {
        fontSize: 20,
        marginVertical: 20,
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    btnBox: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        margin: 5,
        padding: 5,
    },
    textTitle: {
        fontFamily: 'normal',
        fontSize: 16
    },
    textBody: {
        fontFamily: 'normal',
        fontSize: 14,
        textAlign: 'justify',
        marginTop: 5,
    },
    textBodyitalic: {
        fontFamily: 'normal',
        fontSize: 14,
        fontStyle: 'italic',
        textAlign: 'justify',
        marginTop: 5,
    },
    textBodyRef: {
        fontFamily: 'normal',
        fontSize: 14,
        textAlign: 'justify',
    },
    textContainer: {
        marginTop: 10
    }
});

export default BeetleFactsheetScreen
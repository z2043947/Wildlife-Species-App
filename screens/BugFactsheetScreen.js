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
import { darkGreen, darkRed, classIndex, setClassIndex, BugFactdata } from '../GlobalVars'
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const borderWidth = 6;
const borderLength = 50;
const borderWidthSmall = 3;
const borderLongthSmall = 40;
const BugsIcons = [require("../assets/Daerlac_cephalotes_UNSW_ENT_00033806_cropped-sharpen-scale-500px.png"), require("../assets/Epimixia_dysmica_AMNH_PBI_00018017_cropped-sharpen-scale.png"),
    require("../assets/Epimixia_tropica_AMNH_PBI_00018500_crop-sharpen-scale.png"), require("../assets/Epimixia_vitatta_AMNH_PBI_00018402_cropped-scale.png"),
    require("../assets/Epimixia_vulturna_AMNH_PBI_00018280_crop-scale.png"), require("../assets/Eritingis_aporema_UNSW_ENT_00009836_crop-scale.png"),
    require("../assets/Eritingis_trivirgata_UNSW_ENT_00028081_crop-scale.png"), require("../assets/Kirkaldyella_rugosa_AMNH_PBI_00402151_cropped-scale.png"),
    require("../assets/Kirkaldyella_schuhi_AMNH_PBI_00008953_crop-scale.png"), require("../assets/Myrmecoroides_grossi_AMNH_PBI_00033724_cropped-sharpen-scale.png"),
    require("../assets/Oncophysa_vesiculata_4x_AMNH_PBI_00013208_cropped-sharpen-scale.png"), require("../assets/Setocoris_binataphillis_UNSW_ENT_00009078_cropped-sharpen-scale.png"),
    require('../assets/Woodwardiola_sp_M_5x-200-UNSW_ENT_00019594_crop-scale.png')]

const BugFactsheetScreen = props => {
    const [icon, setIcon] = useState();
    const [iconWH, setIconWH] = useState(1);
    const scientificName = BugFactdata[classIndex]["Genus"] + " " + BugFactdata[classIndex]["Specific epitaph"]
    useEffect(() => {
        function GetWH() {
            let src = BugsIcons[classIndex]
            setIcon(src)
            let width = Image.resolveAssetSource(src).width
            let height = Image.resolveAssetSource(src).height
            console.log("Bug Height, width = ", src, width, height)
            setIconWH(width / height)
        }
        GetWH()
    })


    let TouchableCmp = TouchableOpacity;
  
return (
        <ScrollView style={styles.screen}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, width: screenWidth * 0.8, marginLeft: screenWidth * 0.1 }}>
           <TouchableCmp onPress={() => { props.navigation.navigate('Bug') }} useForeground>
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', width: screenWidth * 0.26, height: screenWidth * 0.12 }}>
                    <Text style={{ color: 'white', fontFamily: 'normal', fontSize: 18, paddingLeft: 3 }}>
                        <Image style={{ width: screenWidth * 0.06, height: screenWidth * 0.06 }} source={require('../assets/back.png')} /> Back</Text>
                </View>
            </TouchableCmp>
            <TouchableCmp onPress={() => { props.navigation.navigate('Home') }} useForeground>
                <View style={{ justifyContent: 'center', alignItems: 'center',  backgroundColor: 'green', width: screenWidth * 0.26, height: screenWidth * 0.12 }}>
                    <Text style={{ color: 'white', fontFamily: 'normal', fontSize: 18, paddingLeft: 3 }}>
                        <Image style={{ width: screenWidth * 0.06, height: screenWidth * 0.06 }} source={require('../assets/home.png')} /> Home</Text>
                </View>
            </TouchableCmp>
            </View>

            <CardItem style={{ marginTop: 20, marginLeft: screenWidth * 0.05, width: screenWidth * 0.9, display: 'flex', flexDirection: 'column', padding: 15, backgroundColor: '#dcdcdc' }}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{BugFactdata[classIndex]["Common Name"].toUpperCase()} FACT SHEET </Text>
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

                <View style={styles.textContainer}>
                <Text style={styles.textTitle}>Scientific Name: </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Text style={styles.textBodyitalic}>{scientificName}</Text>
                    <Text style={styles.textBody}>{BugFactdata[classIndex]["Morphospecies"]}</Text>
                    <Text style={styles.textBody}>{BugFactdata[classIndex]["Author"]}</Text>
                </View>
                </View>
                <View style={styles.textContainer}>
                <Text style={styles.textTitle}>Description: </Text>
                <Text style={styles.textBody}>{BugFactdata[classIndex]["Description"]}</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Distribution: </Text>
                <Text style={styles.textBody}>{BugFactdata[classIndex]["Distribution"]}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Habitat: </Text>
                <Text style={styles.textBody}>{BugFactdata[classIndex]["Habitat"]}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Life History: </Text>
                <Text style={styles.textBody}>{BugFactdata[classIndex]["Life History"]}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={{ fontFamily: 'normal', fontSize: 14, marginBottom: 5 }}>References: </Text>
                    {
                    BugFactdata[classIndex]["References"].split('+').map(
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

export default BugFactsheetScreen
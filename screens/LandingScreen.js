import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    TouchableNativeFeedback,
    Platform
} from 'react-native'
import { darkRed,darkGreen } from '../GlobalVars'

//import { HeaderButtons, Item } from 'react-navigation-header-buttons';

//import CustomHeaderButton from '../component/HeaderButton';
import Card from '../component/Card';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const borderWidth = 6;
const borderLength = 50;
//const darkRed = "red"

const LandingScreen = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <ScrollView style={styles.screen}>
            <TouchableCmp onPress={() => { props.navigation.navigate('About') }} useForeground>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, marginLeft: screenWidth * 0.7, backgroundColor: 'green', width: screenWidth * 0.25, height: screenWidth * 0.12 }}>
                    <Text style={{ color: 'white', fontFamily: 'normal', fontSize: 18 }}>About</Text>
                </View>
            </TouchableCmp>

            <Card style={styles.InsectBox}>
                <View style={{ position: 'absolute', top: 0, left: screenWidth * 0.05, width: borderWidth, height: borderLength, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', top: 0, left: screenWidth * 0.05, width: borderLength, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', bottom: 0, left: screenWidth * 0.05, width: borderWidth, height: borderLength, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', bottom: 0, left: screenWidth * 0.05, width: borderLength, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', bottom: 0, right: screenWidth * 0.05, width: borderWidth, height: borderLength, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', bottom: 0, right: screenWidth * 0.05, width: borderLength, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', top: 0, right: screenWidth * 0.05, width: borderWidth, height: borderLength, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', top: 0, right: screenWidth * 0.05, width: borderLength, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                <TouchableCmp onPress={() => { props.navigation.navigate('AI') }} useForeground>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageBg} source={require('../assets/AI_Icon.png')} />
                        <View style={styles.textBox}>
                            <Text style={styles.textTop}>WILDLIFE SPECIES</Text>
                            <Text style={styles.textBot}>IDENTIFICATION</Text>
                        </View>
                    </View>
                </TouchableCmp>
                {/* <TouchableCmp onPress={()=> {}} useForeground> */}
                {/* </TouchableCmp> */}
            </Card>
            <Card style={styles.InsectBox}>
                <View style={{ position: 'absolute', top: 0, left: screenWidth * 0.05, width: borderWidth, height: borderLength, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', top: 0, left: screenWidth * 0.05, width: borderLength, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', bottom: 0, left: screenWidth * 0.05, width: borderWidth, height: borderLength, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', bottom: 0, left: screenWidth * 0.05, width: borderLength, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', bottom: 0, right: screenWidth * 0.05, width: borderWidth, height: borderLength, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', bottom: 0, right: screenWidth * 0.05, width: borderLength, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', top: 0, right: screenWidth * 0.05, width: borderWidth, height: borderLength, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', top: 0, right: screenWidth * 0.05, width: borderLength, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                <TouchableCmp onPress={() => { props.navigation.navigate('Snail') }} useForeground>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageBg} source={require('../assets/ProtorugosaalpicaIcon.png')} />
                        <View style={styles.textBox}>
                            <Text style={styles.textTop}>SNAIL</Text>
                            <Text style={styles.textBot}>FACT SHEETS</Text>
                        </View>
                   </View>
                </TouchableCmp>
            </Card>
            <Card style={styles.InsectBox}>
                <View style={{ position: 'absolute', top: 0, left: screenWidth * 0.05, width: borderWidth, height: borderLength, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', top: 0, left: screenWidth * 0.05, width: borderLength, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', bottom: 0, left: screenWidth * 0.05, width: borderWidth, height: borderLength, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', bottom: 0, left: screenWidth * 0.05, width: borderLength, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', bottom: 0, right: screenWidth * 0.05, width: borderWidth, height: borderLength, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', bottom: 0, right: screenWidth * 0.05, width: borderLength, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', top: 0, right: screenWidth * 0.05, width: borderWidth, height: borderLength, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', top: 0, right: screenWidth * 0.05, width: borderLength, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                <TouchableCmp onPress={() => { props.navigation.navigate('Bug') }} useForeground>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageBg} source={require('../assets/WoodwardiolaIcon.png')} />
                        <View style={styles.textBox}>
                            <Text style={styles.textTop}>BUG</Text>
                            <Text style={styles.textBot}>FACT SHEETS</Text>
                        </View>
                    </View>
                </TouchableCmp>
            </Card>
            <Card style={styles.InsectBox}>
                <View style={{ position: 'absolute', top: 0, left: screenWidth * 0.05, width: borderWidth, height: borderLength, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', top: 0, left: screenWidth * 0.05, width: borderLength, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', bottom: 0, left: screenWidth * 0.05, width: borderWidth, height: borderLength, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', bottom: 0, left: screenWidth * 0.05, width: borderLength, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', bottom: 0, right: screenWidth * 0.05, width: borderWidth, height: borderLength, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', bottom: 0, right: screenWidth * 0.05, width: borderLength, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', top: 0, right: screenWidth * 0.05, width: borderWidth, height: borderLength, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', top: 0, right: screenWidth * 0.05, width: borderLength, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                <TouchableCmp onPress={() => { props.navigation.navigate('Spider') }} useForeground>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageBg} source={require('../assets/StorenosomaIcon.png')} />
                        <View style={styles.textBox}>
                            <Text style={styles.textTop}>SPIDER</Text>
                            <Text style={styles.textBot}>FACT SHEETS</Text>
                        </View>
                    </View>
                </TouchableCmp>
            </Card>
            <Card style={styles.InsectBox}>
                <View style={{ position: 'absolute', top: 0, left: screenWidth * 0.05, width: borderWidth, height: borderLength, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', top: 0, left: screenWidth * 0.05, width: borderLength, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', bottom: 0, left: screenWidth * 0.05, width: borderWidth, height: borderLength, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', bottom: 0, left: screenWidth * 0.05, width: borderLength, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', bottom: 0, right: screenWidth * 0.05, width: borderWidth, height: borderLength, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', bottom: 0, right: screenWidth * 0.05, width: borderLength, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', top: 0, right: screenWidth * 0.05, width: borderWidth, height: borderLength, backgroundColor: darkGreen, zIndex: 1 }} />
                <View style={{ position: 'absolute', top: 0, right: screenWidth * 0.05, width: borderLength, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                <TouchableCmp onPress={() => { props.navigation.navigate('Beetle') }} useForeground>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageBg} source={require('../assets/icon.png')} />
                        <View style={styles.textBox}>
                            <Text style={styles.textTop}>BEETLE</Text>
                            <Text style={styles.textBot}>FACT SHEETS</Text>
                        </View>
                    </View>
                </TouchableCmp>
            </Card>

         </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'black',
        marginTop: 25
    },
    title: {
        // fontWeight: "bold",
        fontSize: 23,
        fontFamily: 'normal'
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#696969',
        padding: 0.5,
        zIndex: -1
    },
    imageBg: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%'
    },
    InsectBox: {
        width: screenWidth,
        height: screenHeight * 0.45,
        marginVertical: screenHeight * 0.02,
        backgroundColor: 'black',
        overflow: 'hidden',
        paddingHorizontal: screenWidth * 0.05,
    },

    textBox: {
        position: "absolute",
        width: screenWidth * 0.60,
        height: screenHeight * 0.12,
        backgroundColor: darkGreen,
        // left:0,
        marginLeft: screenWidth * 0.02,
        marginTop: screenHeight * 0.32,
        paddingHorizontal: screenWidth * 0.02,
        paddingVertical: screenHeight * 0.01,
        zIndex: 1,
    },
    textTop: {
        paddingTop: 4,
        paddingLeft: 4,
        fontSize: 22,
        color: "white",
        fontFamily: 'normal'
    },
    textBot: {
        fontWeight: "bold",
        paddingBottom: 4,
        paddingLeft: 4,
        fontSize: 22,
        color: "white",
        fontFamily: 'normal'
    }
})

LandingScreen.navigationOptions = navData => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    if (Platform.OS === 'android') {
        return {
             headerTitle: () =>
                (<View style={{ width: '100%', alignItems: "center", height: '100%', justifyContent: "center" }}>
                <Text style={styles.title} >Wildlife Species Detector</Text>
                </View>)
            ,
            headerLeft: () => (
    
                <View style={{ width: '100%', height: '100%', margin: screenWidth * 0.02, justifyContent: "center", alignItems: "center" }}>
                    <TouchableCmp onPress={() => { }} useForeground>
                        <Image style={{ width: screenWidth * 0.12, height: screenWidth * 0.12 }} source={require('../assets/icon.png')} />
                    </TouchableCmp>
                </View>
    
            ),
            headerRight: () => (
                <View style={{ width: '100%', height: '100%', margin: screenWidth * 0.02, justifyContent: "center", alignItems: "center" }}>
                    <TouchableCmp onPress={() => {navData.navigation.navigate('About') }} useForeground>
                        <Image style={{ width: screenWidth * 0.08, height: screenWidth * 0.08 }} source={require('../assets/more.png')} />
                    </TouchableCmp>
                </View>
            )
        };
    } else {

    }
    return {
        // headerTitle: 'Signup',
        headerTitle: () =>
            (<View style={{ width: '100%', alignItems: "center", height: '100%', justifyContent: "center" }}>
                <Text style={styles.title} >Urban Pest Scanner</Text>
            </View>)
        ,
        headerLeft: () => (

            <View style={{ width: '100%', height: '100%', margin: screenWidth * 0.02, justifyContent: "center", alignItems: "center" }}>
                <TouchableCmp onPress={() => { }} useForeground>
                    <Image style={{ width: screenWidth * 0.12, height: screenWidth * 0.12 }} source={require('../assets/icon.png')} />
                </TouchableCmp>
            </View>

        ),
        headerRight: () => (
            <View style={{ width: '100%', height: '100%', margin: screenWidth * 0.02, justifyContent: "center", alignItems: "center" }}>
                <TouchableCmp onPress={() => {navData.navigation.navigate('About') }} useForeground>
                    <Image style={{ width: screenWidth * 0.08, height: screenWidth * 0.08 }} source={require('../assets/more.png')} />
                </TouchableCmp>
            </View>
        )
    };
};

export default LandingScreen
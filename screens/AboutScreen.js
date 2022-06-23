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
} from 'react-native';
import * as Font from "expo-font";
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const AboutScreen = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <ScrollView style={styles.screen}>
            <TouchableCmp onPress={() => { props.navigation.navigate('Home') }} useForeground>
                <View style={{ justifyContent: 'center', alignItems: 'center',marginTop: 20, marginLeft: screenWidth * 0.7, backgroundColor: 'green', width: screenWidth * 0.25, height: screenWidth * 0.12 }}>
                    <Text style={{ color: 'white', fontFamily: 'normal', fontSize: 16, paddingLeft: 3 }}>
                        <Image style={{ width: screenWidth * 0.03, height: screenWidth * 0.03 }} source={require('../assets/home.png')} />  Home</Text>
                </View>
            </TouchableCmp>
            <View style={styles.textBox}>
                <Text style={ styles.title} >About</Text>
                <Text style={styles.paragraph1}>The Wildlife Species Detector is an AI-driven application that can be used to detect and identify a range of wild life organisms that is geared towards the identification of a range of invertebrate species that have been negatively impacted by the 2019 / 20 Black Summer bushfires.</Text>
                <Text style={styles.paragraph1}>The app provides detailed fact sheets for over 70 different species of beetles, bugs, snails and spiders.</Text>
                <Text style={styles.paragraph1}>Our AI - driven identification tool is able to detect 14 of these species from user - provided photographs.</Text>
            </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'black'
    },
    textBox: {
        width: screenWidth,
        padding:20,
    },
    title:{
        fontSize:30,
        fontFamily:'normal',
        color:'white',
        marginBottom:20
    },
    paragraph1:{
        fontFamily:'normal',
        color:'white',
        textAlign: 'justify',
        fontSize:18,
        marginBottom:20
    },
    paragraph2:{
        fontFamily:'normal',
        color:'white',
        textAlign: 'justify',
        fontSize:18,
        marginLeft:40,
        marginBottom:10
    }
})

export default AboutScreen
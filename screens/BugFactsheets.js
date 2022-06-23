import React, { useState, useEffect } from 'react'
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
import { darkRed,darkGreen,classIndex,setClassIndex,BugFactdata} from '../GlobalVars'
import Card from '../component/Card';
import CardItem from '../component/CardItem';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const borderWidth = 6;
const borderLength = 50;
const borderWidthSmall = 3;
const borderLongthSmall = 40;


const BugFactSheets = props => {

    function BugFact(index) {
        setClassIndex(index)
        props.navigation.navigate('BugFacts')
    }
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <ScrollView style={styles.screen}>
            <TouchableCmp onPress={() => { props.navigation.navigate('Home') }} useForeground>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, marginLeft: screenWidth * 0.7, backgroundColor: 'green', width: screenWidth * 0.26, height: screenWidth * 0.12 }}>
                    <Text style={{ color: 'white', fontFamily: 'normal', fontSize: 18, paddingLeft: 3 }}>
                        <Image style={{ width: screenWidth * 0.06, height: screenWidth * 0.06 }} source={require('../assets/home.png')} /> Home</Text>
                </View>
            </TouchableCmp>
            <Card style={styles.InsectBox}>
                <TouchableCmp onPress={() => BugFact(0)} useForeground>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageBg} source={require('../assets/WoodwardiolaIcon.png')} />
                        <View style={styles.textBox}>
                            <Text style={styles.textTop}>{BugFactdata[0]["Common Name"]}</Text>
                        </View>
                    </View>
                </TouchableCmp>
                {/* <TouchableCmp onPress={()=> {}} useForeground> */}
            </Card>
            <Card style={styles.InsectBox}>
                {/* </TouchableCmp> */}
                <TouchableCmp onPress={() => BugFact(1)} useForeground>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageBg} source={require('../assets/WoodwardiolaIcon.png')} />
                        <View style={styles.textBox}>
                            <Text style={styles.textTop}>{BugFactdata[1]["Common Name"]}</Text>
                        </View>
                    </View>
                </TouchableCmp>
            </Card>
            <Card style={styles.InsectBox}>
                {/* </TouchableCmp> */}
                <TouchableCmp onPress={() => BugFact(2)} useForeground>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageBg} source={require('../assets/WoodwardiolaIcon.png')} />
                        <View style={styles.textBox}>
                            <Text style={styles.textTop}>{BugFactdata[2]["Common Name"]}</Text>
                        </View>
                    </View>
                </TouchableCmp>
                {/* <TouchableCmp onPress={()=> {}} useForeground> */}
            </Card>
            <Card style={styles.InsectBox}>
               {/* </TouchableCmp> */}
                <TouchableCmp onPress={() => BugFact(3)} useForeground>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageBg} source={require('../assets/WoodwardiolaIcon.png')} />
                        <View style={styles.textBox}>
                            <Text style={styles.textTop}>{BugFactdata[3]["Common Name"]}</Text>
                        </View>
                    </View>
                </TouchableCmp>
                {/* <TouchableCmp onPress={()=> {}} useForeground> */}
            </Card>
            <Card style={styles.InsectBox}>
                {/* </TouchableCmp> */}
                <TouchableCmp onPress={() => BugFact(4)} useForeground>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageBg} source={require('../assets/WoodwardiolaIcon.png')} />
                        <View style={styles.textBox}>
                            <Text style={styles.textTop}>{BugFactdata[4]["Common Name"]}</Text>
                        </View>
                    </View>
                </TouchableCmp>
                {/* <TouchableCmp onPress={()=> {}} useForeground> */}
            </Card>
            <Card style={styles.InsectBox}>
                {/* </TouchableCmp> */}
                <TouchableCmp onPress={() => BugFact(5)} useForeground>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageBg} source={require('../assets/WoodwardiolaIcon.png')} />
                        <View style={styles.textBox}>
                            <Text style={styles.textTop}>{BugFactdata[5]["Common Name"]}</Text>
                        </View>
                    </View>
                </TouchableCmp>
                {/* <TouchableCmp onPress={()=> {}} useForeground> */}
            </Card>
            <Card style={styles.InsectBox}>
                {/* </TouchableCmp> */}
                <TouchableCmp onPress={() => BugFact(6)} useForeground>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageBg} source={require('../assets/WoodwardiolaIcon.png')} />
                        <View style={styles.textBox}>
                            <Text style={styles.textTop}>{BugFactdata[6]["Common Name"]}</Text>
                        </View>
                    </View>
                </TouchableCmp>
                {/* <TouchableCmp onPress={()=> {}} useForeground> */}
            </Card>
            <Card style={styles.InsectBox}>
               {/* </TouchableCmp> */}
                <TouchableCmp onPress={() => BugFact(7)} useForeground>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageBg} source={require('../assets/WoodwardiolaIcon.png')} />
                        <View style={styles.textBox}>
                            <Text style={styles.textTop}>{BugFactdata[7]["Common Name"]}</Text>
                        </View>
                    </View>
                </TouchableCmp>
                {/* <TouchableCmp onPress={()=> {}} useForeground> */}
            </Card>
            <Card style={styles.InsectBox}>
                {/* </TouchableCmp> */}
                <TouchableCmp onPress={() => BugFact(8)} useForeground>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageBg} source={require('../assets/WoodwardiolaIcon.png')} />
                        <View style={styles.textBox}>
                            <Text style={styles.textTop}>{BugFactdata[8]["Common Name"]}</Text>
                        </View>
                    </View>
                </TouchableCmp>
                {/* <TouchableCmp onPress={()=> {}} useForeground> */}
            </Card>
            <Card style={styles.InsectBox}>
                {/* </TouchableCmp> */}
                <TouchableCmp onPress={() => BugFact(9)} useForeground>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageBg} source={require('../assets/WoodwardiolaIcon.png')} />
                        <View style={styles.textBox}>
                            <Text style={styles.textTop}>{BugFactdata[9]["Common Name"]}</Text>
                        </View>
                    </View>
                </TouchableCmp>
                {/* <TouchableCmp onPress={()=> {}} useForeground> */}
            </Card>
            <Card style={styles.InsectBox}>
                {/* </TouchableCmp> */}
                <TouchableCmp onPress={() => BugFact(10)} useForeground>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageBg} source={require('../assets/WoodwardiolaIcon.png')} />
                        <View style={styles.textBox}>
                            <Text style={styles.textTop}>{BugFactdata[10]["Common Name"]}</Text>
                        </View>
                    </View>
                </TouchableCmp>
                {/* <TouchableCmp onPress={()=> {}} useForeground> */}
            </Card>
            <Card style={styles.InsectBox}>
                {/* </TouchableCmp> */}
                <TouchableCmp onPress={() => BugFact(11)} useForeground>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageBg} source={require('../assets/WoodwardiolaIcon.png')} />
                        <View style={styles.textBox}>
                            <Text style={styles.textTop}>{BugFactdata[11]["Common Name"]}</Text>
                        </View>
                    </View>
                </TouchableCmp>
                {/* <TouchableCmp onPress={()=> {}} useForeground> */}
            </Card>
            <Card style={styles.InsectBox}>
                {/* </TouchableCmp> */}
                <TouchableCmp onPress={() => BugFact(12)} useForeground>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageBg} source={require('../assets/WoodwardiolaIcon.png')} />
                        <View style={styles.textBox}>
                            <Text style={styles.textTop}>{BugFactdata[12]["Common Name"]}</Text>
                        </View>
                    </View>
                </TouchableCmp>
                {/* <TouchableCmp onPress={()=> {}} useForeground> */}
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
        padding: 0,
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
        height: screenHeight * 0.2,
        marginVertical: screenHeight * 0.01,
        backgroundColor: 'black',
        overflow: 'hidden',
        paddingHorizontal: screenWidth * 0.05,
    },

    textBox: {
        position: "absolute",
        width: screenWidth * 0.38,
        height: screenHeight * 0.1,
        backgroundColor: darkGreen,
        // left:0,
        justifyContent: "center",
        marginLeft: screenWidth * 0.26,
        marginTop: screenHeight * 0.06,
        paddingHorizontal: screenWidth * 0.00,
        paddingVertical: screenHeight * 0.00,
        zIndex: 1,
    },
    textTop: {
        paddingTop: 0,
        paddingLeft: 0,
        fontSize: 16,
        textAlign: "center",
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

BugFactSheets.navigationOptions = navData => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return {
        // headerTitle: 'Signup',
        headerTitle: () =>
            (<View style={{ width: '100%', alignItems: "center", height: '100%', justifyContent: "center" }}>
            <Text style={styles.title} >Wildlife Species Detector</Text>
            </View>)
        ,
        headerLeft: () => (

            <View style={{ width: '100%', height: '100%', margin: screenWidth * 0.02, justifyContent: "center", alignItems: "center" }}>
                <TouchableCmp onPress={() => { navData.navigation.navigate('Home') }} useForeground>
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

export default BugFactSheets
import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  ActivityIndicator,
  Button,
  Alert,
  ScrollView,
  Dimensions,
  ImageBackground
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as jpeg from 'jpeg-js'
import CardItem from '../component/CardItem'
import {
    darkRed, darkGreen, InsectDetector, classIndex, setClassIndex,
    CombineFactdata } from '../GlobalVars'
import * as tf from '@tensorflow/tfjs';
import { decodeJpeg } from "@tensorflow/tfjs-react-native";
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const borderWidth = 6;
const borderLongth = 80;
const borderWidthSmall = 3;
const borderLongthSmall = 40;
const ClassificationInsectScreen = props => {

    const [pickedImg, setPickedImg] = useState();
    const [className, setClassName] = useState()
    const [imgSelected, setImgSelected] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [icon, setIcon] = useState();
    const [iconWH, setIconWH] = useState(1);
    const [Detected, setDetected] = useState();
    const [Imgb64, setImgb64] = useState();
    const [CommonName, setCommonName] = useState()
    const [scientificName, setScientificName] = useState()
    const [combIndex,setCombIndex] = useState(0)
    //const [classIndex,setClassIndex] = useState(0)
    /*
    const Insects = ["Oncophysa Vesiculata Vesiculata", "Amphistomus Trispiculatus", "Daerlac Cephalotes",
        "Epimixia Vulturna", "Kirkaldyella Rugosa", "Epimixia Tropica", "Eritingis Trivirgata",
        "Setocoris Binataphillis", "Amphistomus Cunninghamensis", "Amphistomus Primonactus",
        "Eritingis Aporema", "Epimixia Dysmica", "Epimixia Vittata", "Woodwardiola Sp"]
        */
    const Insects = ["Amphistomus cunninghamensis", "Amphistomus primonactus", "Amphistomus trispiculatus", "Daerlac cephalotes",
        "Epimixia dysmica", "Epimixia tropica", "Epimixia vittata", "Epimixia vulturna", "Eritingis aporema", "Eritingis trivirgata",
        "Kirkaldyella rugosa", "Oncophysa vesiculata vesiculata", "Setocoris binataphillis", "Woodwardiola sp"]
    const InsectIcons = [require("../assets/Amphistomus_cunninghamensis.png"), require("../assets/Amphistomus_primonactus.png"),
        require("../assets/Amphistomus_trispiculatus.png"), require("../assets/Daerlac_cephalotes_UNSW_ENT_00033806_cropped-sharpen-scale-500px.png"),
        require("../assets/Epimixia_dysmica_AMNH_PBI_00018017_cropped-sharpen-scale.png"), require("../assets/Epimixia_tropica_AMNH_PBI_00018500_crop-sharpen-scale.png"),
        require("../assets/Epimixia_vitatta_AMNH_PBI_00018402_cropped-scale.png"), require("../assets/Epimixia_vulturna_AMNH_PBI_00018280_crop-scale.png"),
        require("../assets/Eritingis_aporema_UNSW_ENT_00009836_crop-scale.png"), require("../assets/Eritingis_trivirgata_UNSW_ENT_00028081_crop-scale.png"),
        require("../assets/Kirkaldyella_rugosa_AMNH_PBI_00402151_cropped-scale.png"), require("../assets/Oncophysa_vesiculata_nigra_4x_AMNH_PBI_00014530_crop-sharpen-scale.png"),
        require("../assets/Setocoris_binataphillis_UNSW_ENT_00018612_0117_cropped-sharpen-scale.png"), require("../assets/Woodwardiola_sp_M_5x-200-UNSW_ENT_00019594_crop-scale.png")]


 
    //camera roll permission 
    /*
    const verifyPermission = async () => {
        const result1 = await Permissions.askAsync(Permissions.CAMERA)
        const result2 = await Permissions.askAsync(Permissions.CAMERA)

        if (result1.status != 'granted' || result2.status != 'granted') {
            Alert.alert(
                'Insufficient permissions',
                'You need to grant camera permission to use this app.',
                [{ text: 'Okay' }])
            return false
        }
        return true

    } */
    
    const timeout = (ms, promise) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error("timeout"))
            }, ms);
            promise.then(resolve, reject)
        })
    };
    const pickImgHandler = async () => {
        console.log("[+] Inside Insect PickImgHandler")
        //const permitted = await verifyPermission()
        //if (!permitted) { return }


        setClassName(null)
        setDetected(false)
        setImgSelected(false)
        setPickedImg(null)
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            base64: true,
            // allowsEditing: true,
            aspect: [4, 4],
            quality: 1
        })

        for (let tmp in result) {
            console.log("[+] Insect PickImg result", tmp)
        }

        if (!result.cancelled) {
            console.log("[+] Insect PickImg result not cancelled", result.uri)
            //console.log("[+] Insect PickImg result not cancelled data", result.base64)
            setPickedImg(result.uri)
            setImgb64(result.base64)

            setImgSelected(true)
            
            Alert.alert(
                'Classifying Image',
                'This process take a few minutes depending on the size of image. Press OK to close this dialog box and then Identify to start')
                 //'Press OK and then Identify to start')
                   // [{ text: 'Press Identify to start' }])
            
        }
    }
        function indexOfMax(arr) {
            if (arr.length === 0) {
                return -1;
            }

            var max = arr[0];
            var maxIndex = 0;

            for (var i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    maxIndex = i;
                    max = arr[i];
                }
            }

            return maxIndex;
        }

    const classifyInsect = async () => {
            tf.engine().startScope()
            console.log("[+] Inside Classify Insect jimp base64", pickedImg)
            var imageTensor;
            var imgBuffer;
            var raw;
            setIsLoading(true)
            console.log(tf.memory())
            try {
                imgBuffer = tf.util.encodeString(Imgb64, 'base64').buffer;
                raw = new Uint8Array(imgBuffer);
                imageTensor = decodeJpeg(raw);
                //const itshp = imageTensor.shape
                /* console.log('Insect imageTensor shape', itshp)
                if (itshp[0] > itshp[1]) {
                    let diff = itshp[0] - itshp[1]
                    console.log('Image shape X > Y')
                    //let x1 = Math.round(diff / 2)
                    const cropData = {
                      offset: {
                        x: Math.round(diff / 2),
                        y: 0,
                      },
                      size: {
                        width: itshp[1],
                        height: itshp[1],
                      },
                    };

                }
                else {
                    if (itshp[1] > itshp[0]) {
                        let diff = itshp[0] - itshp[1]
                        console.log('Image shape Y > X')
                    }
                    } 
                */
                
            } catch (error) {
                console.log("[+] Inside Classify Insect error", error)
            }
            //tf.print(imageTensor)
            const imageTensoresized = tf.image.resizeBilinear(imageTensor, [224, 224]);
            //tf.print(imageTensoresized)

            try {
                let imgReshape = imageTensoresized.reshape([1, 224, 224, 3])
                //imgReshape.print()
                let offset = tf.scalar(127.5);
                let imgR = imgReshape.sub(offset)
                    .div(offset)
                //imgR.print()
                let Result = await InsectDetector.predict(imgR);
                console.log("[+] Insect Class Prediction Result", Result)
                let PrData = Result.dataSync()
                let maxIndex = indexOfMax(PrData)
                setClassIndex(maxIndex)
                setIsLoading(false)
                console.log("[+] Insect Class Prediction done Insect class ", PrData,maxIndex, classIndex, Insects[classIndex])
                setClassName(Insects[classIndex])
                setDetected(true)
                let src = InsectIcons[classIndex]
                setIcon(src)
                /*
                Image.getSize(icon, (width, height) => {
                    setIconWH(width / height);
                    console.log("Height, width = ", height, width)
                }); */
                let width = Image.resolveAssetSource(src).width
                let height = Image.resolveAssetSource(src).height
                console.log("Height, width = ",src,width,height)
                setIconWH(width / height)
                setCombIndex(CombineFactdata.length)
                setCommonName("No Information")
                for (let i = 0; i < CombineFactdata.length; i++) {
                    if ((Insects[classIndex].includes(CombineFactdata[i]["Genus"]) == true) && (Insects[classIndex].includes(CombineFactdata[i]["Specific epitaph"]) == true))
                    /*if (CombineFactdata[i]["Scientific Name"].includes(Insects[classIndex]) == true) */
                        {
                        console.log("Found Fact Sheet", CombineFactdata[i]["Common Name"]);
                        var cmNm = CombineFactdata[i]["Common Name"].replace(/[0-9]/g, '')
                        setCombIndex(i);
                        setCommonName(cmNm);
                        setScientificName(CombineFactdata[i]["Genus"] + " " + CombineFactdata[i]["Specific epitaph"])
                        break;
                    }
                    
                }
                /**
                tf.dispose(imageTensor)
                tf.dispose(imageTensoresized)
                tf.dispose(imgReshape)
                tf.dispose(imgR)
                tf.dispose(imgBuffer)
                tf.dispose(raw)
                tf.dispose(Result)
                tf.dispose(PrData)
                tf.dispose(offset)
                //tf.dispose(maxIndex)
                //tf.dispose(pickedImg)*/
                //tf.disposeVariables()

            } catch (err) {
                console.log("[+] Insect Class prediction not done", err)
            }
            tf.engine().endScope()
            console.log(tf.memory())
        }



        let TouchableCmp = TouchableNativeFeedback;
        let TouchableCmp1 = TouchableOpacity;

        /*
        if (Platform.OS === 'android' && Platform.Version >= 21) {
            TouchableCmp = TouchableNativeFeedback;
        } */


        return (
            <ScrollView style={styles.screen}>
                <TouchableCmp onPress={() => { props.navigation.navigate('Home') }} useForeground>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, marginLeft: screenWidth * 0.7, backgroundColor: 'green', width: screenWidth * 0.26, height: screenWidth * 0.12 }}>
                        <Text style={{ color: 'white', fontFamily: 'normal', fontSize: 18, paddingLeft: 3 }}>
                          <Image style={{ width: screenWidth * 0.06, height: screenWidth * 0.06 }} source={require('../assets/home.png')} /> Home</Text>
                      </View>
                </TouchableCmp>
                <ImageBackground style={{ flex: 1, resizeMode: "cover", }} source={require('../assets/mobileBackground.jpg')}>
                    <LinearGradient
                        colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.5)', 'transparent']}>
                        <View style={styles.container}>
                            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                                <Text style={{ fontFamily: 'normal', color: 'white', fontSize: 30 }}>
                                    INSECT </Text>
                                <Text style={{ fontFamily: 'normal', color: 'white', fontSize: 30, paddingLeft: 10 }}>
                                    IDENTIFICATION</Text>
                            </View>
                            <View style={{ backgroundColor: 'green', width: screenWidth * 0.85, padding: 15, marginTop: 30 }}>
                                <Text style={{ fontSize: 18, fontFamily: 'normal' }}>Ensure your specimen is: </Text>
                                <Text style={{ fontSize: 18, fontFamily: 'normal', paddingLeft: 20 }}>· On a natural background</Text>
                                <Text style={{ fontSize: 18, fontFamily: 'normal', paddingLeft: 20 }}>· Well lit, show detail</Text>
                                <Text style={{ fontSize: 18, fontFamily: 'normal', paddingLeft: 20 }}>· Fills 30% of the image</Text>
                            </View>
                            <View style={{
                                width: screenWidth * 0.80,
                                height: screenWidth * 0.38,
                                // marginLeft: screenWidth * 0.1,
                                justifyContent: 'flex-end'
                            }}>
                                <Image source={require('../assets/correctI.png')} style={{ paddingLeft: 20, width: "72%", height: "72%" }} />
                            </View>
                            <View style={{
                                width: screenWidth * 0.89,
                                height: screenWidth * 0.4,
                                marginTop: 30,
                                marginLeft: screenWidth * 0.11,
                                alignItems: 'flex-end',
                            }}>
                                <Image source={require('../assets/IncorrectI.png')} style={{ paddingLeft: 20, width: "72%", height: "72%" }} />
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
                                <View style={styles.imageCard} >
                                    <View style={{ position: 'absolute', top: 0, left: 0, width: borderWidth, height: borderLongth, backgroundColor: darkGreen, zIndex: 1 }} />
                                    <View style={{ position: 'absolute', top: 0, left: 0, width: borderLongth, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                                    <View style={{ position: 'absolute', bottom: 0, left: 0, width: borderWidth, height: borderLongth, backgroundColor: darkGreen, zIndex: 1 }} />
                                    <View style={{ position: 'absolute', bottom: 0, left: 0, width: borderLongth, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                                    <View style={{ position: 'absolute', bottom: 0, right: 0, width: borderWidth, height: borderLongth, backgroundColor: darkGreen, zIndex: 1 }} />
                                    <View style={{ position: 'absolute', bottom: 0, right: 0, width: borderLongth, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                                    <View style={{ position: 'absolute', top: 0, right: 0, width: borderWidth, height: borderLongth, backgroundColor: darkGreen, zIndex: 1 }} />
                                    <View style={{ position: 'absolute', top: 0, right: 0, width: borderLongth, height: borderWidth, backgroundColor: darkGreen, zIndex: 1 }} />
                                    {
                                        !pickedImg ?
                                            (
                                                <TouchableCmp onPress={!imgSelected || Detected ? pickImgHandler : classifyInsect}
                                                    /*style={{ width: '100%', height: '100%', }}*/ useForeground>
                                                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                                        <Image source={require('../assets/camera.png')} style={{ width: "28%", height: "28%" }} />
                                                    </View>
                                                </TouchableCmp>
                                            )
                                            : (
                                                <View style={styles.imageContainer}>
                                                    <Image source={{ uri: pickedImg }} style={styles.image} />
                                                </View>
                                            )
                                    }
                                </View>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, width: screenWidth * 0.8, marginLeft: screenWidth * 0.1 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#dcdcdc', width: screenWidth * 0.50, height: screenWidth * 0.12 }}>
                                    {className ?
                                        <Text style={{ color: 'black', fontFamily: 'normal', fontSize: 16 }}>{className}</Text>
                                        :
                                        <Text style={{ color: '#808080', fontFamily: 'normal', fontSize: 16 }}>NAME</Text>
                                    }

                                </View>
                                <TouchableCmp1 onPress={!imgSelected || Detected ? pickImgHandler : classifyInsect} useForeground>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', width: screenWidth * 0.25, height: screenWidth * 0.12 }}>
                                        {!imgSelected ? <Text style={{ color: 'white', fontFamily: 'normal', fontSize: 16 }}><Image style={{ width: screenWidth * 0.06, height: screenWidth * 0.06 }} source={require('../assets/upload.png')} />  FILE</Text>
                                            : isLoading ? <Text style={{ color: 'white', fontFamily: 'normal', fontSize: 16 }}>Loading</Text>
                                                : !Detected ? <Text style={{ color: 'white', fontFamily: 'normal', fontSize: 16 }}>IDENTIFY</Text>
                                                    : <Text style={{ color: 'white', fontFamily: 'normal', fontSize: 16 }}>ANOTHER?</Text>}

                                    </View>
                                </TouchableCmp1>
                            </View>
                            {
                                className !== 'UNIDENTIFIED' && className ?

                                    <CardItem style={{ marginTop: 20, marginLeft: screenWidth * 0.05, width: screenWidth * 0.9, display: 'flex', flexDirection: 'column', padding: 15, backgroundColor: '#dcdcdc' }}>
                                        <View style={styles.textContainer}>
                                            <Text style={styles.title}>{className.toUpperCase()} FACT SHEET </Text>
                                        </View>
                                       <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                                                             <View style={{ backgroundColor: 'white', width: screenWidth * 0.3, height: screenWidth * 0.3, justifyContent: 'center', alignItems: 'center' }}>
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
                                            <Text style={styles.textTitle}>Common Name: </Text>
                                            <Text style={styles.textBody}>{CommonName}</Text>
                                        </View>
                                        <View style={styles.textContainer}>
                                            <Text style={styles.textTitle}>Scientific Name: </Text>
                                            {
                                                combIndex < CombineFactdata.length ?
                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                                        <Text style={styles.textBodyitalic}>{scientificName}</Text>
                                                        <Text style={styles.textBody}>{CombineFactdata[combIndex]["Morphospecies"]}</Text>
                                                        <Text style={styles.textBody}>{CombineFactdata[combIndex]["Author"]}</Text>
                                                    </View>
                                                    :
                                                    <Text style={styles.textBody}>{"No Information"}</Text>
                                            }
                                        </View>

                                        <View style={styles.textContainer}>
                                            <Text style={styles.textTitle}>Description: </Text>
                                            {
                                                combIndex < CombineFactdata.length ?
                                                    <Text style={styles.textBody}>{CombineFactdata[combIndex]["Description"]}</Text>
                                                    :
                                                    <Text style={styles.textBody}>{"No Information"}</Text>
                                            }
                                        </View>
                                        <View style={styles.textContainer}>
                                            <Text style={styles.textTitle}>Distribution: </Text>
                                            {
                                                combIndex < CombineFactdata.length ?
                                                    <Text style={styles.textBody}>{CombineFactdata[combIndex]["Distribution"]}</Text>
                                                    :
                                                    <Text style={styles.textBody}>{"No Information"}</Text>
                                            }
                                        </View>
                                        <View style={styles.textContainer}>
                                            <Text style={styles.textTitle}>Habitat: </Text>
                                            {
                                                combIndex < CombineFactdata.length ?
                                                    <Text style={styles.textBody}>{CombineFactdata[combIndex]["Habitat"]}</Text>
                                                    :
                                                    <Text style={styles.textBody}>{"No Information"}</Text>
                                            }
                                        </View>
                                        <View style={styles.textContainer}>
                                            <Text style={styles.textTitle}>life History: </Text>
                                            {
                                                combIndex < CombineFactdata.length ?
                                                    <Text style={styles.textBody}>{CombineFactdata[combIndex]["Life History"]}</Text>
                                                    :
                                                    <Text style={styles.textBody}>{"No Information"}</Text>
                                            }
                                        </View>
                                        <View style={styles.textContainer}>
                                            <Text style={{ fontFamily: 'normal', fontSize: 16, marginBottom: 5 }}>References: </Text>
                                            {
                                                combIndex < CombineFactdata.length ?
                                                    CombineFactdata[combIndex]["References"].split('+').map(
                                                        (tmp, index) => (
                                                            <Text key={tmp} style={styles.textBodyRef}>{index + 1}.{tmp}</Text>
                                                        )
                                                    )
                                                    :
                                                    <Text style={styles.textBody}>{"No Information"}</Text>
                                                }

                                        </View>
                                    </CardItem>
                                    :
                                    null
                            }


                        </View>
                    </LinearGradient>
                </ImageBackground>
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
ClassificationInsectScreen.navigationOptions = navData => {
    let TouchableCmp = TouchableNativeFeedback;

    /*
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  } */
    return {
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
    }
  };



export default ClassificationInsectScreen


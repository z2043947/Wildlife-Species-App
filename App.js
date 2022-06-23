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
  ImageBackground,
  Picker
} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Font from 'expo-font'
import * as tf from '@tensorflow/tfjs';
//import * as tfn from '@tensorflow/tfjs-node';
import * as jpeg from 'jpeg-js'
import {fetch, bundleResourceIO,decodeJpeg} from "@tensorflow/tfjs-react-native";
//import * as RNFS from 'react-native-fs';
import * as FileSystem from 'expo-file-system';
//import * as  b64ab from 'base64-arraybuffer';
import { normalize } from 'react-native-elements';
import * as mobilenet from '@tensorflow-models/mobilenet'
import AppNavigator from './navigation/AppNavigator';
import {
    InsectDetector, setInsectDetector, BugFactdata, BeetleFactdata, SnailFactdata, SpiderFactdata,
    CombineFactdata } from './GlobalVars';
//import * as sharp from 'sharp'
import { AppLoading } from 'expo'
//const csvdata = require('./class_name2no.json')
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const borderWidth = 6;
const borderLongth = 80;
const borderWidthSmall = 3;
const borderLongthSmall = 40;



//var InsectDetector;

export default function App() {
    const [dataLoaded, setDataLoaded] = useState(false);
    //const Stack = createStackNavigator();

    useEffect(() => {
        async function loadModel() {
            console.log("[+] Application started")
            console.log("[+] Loading Beetle Facts");
            if (CombineFactdata.length == 0) {
                    CombineFactdata.push(...BeetleFactdata)
                    CombineFactdata.push(...BugFactdata)
                    CombineFactdata.push(...SnailFactdata)
                    CombineFactdata.push(...SpiderFactdata)
                }
            console.log("Combined Fact data", CombineFactdata.length)
                /*for (let i = 0; i < CombineFactdata.length; i++)
                    console.log(CombineFactdata[i]["Common Name"])*/

            //Wait for tensorflow module to be ready
            const tfReady = await tf.ready();
            console.log("[+] Loading Insect detection model");
            const modelJson = await require("./assets/model/model.json");
            console.log("[+] Insect Model Json assigned")
            const modelWeight = await require("./assets/model/group1-shard.bin");
            console.log("[+] Insect Model weight loaded ")
            try {
                const InsectDet = await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeight));
                setInsectDetector(InsectDet)
                //setInsectDetector(InsectDetector)
                console.log("[+] Insect Model Loaded")
            } catch (err) {
                console.log("[-] Insect Model not Loaded", err)
            }
        }
        loadModel()
    }, []);
    return (
        /*
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Insects" component={ClassificationInsectScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        */
        <AppNavigator />
    );
}
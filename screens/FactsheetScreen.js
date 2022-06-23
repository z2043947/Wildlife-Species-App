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
import { darkGreen, darkRed,factSheetno,classIndex } from '../GlobalVars'
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const FactsheetScreen = props => {
    const [className, setClassName] = useState()
    const [commonName, setCommonName] = useState()
    const [scientificName, setScientificName] = useState()
    const [distribuion, setDistribution] = useState()
    const [habitat, setHabitat] = useState()
    const [lifeHistory, setLifeHistory] = useState()
    const [humanInteraction, setHumanInteraction] = useState()
    const [management, setManagement] = useState()
    const [references,setReferences] = useState()
    const ClassInsects = ["Amphistomus cunninghamensis", "Amphistomus primonactus", "Amphistomus trispiculatus", "Daerlac cephalotes",
        "Epimixia dysmica", "Epimixia tropica", "Epimixia vittata", "Epimixia vulturna", "Eritingis aporema", "Eritingis trivirgata",
        "Kirkaldyella rugosa", "Oncophysa vesiculata vesiculata", "Setocoris binataphillis", "Woodwardiola sp"]
    const ClassCommonNames = ["Amphistomus cunninghamensis", "Amphistomus primonactus", "Amphistomus trispiculatus", "Daerlac cephalotes",
        "Epimixia dysmica", "Epimixia tropica", "Epimixia vittata", "Epimixia vulturna", "Eritingis aporema", "Eritingis trivirgata",
        "Kirkaldyella rugosa", "Oncophysa vesiculata vesiculata", "Setocoris binataphillis", "Woodwardiola sp"]
    const ClassScientificNames = ["Amphistomus cunninghamensis", "Amphistomus primonactus", "Amphistomus trispiculatus", "Daerlac cephalotes",
        "Epimixia dysmica", "Epimixia tropica", "Epimixia vittata", "Epimixia vulturna", "Eritingis aporema", "Eritingis trivirgata",
        "Kirkaldyella rugosa", "Oncophysa vesiculata vesiculata", "Setocoris binataphillis", "Woodwardiola sp"]
    const ClassDistribution = ["Amphistomus cunninghamensis", "Amphistomus primonactus", "Amphistomus trispiculatus", "Daerlac cephalotes",
        "Epimixia dysmica", "Epimixia tropica", "Epimixia vittata", "Epimixia vulturna", "Eritingis aporema", "Eritingis trivirgata",
        "Kirkaldyella rugosa", "Oncophysa vesiculata vesiculata", "Setocoris binataphillis", "Woodwardiola sp"]
    const ClassHabitat = ["Amphistomus cunninghamensis", "Amphistomus primonactus", "Amphistomus trispiculatus", "Daerlac cephalotes",
        "Epimixia dysmica", "Epimixia tropica", "Epimixia vittata", "Epimixia vulturna", "Eritingis aporema", "Eritingis trivirgata",
        "Kirkaldyella rugosa", "Oncophysa vesiculata vesiculata", "Setocoris binataphillis", "Woodwardiola sp"]
    const ClassLifeHistory = ["Amphistomus cunninghamensis", "Amphistomus primonactus", "Amphistomus trispiculatus", "Daerlac cephalotes",
        "Epimixia dysmica", "Epimixia tropica", "Epimixia vittata", "Epimixia vulturna", "Eritingis aporema", "Eritingis trivirgata",
        "Kirkaldyella rugosa", "Oncophysa vesiculata vesiculata", "Setocoris binataphillis", "Woodwardiola sp"]
    const ClassHumanInteraction = ["Amphistomus cunninghamensis", "Amphistomus primonactus", "Amphistomus trispiculatus", "Daerlac cephalotes",
        "Epimixia dysmica", "Epimixia tropica", "Epimixia vittata", "Epimixia vulturna", "Eritingis aporema", "Eritingis trivirgata",
        "Kirkaldyella rugosa", "Oncophysa vesiculata vesiculata", "Setocoris binataphillis", "Woodwardiola sp"]
    const ClassManagement = ["Amphistomus cunninghamensis", "Amphistomus primonactus", "Amphistomus trispiculatus", "Daerlac cephalotes",
        "Epimixia dysmica", "Epimixia tropica", "Epimixia vittata", "Epimixia vulturna", "Eritingis aporema", "Eritingis trivirgata",
        "Kirkaldyella rugosa", "Oncophysa vesiculata vesiculata", "Setocoris binataphillis", "Woodwardiola sp"]
    const ClassReferences = ["Amphistomus + cunninghamensis", "Amphistomus + primonactus", "Amphistomus + trispiculatus", "Daerlac + cephalotes",
        "Epimixia + dysmica", "Epimixia + tropica", "Epimixia + vittata", "Epimixia + vulturna", "Eritingis + aporema", "Eritingis + trivirgata",
        "Kirkaldyella + rugosa", "Oncophysa + vesiculata vesiculata", "Setocoris + binataphillis", "Woodwardiola + sp"]
    const Bugs = ["Bug1", "Bug2", "Bug3", "Bug4", "Bug5", "Bug6", "Bug7", "Bug8", "Bug9", "Bug10", "Bug11",
        "Bug12", "Bug13", "Bug14", "Bug15", "Bug16", "Bug17", "Bug18", "Bug19", "Bug20"]
    const BugsCommonNames = ["Bug1", "Bug2", "Bug3", "Bug4", "Bug5", "Bug6", "Bug7", "Bug8", "Bug9", "Bug10", "Bug11",
        "Bug12", "Bug13", "Bug14", "Bug15", "Bug16", "Bug17", "Bug18", "Bug19", "Bug20"]
    const BugsScientificNames = ["Bug1", "Bug2", "Bug3", "Bug4", "Bug5", "Bug6", "Bug7", "Bug8", "Bug9", "Bug10", "Bug11",
        "Bug12", "Bug13", "Bug14", "Bug15", "Bug16", "Bug17", "Bug18", "Bug19", "Bug20"]
    const BugsDistribution = ["Bug1", "Bug2", "Bug3", "Bug4", "Bug5", "Bug6", "Bug7", "Bug8", "Bug9", "Bug10", "Bug11",
        "Bug12", "Bug13", "Bug14", "Bug15", "Bug16", "Bug17", "Bug18", "Bug19", "Bug20"]
    const BugsHabitat = ["Bug1", "Bug2", "Bug3", "Bug4", "Bug5", "Bug6", "Bug7", "Bug8", "Bug9", "Bug10", "Bug11",
        "Bug12", "Bug13", "Bug14", "Bug15", "Bug16", "Bug17", "Bug18", "Bug19", "Bug20"]
    const BugsLifeHistory = ["Bug1", "Bug2", "Bug3", "Bug4", "Bug5", "Bug6", "Bug7", "Bug8", "Bug9", "Bug10", "Bug11",
        "Bug12", "Bug13", "Bug14", "Bug15", "Bug16", "Bug17", "Bug18", "Bug19", "Bug20"]
    const BugsHumanInteraction = ["Bug1", "Bug2", "Bug3", "Bug4", "Bug5", "Bug6", "Bug7", "Bug8", "Bug9", "Bug10", "Bug11",
        "Bug12", "Bug13", "Bug14", "Bug15", "Bug16", "Bug17", "Bug18", "Bug19", "Bug20"]
    const BugsManagement = ["Bug1", "Bug2", "Bug3", "Bug4", "Bug5", "Bug6", "Bug7", "Bug8", "Bug9", "Bug10", "Bug11",
        "Bug12", "Bug13", "Bug14", "Bug15", "Bug16", "Bug17", "Bug18", "Bug19", "Bug20"]
    const BugsReferences = ["Bug1", "Bug2", "Bug3", "Bug4", "Bug5", "Bug6", "Bug7", "Bug8", "Bug9", "Bug10", "Bug11",
        "Bug12", "Bug13", "Bug14", "Bug15", "Bug16", "Bug17", "Bug18", "Bug19", "Bug20"]
    const Beetles = ["Beetle1", "Beetle2", "Beetle3", "Beetle4", "Beetle5", "Beetle6", "Beetle7", "Beetle8", "Beetle9", "Beetle10", "Beetle11",
        "Beetle12", "Beetle13", "Beetle14", "Beetle15", "Beetle16", "Beetle17", "Beetle18", "Beetle19", "Beetle20"]
    const BeetlesCommonNames = ["Beetle1", "Beetle2", "Beetle3", "Beetle4", "Beetle5", "Beetle6", "Beetle7", "Beetle8", "Beetle9", "Beetle10", "Beetle11",
        "Beetle12", "Beetle13", "Beetle14", "Beetle15", "Beetle16", "Beetle17", "Beetle18", "Beetle19", "Beetle20"]
    const BeetlesScientificNames = ["Beetle1", "Beetle2", "Beetle3", "Beetle4", "Beetle5", "Beetle6", "Beetle7", "Beetle8", "Beetle9", "Beetle10", "Beetle11",
        "Beetle12", "Beetle13", "Beetle14", "Beetle15", "Beetle16", "Beetle17", "Beetle18", "Beetle19", "Beetle20"]
    const BeetlesDistribution = ["Beetle1", "Beetle2", "Beetle3", "Beetle4", "Beetle5", "Beetle6", "Beetle7", "Beetle8", "Beetle9", "Beetle10", "Beetle11",
        "Beetle12", "Beetle13", "Beetle14", "Beetle15", "Beetle16", "Beetle17", "Beetle18", "Beetle19", "Beetle20"]
    const BeetlesHabitat = ["Beetle1", "Beetle2", "Beetle3", "Beetle4", "Beetle5", "Beetle6", "Beetle7", "Beetle8", "Beetle9", "Beetle10", "Beetle11",
        "Beetle12", "Beetle13", "Beetle14", "Beetle15", "Beetle16", "Beetle17", "Beetle18", "Beetle19", "Beetle20"]
    const BeetlesLifeHistory = ["Beetle1", "Beetle2", "Beetle3", "Beetle4", "Beetle5", "Beetle6", "Beetle7", "Beetle8", "Beetle9", "Beetle10", "Beetle11",
        "Beetle12", "Beetle13", "Beetle14", "Beetle15", "Beetle16", "Beetle17", "Beetle18", "Beetle19", "Beetle20"]
    const BeetlesHumanInteraction = ["Beetle1", "Beetle2", "Beetle3", "Beetle4", "Beetle5", "Beetle6", "Beetle7", "Beetle8", "Beetle9", "Beetle10", "Beetle11",
        "Beetle12", "Beetle13", "Beetle14", "Beetle15", "Beetle16", "Beetle17", "Beetle18", "Beetle19", "Beetle20"]
    const BeetlesManagement = ["Beetle1", "Beetle2", "Beetle3", "Beetle4", "Beetle5", "Beetle6", "Beetle7", "Beetle8", "Beetle9", "Beetle10", "Beetle11",
        "Beetle12", "Beetle13", "Beetle14", "Beetle15", "Beetle16", "Beetle17", "Beetle18", "Beetle19", "Beetle20"]
    const BeetlesReferences = ["Beetle1", "Beetle2", "Beetle3", "Beetle4", "Beetle5", "Beetle6", "Beetle7", "Beetle8", "Beetle9", "Beetle10", "Beetle11",
        "Beetle12", "Beetle13", "Beetle14", "Beetle15", "Beetle16", "Beetle17", "Beetle18", "Beetle19", "Beetle20"]
    const Snails = ["Snail1", "Snail2", "Snail3", "Snail4", "Snail5", "Snail6", "Snail7", "Snail8", "Snail9", "Snail10", "Snail11",
        "Snail12", "Snail13", "Snail14", "Snail15", "Snail16", "Snail17", "Snail18", "Snail19", "Snail20"]
    const SnailsCommonNames = ["Snail1", "Snail2", "Snail3", "Snail4", "Snail5", "Snail6", "Snail7", "Snail8", "Snail9", "Snail10", "Snail11",
        "Snail12", "Snail13", "Snail14", "Snail15", "Snail16", "Snail17", "Snail18", "Snail19", "Snail20"]
    const SnailsScientificNames = ["Snail1", "Snail2", "Snail3", "Snail4", "Snail5", "Snail6", "Snail7", "Snail8", "Snail9", "Snail10", "Snail11",
        "Snail12", "Snail13", "Snail14", "Snail15", "Snail16", "Snail17", "Snail18", "Snail19", "Snail20"]
    const SnailsDistribution = ["Snail1", "Snail2", "Snail3", "Snail4", "Snail5", "Snail6", "Snail7", "Snail8", "Snail9", "Snail10", "Snail11",
        "Snail12", "Snail13", "Snail14", "Snail15", "Snail16", "Snail17", "Snail18", "Snail19", "Snail20"]
    const SnailsHabitat = ["Snail1", "Snail2", "Snail3", "Snail4", "Snail5", "Snail6", "Snail7", "Snail8", "Snail9", "Snail10", "Snail11",
        "Snail12", "Snail13", "Snail14", "Snail15", "Snail16", "Snail17", "Snail18", "Snail19", "Snail20"]
    const SnailsLifeHistory = ["Snail1", "Snail2", "Snail3", "Snail4", "Snail5", "Snail6", "Snail7", "Snail8", "Snail9", "Snail10", "Snail11",
        "Snail12", "Snail13", "Snail14", "Snail15", "Snail16", "Snail17", "Snail18", "Snail19", "Snail20"]
    const SnailsHumanInteraction = ["Snail1", "Snail2", "Snail3", "Snail4", "Snail5", "Snail6", "Snail7", "Snail8", "Snail9", "Snail10", "Snail11",
        "Snail12", "Snail13", "Snail14", "Snail15", "Snail16", "Snail17", "Snail18", "Snail19", "Snail20"]
    const SnailsManagement = ["Snail1", "Snail2", "Snail3", "Snail4", "Snail5", "Snail6", "Snail7", "Snail8", "Snail9", "Snail10", "Snail11",
        "Snail12", "Snail13", "Snail14", "Snail15", "Snail16", "Snail17", "Snail18", "Snail19", "Snail20"]
    const SnailsReferences = ["Snail1", "Snail2", "Snail3", "Snail4", "Snail5", "Snail6", "Snail7", "Snail8", "Snail9", "Snail10", "Snail11",
        "Snail12", "Snail13", "Snail14", "Snail15", "Snail16", "Snail17", "Snail18", "Snail19", "Snail20"]
    const Spiders = ["Spider1", "Spider2", "Spider3", "Spider4", "Spider5", "Spider6", "Spider7", "Spider8", "Spider9", "Spider10", "Spider11",
        "Spider12", "Spider13", "Spider14", "Spider15", "Spider16", "Spider17", "Spider18", "Spider19", "Spider20"]
    const SpidersCommonNames = ["Spider1", "Spider2", "Spider3", "Spider4", "Spider5", "Spider6", "Spider7", "Spider8", "Spider9", "Spider10", "Spider11",
        "Spider12", "Spider13", "Spider14", "Spider15", "Spider16", "Spider17", "Spider18", "Spider19", "Spider20"]
    const SpidersScientificNames = ["Spider1", "Spider2", "Spider3", "Spider4", "Spider5", "Spider6", "Spider7", "Spider8", "Spider9", "Spider10", "Spider11",
        "Spider12", "Spider13", "Spider14", "Spider15", "Spider16", "Spider17", "Spider18", "Spider19", "Spider20"]
    const SpidersDistribution = ["Spider1", "Spider2", "Spider3", "Spider4", "Spider5", "Spider6", "Spider7", "Spider8", "Spider9", "Spider10", "Spider11",
        "Spider12", "Spider13", "Spider14", "Spider15", "Spider16", "Spider17", "Spider18", "Spider19", "Spider20"]
    const SpidersHabitat = ["Spider1", "Spider2", "Spider3", "Spider4", "Spider5", "Spider6", "Spider7", "Spider8", "Spider9", "Spider10", "Spider11",
        "Spider12", "Spider13", "Spider14", "Spider15", "Spider16", "Spider17", "Spider18", "Spider19", "Spider20"]
    const SpidersLifeHistory = ["Spider1", "Spider2", "Spider3", "Spider4", "Spider5", "Spider6", "Spider7", "Spider8", "Spider9", "Spider10", "Spider11",
        "Spider12", "Spider13", "Spider14", "Spider15", "Spider16", "Spider17", "Spider18", "Spider19", "Spider20"]
    const SpidersHumanInteraction = ["Spider1", "Spider2", "Spider3", "Spider4", "Spider5", "Spider6", "Spider7", "Spider8", "Spider9", "Spider10", "Spider11",
        "Spider12", "Spider13", "Spider14", "Spider15", "Spider16", "Spider17", "Spider18", "Spider19", "Spider20"]
    const SpidersManagement = ["Spider1", "Spider2", "Spider3", "Spider4", "Spider5", "Spider6", "Spider7", "Spider8", "Spider9", "Spider10", "Spider11",
        "Spider12", "Spider13", "Spider14", "Spider15", "Spider16", "Spider17", "Spider18", "Spider19", "Spider20"]
    const SpidersReferences = ["Spider1", "Spider2", "Spider3", "Spider4", "Spider5", "Spider6", "Spider7", "Spider8", "Spider9", "Spider10", "Spider11",
        "Spider12", "Spider13", "Spider14", "Spider15", "Spider16", "Spider17", "Spider18", "Spider19", "Spider20"]

    let TouchableCmp = TouchableOpacity;
    function BackNav(factno) {
        if (factno == 1) {
            props.navigation.navigate('AI')
        }
        else if (factno == 2) {
            props.navigation.navigate('Bug')
        }
        else if (factno == 3) {
            props.navigation.navigate('Beetle')
        }
        else if (factno == 4) {
            props.navigation.navigate('Snail')
        }
        else {
            props.navigation.navigate('Spider')
        }
        setClassName(cl)
    }
    function classnm(factno) {
        if (factno == 1) {
            var clnm = ClassInsects[classIndex]
        }
        else if (factno == 2) {
            var clnm = Bugs[classIndex]
        }
        else if (factno == 3) {
            var clnm = Beetles[classIndex]
        }
        else if (factno == 4) {
            var clnm = Snails[classIndex]
        }
        else {
            var clnm = Spiders[classIndex]
        }
        setClassName(clnm)
    }

    function commonnm(factno) {
        if (factno == 1) {
            var cmnm = ClassCommonNames[classIndex]
        }
        else if (factno == 2) {
            var cmnm = BugsCommonNames[classIndex]
        }
        else if (factno == 3) {
            var cmnm = BeetlesCommonNames[classIndex]
        }
        else if (factno == 4) {
            var cmnm = SnailsCommonNames[classIndex]
        }
        else {
            var cmnm = SpidersCommonNames[classIndex]
        }
        setCommonName(cmnm)
    }
    function scientificnm(factno) {
        if (factno === 1) {
            var scnm = ClassScientificNames[classIndex]
        }
        else if (factno === 2) {
            var scnm = BugsScientificNames[classIndex]
        }
        else if (factno === 3) {
            var scnm = BeetlesScientificNames[classIndex]
        }
        else if (factno === 4) {
            var scnm = SnailsScientificNames[classIndex]
        }
        else {
            var scnm = SpidersScientificNames[classIndex]
        }
        setScientificName(scnm)
    }
    function dstbn(factno) {
        if (factno == 1) {
            var dsbn = ClassDistribution[classIndex]
        }
        else if (factno == 2) {
            var dsbn = BugsDistribution[classIndex]
        }
        else if (factno == 3) {
            var dsbn = BeetlesDistribution[classIndex]
        }
        else if (factno == 4) {
            var dsbn = SnailsDistribution[classIndex]
        }
        else {
            var dsbn = SpidersDistribution[classIndex]
        }
        setDistribution(dsbn)
    }
    function hbtat(factno) {
        if (factno == 1) {
            var hb = ClassHabitat[classIndex]
        }
        else if (factno == 2) {
            var hb = BugsHabitat[classIndex]
        }
        else if (factno == 3) {
            var hb = BeetlesHabitat[classIndex]
        }
        else if (factno == 4) {
            var hb = SnailsHabitat[classIndex]
        }
        else {
            var hb = SpidersHabitat[classIndex]
        }
        setHabitat(hb)
    }
    function lfhis(factno) {
        if (factno == 1) {
            var lf = ClassLifeHistory[classIndex]
        }
        else if (factno == 2) {
            var lf = BugsLifeHistory[classIndex]
        }
        else if (factno == 3) {
            var lf = BeetlesLifeHistory[classIndex]
        }
        else if (factno == 4) {
            var lf = SnailsLifeHistory[classIndex]
        }
        else {
            var lf = SpidersLifeHistory[classIndex]
        }
        setLifeHistory(lf)
    }
    function hmint(factno) {
        if (factno == 1) {
            var hint = ClassHumanInteraction[classIndex]
        }
        else if (factno == 2) {
            var hint = BugsHumanInteraction[classIndex]
        }
        else if (factno == 3) {
            var hint = BeetlesHumanInteraction[classIndex]
        }
        else if (factno == 4) {
            var hint = SnailsHumanInteraction[classIndex]
        }
        else {
            var hint = SpidersHumanInteraction[classIndex]
        }
        setHumanInteraction(hint)
    }
    function mgmt(factno) {
        if (factno == 1) {
            var mgmt = ClassManagement[classIndex]
        }
        else if (factno == 2) {
            var mgmt = BugsManagement[classIndex]
        }
        else if (factno == 3) {
            var mgmt = BeetlesManagement[classIndex]
        }
        else if (factno == 4) {
            var mgmt = SnailsManagement[classIndex]
        }
        else {
            var mgmt = SpidersManagement[classIndex]
        }
        setManagement(mgmt)
    }
    function refs(factno) {
        if (factno == 1) {
            var ref = ClassReferences[classIndex]
        }
        else if (factno == 2) {
            var ref = BugsReferences[classIndex]
        }
        else if (factno == 3) {
            var ref = BeetlesReferences[classIndex]
        }
        else if (factno == 4) {
            var ref = SnailsReferences[classIndex]
        }
        else {
            var ref = SpidersReferences[classIndex]
        }
        setReferences(ref)
    }
    return (
        <ScrollView style={styles.screen}>
            <TouchableCmp onPress={() => BackNav(factSheetno)} useForeground>
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', width: screenWidth * 0.25, height: screenWidth * 0.12 }}>
                    <Text style={{ color: 'white', fontFamily: 'title-bold', fontSize: 16 }}>Back</Text>
                </View>
            </TouchableCmp>
            <TouchableCmp onPress={() => { props.navigation.navigate('Home') }} useForeground>
                <View style={{ justifyContent: 'center', alignItems: 'center',  backgroundColor: 'green', width: screenWidth * 0.25, height: screenWidth * 0.12 }}>
                    <Text style={{ color: 'white', fontFamily: 'title-bold', fontSize: 16 }}>Home</Text>
                </View>
            </TouchableCmp>

            <CardItem style={{ marginTop: 20, marginLeft: screenWidth * 0.05, width: screenWidth * 0.9, display: 'flex', flexDirection: 'column', padding: 15, backgroundColor: '#dcdcdc' }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text style={{ fontSize: 20, fontFamily: 'title-bold', marginBottom: 5 }}>{className.toUpperCase()}</Text>
                        <Text style={{ fontSize: 20, fontFamily: 'title-regular' }} >FACT SHEET</Text>
                    </View>
                    <View style={{ backgroundColor: 'black', width: screenWidth * 0.3, height: screenWidth * 0.3, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ position: 'absolute', top: 0, left: 0, width: borderWidthSmall, height: borderLongthSmall, backgroundColor: darkRed, zIndex: 1 }} />
                        <View style={{ position: 'absolute', top: 0, left: 0, width: borderLongthSmall, height: borderWidthSmall, backgroundColor: darkRed, zIndex: 1 }} />
                        <View style={{ position: 'absolute', bottom: 0, left: 0, width: borderWidthSmall, height: borderLongthSmall, backgroundColor: darkRed, zIndex: 1 }} />
                        <View style={{ position: 'absolute', bottom: 0, left: 0, width: borderLongthSmall, height: borderWidthSmall, backgroundColor: darkRed, zIndex: 1 }} />
                        <View style={{ position: 'absolute', bottom: 0, right: 0, width: borderWidthSmall, height: borderLongthSmall, backgroundColor: darkRed, zIndex: 1 }} />
                        <View style={{ position: 'absolute', bottom: 0, right: 0, width: borderLongthSmall, height: borderWidthSmall, backgroundColor: darkRed, zIndex: 1 }} />
                        <View style={{ position: 'absolute', top: 0, right: 0, width: borderWidthSmall, height: borderLongthSmall, backgroundColor: darkRed, zIndex: 1 }} />
                        <View style={{ position: 'absolute', top: 0, right: 0, width: borderLongthSmall, height: borderWidthSmall, backgroundColor: darkRed, zIndex: 1 }} />

                        {
                            iconWH > 1 ?
                                <Image source={{ uri: `data:image/png;base64,${icon}` }} style={{ width: screenWidth * 0.3, height: screenWidth * 0.3 / iconWH }} />
                                :
                                <Image source={{ uri: `data:image/png;base64,${icon}` }} style={{ width: screenWidth * 0.3 * iconWH, height: screenWidth * 0.3 }} />
                        }
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Common name: </Text>
                    <Text style={styles.textBody}>{CommonNames[classIndex]}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Scientific name: </Text>
                    <Text style={styles.textBody}>{ScientificNames[classIndex]}</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Distribution: </Text>
                    <Text style={styles.textBody}>{Distribution[classIndex]}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Habitat: </Text>
                    <Text style={styles.textBody}>{Habitat[classIndex]}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>life History: </Text>
                    <Text style={styles.textBody}>{LifeHistory[classIndex]}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Human Interaction: </Text>
                    <Text style={styles.textBody}>{HumanInteraction[classIndex]}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Management: </Text>
                    <Text style={styles.textBody}>{Management[classIndex]}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={{ fontFamily: 'title-bold', fontSize: 16, marginBottom: 5 }}>References: </Text>
                    {
                        References[classIndex].split('+').map(
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
        backgroundColor: 'black'
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
        fontSize: 23,
        fontFamily: 'title-bold'
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
        fontFamily: 'title-bold',
        fontSize: 16
    },
    textBody: {
        fontFamily: 'body-regular',
        fontSize: 14,
        textAlign: 'justify',
        marginTop: 5,
    },
    textBodyRef: {
        fontFamily: 'body-italic',
        fontSize: 14,
        textAlign: 'justify',
    },
    textContainer: {
        marginTop: 10
    }
});

export default FactsheetScreen
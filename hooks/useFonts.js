// JavaScript source code
import * as Font from "expo-font";
export default useFonts = async () => {
    await Font.loadAsync({
        'title-regular': require('../assets/fonts/GOTHIC.ttf'),
        'title-bold': require('../assets/fonts/GOTHICB.ttf'),
        'body-regular': require('../assets/fonts/MinionPro-Regular.otf'),
        'body-italic': require('../assets/fonts/MinionPro-It.otf'),
        'body-bold': require('../assets/fonts/MinionPro-Bold.otf'),
        'body-smb': require('../assets/fonts/MinionPro-Semibold.otf')
    })
}
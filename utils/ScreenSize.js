import {React, Dimensions} from "react-native";

const ScreenSize = {
    theWidth: Math.round(Dimensions.get('window').width ),
    theHeight: Math.round(Dimensions.get('window').height)
    //game_height: this.height - .5,

};

export default ScreenSize;
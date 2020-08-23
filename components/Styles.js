import { StyleSheet } from 'react-native';
import ScreenSize from '../utils/ScreenSize'


const styles = StyleSheet.create({

    direction_pad: {
        height:'10%',
        flexDirection:'row',
        backgroundColor:'gold',
        justifyContent: 'space-between',
    },

    menu:{
        justifyContent: 'center',
    },



    platform:{
        justifyContent:'center',
        height:60,
        fontSize:23,
        borderWidth: 4,
        borderColor:'black',
    },

    world:{
        justifyContent: 'center',
        height: ScreenSize.theHeight,
        width: ScreenSize.theWidth,



    }



});

export default styles
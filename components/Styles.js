import { StyleSheet } from 'react-native';
import ScreenSize from '../utils/ScreenSize'


const styles = StyleSheet.create({

    direction_pad: {
        flexDirection:'row',
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
        borderWidth: 5,
        borderColor: 'black',
        color: 'white',
        justifyContent: 'center',
        height: ScreenSize.theHeight,
        width: ScreenSize.theWidth,

    },

    vary: {
        width:'25%',
        height:'25%',
        position:'absolute',
    },



});

export default styles
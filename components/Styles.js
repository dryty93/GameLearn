import { StyleSheet } from 'react-native';
import ScreenSize from '../utils/ScreenSize'


const styles = StyleSheet.create({



    menu:{
        justifyContent: 'center',
        position:'absolute',
        width:'20%',
        alignItems: 'center',
    },



    world:{
        borderWidth: 5,
        borderColor: 'black',

        height: ScreenSize.theHeight,
        width: ScreenSize.theWidth,
        flex: 1,


    },


    vary: {

        width:'50%',
        height:'30%',
        justifyContent:'center',
        paddingTop:'25%',
        paddingBottom:'10%',


    },

    menuButton: {
        justifyContent:'center',
    }



});

export default styles
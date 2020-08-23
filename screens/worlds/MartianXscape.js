import React from 'react';
import {TouchableOpacity,Image, ImageBackground, View,Text, ScrollView} from "react-native";
import styles from "../../components/Styles";

// Will change later const world = {};


/* make image a button
<TouchableOpacity style={styles.direction_pad} activeOpacity={0.5}>
                <Image
                    source={require("../../assets/directPad.png")}
                    style={{ width:150, height:50, flexDirection:'row' }}
                />
            </TouchableOpacity>*/


function MartianEscape({navigation}) {
    return (


        <View style={styles.martianXscapeScreen}>



            <ImageBackground

                style={styles.world}

                source={require("../../assets/MESCAPE.png")}>




                <Image
                    source={ require('../../assets/vvi.png')}
                    style={styles.vary}/>


               <Text style={{color:"white", flexDirection:"row", flex:1, position:"absolute"}}>
                    0

                    1

                    2

                    3

                    4
                </Text>


            </ImageBackground>



        </View>
    );
}

export default MartianEscape
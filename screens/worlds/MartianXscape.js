import React from 'react';
import {Button, ImageBackground, View} from "react-native";
import styles from "../../components/Styles";

// Will change later const world = {};


function MartianEscape({navigation}) {
    return (
        <View style={styles.martianXscapeScreen}>




            <ImageBackground



                style={styles.world}

                source={require("../../assets/MESCAPE.png")}>


                <Button style={styles.world}
                        color="black"
                        title = 'Menu'

                        onPress={() => navigation.navigate('Menu')}
                />



            </ImageBackground>







        </View>
    );
}

export default MartianEscape
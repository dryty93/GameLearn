import React, {useState, Component} from 'react';
//import { GameLoop } from "react-native-game-engine";
import Image from "react-native-web/src/exports/Image";
import {View} from "react-native";
import styles from "../components/Styles";

class Vary extends Component {
    state = { hp: 100,

              damage: this.hp-5 };

    render(props) {
        return (
            <View >

                <Image style={styles.vary}
                       source={'./vvi.png'}
                       />




            </View>
        );
    }
}


export default  Vary;


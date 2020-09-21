import {Button, Text, View} from "react-native";
import styles from "../components/Styles";
import * as React from 'react';


function Menu({navigation}) {
    return (
        <View style={styles.menu}>
            <Text style={{textAlign:'center'}}>GameLearn</Text>
            <Text style={{textAlign:'center'}}>Dryden Inc Games</Text>
            <Text style={{textAlign:'center'}}>Menu:</Text>


            <Button style={styles.menuButton}
                color="black"
                title =  'Martian Escape'

                onPress={() => navigation.navigate('MartianEscape')}
            />

        </View>
    );
}

export default Menu;
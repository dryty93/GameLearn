import {Button, Text, View} from "react-native";
import styles from "../components/Styles";
import * as React from 'react';


function Menu({navigation}) {
    return (
        <View style={styles.menu}>
            <Text>GameLearn</Text>
            <Text>Dryden Inc Games</Text>
            <Text>Menu:</Text>
            <Button
                color="black"
                title =  'Martian Escape'

                onPress={() => navigation.navigate('MartianEscape')}
            />

        </View>
    );
}

export default Menu;
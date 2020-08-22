import * as React from 'react';
import { View, Text, Button,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ImageBackground} from "react-native-web";

function Menu({navigation}) {
    return (
        <View >
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


function MartianEscape({navigation}) {
    return (
        <View>

            <Button
                color="black"
                title = 'Menu'

                onPress={() => navigation.navigate('Menu')}
            />


            <ImageBackground

               style={{ justifyContent: 'center', height:'400%',width: '100%',
               }}
               source={require("./assets/MESCAPE.png")}>




           </ImageBackground>
            <Image
                style={{align: 'center', justifyContent:'center',width:'20%', height:'100', resizeModeText: 'stretch'}}
                source={require("./assets/Vary.png")}>

            </Image>




        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (


        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Menu" component={Menu} />
                <Stack.Screen name="MartianEscape" component={MartianEscape} />
            </Stack.Navigator>
        </NavigationContainer>





    );
}

export default App;
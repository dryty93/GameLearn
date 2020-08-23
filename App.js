// import screen 'activities'
import MartianXscape from './screens/worlds/MartianXscape';
import Menu from "./screens/Menu";

//import navigation for screen change
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  React from 'react';

const Stack = createStackNavigator();

function App() {
    return (
             <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Menu" component={Menu} />
                    <Stack.Screen name="MartianEscape" component={MartianXscape} />
                </Stack.Navigator>
            </NavigationContainer>

    );
}

export default App;
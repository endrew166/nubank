import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './pages/Main'

const Stack = createStackNavigator();

const Routes = () =>(
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            
            <Stack.Screen name = "Home" component={Main}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;
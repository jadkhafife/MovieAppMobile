import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Filminfo} from '../component/Filminfo';
import FilmDetail from '../component/FilmDetail';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Filminfo} />
                <Stack.Screen name="Details" component={FilmDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MyStack;
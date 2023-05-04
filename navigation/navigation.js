import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, Header } from '@react-navigation/native-stack';
import { Filminfo } from '../component/Filminfo';
import { FilmDetail } from '../component/FilmDetail';
import { Image, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  const navigationRef = React.useRef(null);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFFFFF',
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 1,
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() =>navigationRef.current?.navigate('Home') }>
              <Image
                style={{ marginLeft: 10, width: 120, height: 30 }}
                source={{ uri: 'https://dummyimage.com/120x30/000000/fff.png&text=Logo' }}
              />
            </TouchableOpacity>
          )
        }}>
        <Stack.Screen name="Home" component={Filminfo} />
        <Stack.Screen name="Details" component={FilmDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

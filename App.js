import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './navigation/navigation';
import FilmDetail from './component/FilmDetail';

export default function App() {
  return (
    <View style={styles.container}>
      <MyStack />
      {/* <Details />
      {/* <Filminfo />
      <Filminfo />
      <Filminfo />
      <Filminfo />
      <Filminfo /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

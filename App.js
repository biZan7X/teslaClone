import React from 'react';
import {StyleSheet, View, Text,ImageBackground} from 'react-native';
//& components
import CarList from './components/CarList';
import Header from './components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CarList />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

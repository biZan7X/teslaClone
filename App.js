import React from 'react';
import {StyleSheet, View, Text,ImageBackground} from 'react-native';
//& components
import CarItem from './components/CarItem';


const App = () => {
  return (
    <View style={styles.container}>
      <CarItem />
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

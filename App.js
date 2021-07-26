import React from 'react';
import {StyleSheet, View, Text,ImageBackground} from 'react-native';
//& components
import CarItem from './components/CarItem';


const App = () => {
  return (
    <View style={styles.container}>
      <CarItem 
        name="Model X"
        tagLine="Order Online for"
        tagLineCTA="Touchless Delivery"
        image={require('./assets/images/ModelX.jpeg')}
      />
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

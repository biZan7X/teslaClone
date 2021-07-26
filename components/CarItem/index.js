import React from 'react';
import {View, Text,ImageBackground} from 'react-native';
import styles from './styles';
//& components
import StyledButton from '../StyledButton';

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelS.jpeg')}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>starting at $65,000</Text>
      </View>

      <StyledButton type="primary" content="Custom Order" onPress={() => console.warn("you pressed custom order")} />
      <StyledButton type="secondary" content="Existing Inventory" onPress={() => console.warn("you pressed inventory")} />
    </View>
  );
};

export default CarItem;

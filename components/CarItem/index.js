import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
//& components
import StyledButton from '../StyledButton';

const CarItem = ({name,tagLine,tagLineCTA,image}) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
            {tagLine}
            {' '}
            <Text style={styles.subtitleCTA} >{tagLineCTA}</Text>
        </Text>
      </View>

      <View style={styles.bottonContainer}>
        <StyledButton
          type="primary"
          content="Custom Order"
          onPress={() => console.warn('you pressed custom order')}
        />
        <StyledButton
          type="secondary"
          content="Existing Inventory"
          onPress={() => console.warn('you pressed inventory')}
        />
      </View>
    </View>
  );
};

export default CarItem;

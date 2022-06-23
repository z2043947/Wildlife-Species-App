import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardItem = props => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 2,
    backgroundColor: 'white'
  }
});

export default CardItem;

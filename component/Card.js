import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return (
        // props style will add or overwrite the attribute
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
        </View>
    )

};

const styles = StyleSheet.create({
    card: {
        // ios effect
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        // android effect
        elevation: 1,

        // 
        borderRadius: 10,
        backgroundColor: 'white'
    }
});

export default Card;

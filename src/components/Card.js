import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';

const Card = ({newStyles, children}) => {
  return (
    <View style={{...styles.container, ...newStyles}}>
        {children}
    </View>
  );
}

export default Card;
const styles = StyleSheet.create({
    container: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
        padding: 10,
        marginVertical: 25,
        shadowColor: "#43b4d4",
        shadowOffset: {wdith: 0, height: 2},
        shadowRadius: 10,
        shadowOpacity: 0.4,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: Colors.secondary,
      },

});
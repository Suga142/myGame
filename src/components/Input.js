import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Colors from '../constants/Colors';

const Input = ({newStyle, ...restProps}) => {
  return (
    <View>
      <TextInput style={{...styles.input, ...newStyle}} {...restProps}/>
    </View>
  );
}

export default Input;
const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    marginVertical: 10,
    width: 50,
    color: Colors.actionColor,
    fontSize: 18,
    textAlign: "center",
  },
});
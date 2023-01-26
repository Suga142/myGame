import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';

const StartGameScreen = ({onStartGame}) => {
  const [value, setValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selection, setSelection] = useState("");

  const handleInput = (text) => {
    console.log(text);
    setValue(text.replace(/[^0-9]/g, ""));

  }

  const handleConfirm = () => {
    const newValue = parseInt(value);
    if (newValue === NaN || newValue <= 0 || newValue > 99) return

    setConfirmed(true);
    setSelection(newValue);
    setValue("");
  }

  const handleClear = () => {
    setValue("");
    setConfirmed(false);
  }

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Text style={styles.containerText}>Get Ready</Text>
          <Card newStyles={styles.inputContainer}>
            <Text style={styles.subtitle}>Pick a number</Text>
            <Input blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="numeric" maxLength={2} value={value} onChangeText={handleInput} />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button color={Colors.disableColor} title="Clear" onPress={handleClear} />
              </View>
              <View style={styles.button}>
                <Button color={Colors.actionColor} title="Confirm" onPress={handleConfirm} />
              </View>

            </View>
          </Card>

          {confirmed &&
            <View>
              <Text style={styles.containerText}>Your selection is {selection} </Text>
              <Button color={Colors.actionColor} title="Start Game" onPress={() => onStartGame(selection)} />
            </View>
          }

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default StartGameScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  containerText: {
    fontSize: 18,
    marginVertical: 20,
    backgroundColor: Colors.secondary,
    color: Colors.tertiary,
    padding: 10,
    borderRadius: 10,
  },
  subtitle: {
    color: Colors.tertiary,
    fontSize: 18,
    backgroundColor: Colors.secondary,
  },
  inputContainer: {

  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  button: {
    width: 100,

  },


});
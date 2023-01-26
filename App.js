import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import Header from './src/components/Header';
import GameScreen from './src/screens/GameScreen';
import StartGameScreen from './src/screens/StartGameScreen';


export default function App() {
  const [loaded] = useFonts({TekoRegular: require("./src/assets/fonts/Teko-Regular.ttf")})
  const [userNumber, setUserNumber] = useState();
  
  const handleStartGame = selection => {
    setUserNumber(selection);
  }

  let content = <StartGameScreen onStartGame={handleStartGame}/>

  if (userNumber) {
    content = <GameScreen/>
  }

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header title={"Guess the Number"} newStyles={{fontFamily: "TekoRegular"}}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Colors from '../constants/Colors';
import Card from '../components/Card';

const GameScreen = () => {
    const [currentGuess, setCurrentGuess] = useState();

    useEffect(() => {
        setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1))
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.containerText}>Opponent's Guess: {currentGuess} </Text>
            
            <Card newStyles={styles.buttonContainer}>
                <Button title="Lower" color={Colors.disableColor} onPress={() => console.log("Lower")} />
                <Button title="Higher" color={Colors.actionColor} onPress={() => console.log("Higher")} />
            </Card>
        </View>
    );
}

export default GameScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: Colors.primary
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        width: "80%",

    },

    containerText: {
        fontSize: 18,
        marginVertical: 20,
        backgroundColor: Colors.secondary,
        color: Colors.tertiary,
        padding: 10,
        borderRadius: 10,
    },

});
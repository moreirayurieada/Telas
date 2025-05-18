import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Tela1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>Esse botão vai te levar para tela anterior</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>⬅ </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e0e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  description: {
    fontSize: 20,
    color: '#dcd0ff',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'serif',
  },
  button: {
    backgroundColor: '#320d4f',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    borderColor: '#884dc4',
    borderWidth: 2,
  },
  buttonText: {
    color: '#e9d4ff',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'serif',
  },
});


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>Esse botão abaixo te leva para outra tela</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela1')}>
        <Text style={styles.buttonText}>'-'</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  description: {
    fontSize: 20,
    color: '#d1b2ff',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'serif',
  },
  button: {
    backgroundColor: '#3d0f5e',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    borderColor: '#b084eb',
    borderWidth: 2,
  },
  buttonText: {
    color: '#f1e6ff',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'serif',
  },
});

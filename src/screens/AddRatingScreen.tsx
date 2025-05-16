import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddRatingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Rating</Text>
      <Text style={styles.subtitle}>Rate the water quality</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
});

export default AddRatingScreen; 
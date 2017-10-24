import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.white}>This is my first React-Native App!</Text>
        <Text style={styles.small}>Pelo menos eu acho que é...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61082b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: 'white',
  },
  small: {
    color: '#ccc',
    fontSize: 9,
  }
});

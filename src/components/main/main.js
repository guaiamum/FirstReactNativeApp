import React, { Component } from 'react';
import {
  StyleSheet, View, Image, Text, TextInput, KeyboardAvoidingView, StatusBar
} from 'react-native';


export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      kmPerLiter: '20',
      literPerHundred: '5',
      warning: ""
    }
    resultado = (result) => {
      var _result = 20, _warning = "";
      if (result != "" || result > 0) {
        _result = this.EuToBr(result);
        if (isNaN(_result) || _result < 0) {
          _result = "?";
          if (result.contains(',')) { _warning = "try using a \".\" instead of a comma!" }
        }
      }
      this.setState({ kmPerLiter: _result, warning: _warning });
    }
  }

  BrToEu = (kmPerLiter) => {
    return (kmPerLiter / 100).toFixed(2);
  }

  EuToBr = (literPerHundred) => {
    return (100 / literPerHundred).toFixed(2);
  }

  render() {
    const state = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/main.png')}
          />
        </View>
        <View style={styles.measureContainer}>
          <TextInput
            underlineColorAndroid='rgba(0,0,0,0)'
            keyboardType="numeric"
            placeholder="20 km per liter"
            style={styles.input}
            value={state.kmPerLiter}
            onChangeText={(text) => { resultado(text) }}
          />
          <Text style={styles.measureLabel} >km/l</Text>
        </View>

        <Text style={styles.small} >{state.warning}</Text>

        <View style={styles.measureContainer}>
          <Text style={styles.measureLabel} >liters per 100 km</Text>
          <TextInput
            underlineColorAndroid='rgba(0,0,0,0)'
            keyboardType="numeric"
            style={styles.input}
            value={state.literPerHundred}
            onChangeText={(text) => { resultado(text) }}
          />

        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61082b'
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginTop: 4,
    marginBottom: 4
  },
  measureContainer: {
    //alignItems: 'center',
    justifyContent: 'center',
  },
  small: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: 9,
  },
  measureLabel: {
    fontFamily: 'JosefinSans-Thin',
    color: '#ccc',
    fontSize: 15,
    alignSelf: 'center'
  },
  input: {
    fontSize: 150,
    height: 250,
    margin: 10,
    textAlign: 'center',
    //backgroundColor: 'rgba(255,255,255,0.4)',
    color: 'white'
  }
});

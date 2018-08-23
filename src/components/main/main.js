import React, { Component } from 'react';
import {
  StyleSheet, View, Image, Text, TextInput, KeyboardAvoidingView, StatusBar
} from 'react-native';
import MeasureInput from '../measureInput/measureInput';


export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      kmPerLiter: '20',
      literPerHundred: '5',
      warning: ''
    }
  }

  Convert = (result) => {
    let _result = (100 / result).toFixed(2);
    
    if (isNaN(_result) || _result < 0) {
      _result = "?";
      if (result.contains(',')) { 
        this.setState((prev) => ({kmPerLiter: prev.kmPerLiter, literPerHundredwarning: prev.literPerHundred, warning:"try using a \".\" instead of a comma!" }));
        return null;
      }
    }

    return _result;
  }

  BrToEu = (kmPerLiter) => {
    let result = this.Convert(kmPerLiter);
    if(result)
      this.setState({ kmPerLiter: kmPerLiter, literPerHundred: result, warning: ''});
  }

  EuToBr = (literPerHundred) => {
    let result = this.Convert(literPerHundred);
    if(result)
      this.setState({ kmPerLiter: result, literPerHundred: literPerHundred, warning: ''});
  }

  render() {
    const state = this.state, props = this.props;
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
            style={styles.input}
            value={state.kmPerLiter}
            onChangeText={(text) => { this.BrToEu(text) }}
          />
          <Text style={styles.measureLabel} >km/l</Text>
        </View>

        <Text style={styles.smallWarning} >{state.warning}</Text>

        <View style={styles.measureContainer}>
          <Text style={styles.measureLabel} >liters per 100 km</Text>
          <TextInput
            underlineColorAndroid='rgba(0,0,0,0)'
            keyboardType="numeric"
            style={styles.input}
            value={state.literPerHundred}
            onChangeText={(text) => { this.EuToBr(text) }}
          />

        </View>

        <MeasureInput isMedia={false} data={{onChangeCallback: this.EuToBr}}/>

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
  smallWarning: {
    justifyContent: 'center',
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

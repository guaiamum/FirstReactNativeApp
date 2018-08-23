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

  Convert = (toConvert) => {
    let result = (100 / toConvert).toFixed(1);

    if (!isFinite(result) || result < 0) {
      result = "?";
      if (toConvert.contains(',')) {
        return this.Convert(toConvert.replace(/,/g,'.'));
      }
    }

    return result;
  }

  BrToEu = (kmPerLiter) => {
    let result = this.Convert(kmPerLiter);
    if (result)
      this.setState({ kmPerLiter: kmPerLiter, literPerHundred: result });
  }

  EuToBr = (literPerHundred) => {
    let result = this.Convert(literPerHundred);
    if (result)
      this.setState({ kmPerLiter: result, literPerHundred: literPerHundred });
  }

  render() {
    const state = this.state, props = this.props;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <StatusBar barStyle="light-content" />
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
  // customFont: {
  //   fontFamily: 'Josefin Sans Bold',
  //   color: 'yellow'
  // },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '2.5%',
    paddingLeft: '5%'
  },
  logo: {
    width: 30,
    height: 30
  },

  smallWarning: {
    alignSelf: 'center',
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
  },

  measureContainer: {
    justifyContent: 'center',
    // backgroundColor: '#4d4d33'
  },
  measureLabel: {
    color: '#ccc',
    fontSize: 15,
    alignSelf: 'center'
  },
  input: {
    fontSize: 150,
    height: 240,
    textAlign: 'center',
    color: 'white',
    // backgroundColor: '#2e2e1f'
  }
});

import React, {Component} from 'react';
import {
  StyleSheet, View, Image, Text, TextInput, KeyboardAvoidingView, StatusBar
} from 'react-native';



export default class Main extends Component {
  constructor(){
    super();
    this.state = {
      result: 20,
      warning: ""
    }
    resultado = (result) => {
      var _result = 20, _warning = "";
      if (result != "" || result > 0) {
        _result = (100 / result).toFixed(2);
        if (isNaN(_result) || _result < 0){
          _result = "?";
          if(result.contains(',')){_warning = "try using a \".\" instead of a comma"}
        }
      }
      //console.log(result, typeof(result));
      this.setState({result: _result,warning: _warning});
    }
  }
  render() {
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

        <Text style={styles.result} >
          {this.state.result} km/l
        </Text>
        <Text style={styles.small} >
          {this.state.warning}
        </Text>
      </View>

      <TextInput
        underlineColorAndroid= 'rgba(0,0,0,0)'
        keyboardType="numeric"
        placeholder="5 liters per 100 km"
        style={styles.input}
        onChangeText={(text) => {resultado(text)}}
      />

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61082b'
  },
  small: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: 9,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 4
  },
  logoContainer: {
    marginTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    color: 'white',
    fontSize: 35,
    marginTop: 8
  },
  input: {
    height: 40,
    margin: 10,
    paddingHorizontal: 5,
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0.4)',
    color: 'white'
  }
});

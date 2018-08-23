import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class MeasureInput extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render(){
        let props = this.props;
        return(
            <TextInput
                underlineColorAndroid='rgba(0,0,0,0)'
                keyboardType="numeric"
                style={styles.input}
                value={props.value}
                onChangeText={(text) => { props.onChangeCallback(text) }}
            />
        )
    }
}
const styles = StyleSheet.create({
  input: {
    fontSize: 150,
    height: 240,
    textAlign: 'center',
    color: 'white',
    // backgroundColor: '#2e2e1f'
  }
});
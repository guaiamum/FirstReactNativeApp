import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class MeasureInput extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <TextInput
                underlineColorAndroid='rgba(0,0,0,0)'
                keyboardType="numeric"
                style={styles.input}
                value={state.kmPerLiter}
                onChangeText={(text) => { this.props.onChangeCallback(text) }}
            />
        )
    }
}
import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './TextArea.component.style';
import {Platform} from 'react-native';

class TextArea extends Component {
  state = {
    text : ''
  }
  render() {
    const {...extraProps} = this.props;
    const alignTextTop = Platform.OS ==='android' ? {textAlignVertical: 'top'}: {};
    return (
      <TextInput
        {...extraProps}
        style={[styles.textArea, alignTextTop, extraProps.style]}
        multiline = {true}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        underlineColorAndroid={'transparent'}
      />
    );
  }
}

export default TextArea;
import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';


const TextInput = ({ style, error, ...props }) => {

  const styles = StyleSheet.create({
    text: {
      borderWidth: 1, // Separate the fields
      borderColor: theme.colors.textSecondary,
      padding: 2,
      margin: 5,
      height: 30
    }
  })

  const textInputStyle = [style, styles.text];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
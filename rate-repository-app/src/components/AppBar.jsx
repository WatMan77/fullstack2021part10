import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,

    // ...
  },
  text: {
    color: theme.colors.primary
  }
  // ...
});

const AppBarTab = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
     </View>
  );
};

const AppBar = () => {
  return(
     <AppBarTab text={'Repositories'} />
     );
};

export default AppBar;
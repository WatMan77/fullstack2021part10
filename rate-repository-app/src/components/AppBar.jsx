import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,

    // ...
  },

  text: {
    color: theme.colors.primary,
    padding: 5
  },

  bar: {
    flexDirection: 'row',
    backgroundColor: theme.colors.textPrimary,
  }
  // ...
});

const AppBarTab = ({ text, to }) => {
  return (
    <View style={styles.container}>
      <Link to={to}>
        <Text style={styles.text}>{text}</Text>
      </Link>
     </View>
  );
};

const AppBar = () => {
  return(
    <View style={styles.bar}>
      <ScrollView horizontal>
        <AppBarTab text={'Repositories'} to='/' />
        <AppBarTab text={'Sign in'} to='/signin'/>
      </ScrollView>
    </View>
     );
};

export default AppBar;
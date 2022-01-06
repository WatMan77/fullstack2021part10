import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native';
import { GET_AUTHORIZED } from '../../graphql/queries';
import { useQuery } from '@apollo/client';

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

const SignOutTab = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log("Should logout")}>
        <Text>Sign out</Text>

      </Pressable>

    </View>
  )
}

const AppBar = () => {

  const { data, error, loading } = useQuery(GET_AUTHORIZED, {
    fetchPolicy: 'cache-and-network'
  }) 

  console.log("What is data?", data)

  return (
    <View style={styles.bar}>
      <ScrollView horizontal>
        <AppBarTab text={'Repositories'} to='/' />
        {(data && !data.authorizedUser)
        ? <AppBarTab text={'Sign in'} to='/signin' /> 
        : <AppBarTab text={'Sign out'} to='/signout'/>}
      </ScrollView>
    </View>
  );
};

export default AppBar;
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SigIn';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/signin' exact>
          <SignIn />
        </Route>
        <Redirect to='/' /> {/*Only one redirection needed*/}
      </Switch>
    </View>
  );
};

export default Main;
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DeckList from './DeckList';
import DeckView from './DeckView';

const AppNavigator = StackNavigator({
  Home: { screen: DeckList },
  DeckView: {screen: DeckView}
});

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { allValues } from './utils/api';
import HomeView from './HomeView';
import DeckList from './DeckList';
import DeckView from './DeckView';
import AddView from './AddView';
import AddDeck from './AddDeck';
import QuizView from './QuizView';


const AppNavigator = StackNavigator({
  Home: { screen: HomeView },
  DeckList: { screen: DeckList},
  DeckView: {screen: DeckView},
  AddView: {screen: AddView},
  AddDeck: {screen: AddDeck},
  QuizView: {screen: QuizView}
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

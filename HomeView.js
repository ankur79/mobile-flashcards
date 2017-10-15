import React from 'react';
import { StyleSheet, View, ScrollView, AsyncStorage } from 'react-native';
import Deck from './Deck';
import AddDeck from './AddDeck';

export default class HomeView extends React.Component {
  state = {
    dataSet: []
  }

  componentDidMount(){
    const { navigate } = this.props.navigation;
    AsyncStorage.getAllKeys((err, keys) => {
      if(keys.length){
        navigate('DeckList')
      }else{
        navigate('AddDeck')
      }
    });
  }

  render() {
    return (
      <View style={styles.container}></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

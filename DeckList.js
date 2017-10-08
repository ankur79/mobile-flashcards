import React from 'react';
import { StyleSheet, Text, View, FlatList, NavigatorIOS } from 'react-native';
import Deck from './Deck';

export default class DeckList extends React.Component {
  state = {
    dataSet: [{
      title: 'React',
      questions: [{
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      }, {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }]
    }, {
      title: 'JavaScript',
      questions: [{
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }]
    }]
  }
  static navigationOptions = {
    title: 'Decks'
  };
  _keyExtractor = (item, index) => item.title;
  _onPressItem = (data) => {
    const { navigate } = this.props.navigation;
    navigate('DeckView', {data: data});
  };
  _renderItem = ({item}) => (
      <Deck deckData={item} onPressItem={(data) => this._onPressItem(data)}/>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.dataSet}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

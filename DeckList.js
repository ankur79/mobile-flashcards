import React from 'react';
import { StyleSheet, View, ScrollView, AsyncStorage, Button } from 'react-native';
import Deck from './Deck';
import AddDeck from './AddDeck';
import { getDecks } from './utils/api';

export default class DeckList extends React.Component {
  state = {
    dataSet: []
  }
  static navigationOptions = {
    title: 'Decks',
    headerLeft: null
  }
  componentWillMount(){
    /*AsyncStorage.getAllKeys((err, keys) => {
      console.log(keys)
      AsyncStorage.multiRemove(keys, (err) => {
      })
    })*/
    /**/
    this.setupData();
  }
  setupData = () => {
    let deckList = [];
    AsyncStorage.getAllKeys((err, keys) => {
      getDecks(keys).then((res) => {
        res.map((item, i) => {
          item.filter((k, i) => {
            if(i===1){
              deckList.push(JSON.parse(k))
            }
          });
        });
        this.setState({dataSet: deckList})
      })
    });
  }
  addDeck = () => {
    const { navigate } = this.props.navigation;
    navigate('AddDeck');
  }
  _onPressItem = (data) => {
    const { navigate } = this.props.navigation;
    navigate('DeckView', {data: data, refresh: this.setupData});
  };
  render() {
    const deckList = this.state.dataSet;
    return (
      <View style={styles.container}>
        <View style={styles.buttoncontainer}>
          <Button title={"Add Deck"} onPress={()=>this.addDeck()}/>
        </View>
        <ScrollView>
        {deckList.map(item => {
          const key = Object.keys(item)[0]
          return <Deck key={key} deckData={item[key]} onPressItem={(data) => this._onPressItem(data)}/>
        })}
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  buttoncontainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  }
});

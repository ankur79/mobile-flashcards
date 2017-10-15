import React from 'react';
import { StyleSheet, View, ScrollView, AsyncStorage } from 'react-native';
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
  componentDidMount(){
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
  _onPressItem = (data) => {
    const { navigate } = this.props.navigation;
    navigate('DeckView', {data: data});
  };
  render() {
    //let keys = ["1"];
    /*AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiRemove(keys, (err) => {
        // keys k1 & k2 removed, if they existed
        // do most stuff after removal (if you want)
      });
    })*/

    const deckList = this.state.dataSet;
    //console.log(deckList)
    const initView = <ScrollView>
                        {deckList.map(item => {
                          const key = Object.keys(item)[0]
                          return <Deck key={key} deckData={item} onPressItem={(data) => this._onPressItem(data)}/>
                        })}
                      </ScrollView>
    return (
      <View style={styles.container}>{initView}</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
class Deck extends Component {
    render() {
        const { deckData, onPressItem } = this.props;
        return (
            <TouchableHighlight underlayColor="#DDD" onPress={() => onPressItem(deckData)}>
                <View style={styles.container}>
                    <View style={styles.deckcontainer}>
                        <Text style={styles.deckTitle}>{deckData.title}</Text>
                        <Text style={styles.deckSub}>{deckData.questions.length} cards</Text>
                    </View>
                </View>
             </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      borderBottomColor: '#333',
      'borderBottomWidth': 1,
      'padding': 20
    },
    deckcontainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    deckTitle: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    deckSub: {
        fontSize: 20,
        color: '#AAA'
    }
});

export default Deck;
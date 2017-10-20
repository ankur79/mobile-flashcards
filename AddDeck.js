import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, AsyncStorage } from 'react-native';
import { addDeck } from './utils/api';

class AddDeck extends Component {
    state = {
        title: '',
        questions: []
    }
    static navigationOptions = {
        title: 'Add Deck',
        headerLeft: null
      }
    _onSubmit(){
        let newKey = this.state.title;
        const obj = {};
        obj[newKey] = this.state;
        addDeck(newKey, obj);
        const { navigate } = this.props.navigation;
        navigate('Home');
    }  
    render(){
        return(
            <View style={styles.deckcontainer}>
                <View style={styles.quescontainer}>
                        <Text style={styles.deckTitle}>What is title of your deck?</Text>
                        <TextInput
                            style={[styles.inputField, styles.roundAssets]}
                            placeholder="Deck Title"
                            onChangeText={(title) => this.setState({title})}
                        />
                </View>
                <View style={styles.btncontainer}>              
                    <TouchableHighlight onPress={() => this._onSubmit()} style={[styles.button, styles.roundAssets]}>
                        <Text style={{color: 'white'}}>Submit</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deckcontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 20
    },
    quescontainer: {
        flex: 3
    },
    btncontainer: {
        flex: 1
    },
    deckTitle: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    deckSub: {
        fontSize: 20,
        color: '#AAA'
    },
    button: {
        padding: 10,
        minWidth: 150,
        alignItems: 'center',
        backgroundColor:'black'
    },
    roundAssets:{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10
    },
    inputField: {
        backgroundColor:'white'
    }
});


export default AddDeck
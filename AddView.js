import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, AsyncStorage } from 'react-native';
import { addCardToDeck } from './utils/api';

class AddView extends Component {
    state = {
        question: '',
        answer: ''
    }
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
      });
    _onSubmit(){
        const { navigate, state } = this.props.navigation;
        const { questions } = state.params.data;
        questions.push(this.state);
        addCardToDeck(state.params.data.title, state.params.data);
        navigate('DeckView', {data: state.params.data});
    }  
    render(){
        return(
            <View style={styles.deckcontainer}>
                <View style={styles.quescontainer}>
                    <TextInput
                        style={[styles.inputField, styles.roundAssets]}
                        placeholder="Question"
                        onChangeText={(question) => this.setState({question})}
                    />
                    <TextInput
                        style={[styles.inputField, styles.roundAssets]}
                        placeholder="Answer"
                        onChangeText={(answer) => this.setState({answer})}
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
        flex: 1,
        margin: 20
    },
    quescontainer: {
        flex: 3
    },
    btncontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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


export default AddView
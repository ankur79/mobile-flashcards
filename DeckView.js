import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';


class DeckView extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.data.title
      });
    _onPressAdd = () => {
        const { navigate, state } = this.props.navigation;
        navigate('AddView', {title: "Add Card", "data": state.params.data, "refresh": state.params.refresh});
    };  
    _onPressStart = () => {
        const { navigate, state } = this.props.navigation;
        navigate('QuizView', {title: "Quiz", "data": state.params.data});
    };  
    render(){
        const { data } = this.props.navigation.state.params;
        return(
            <View style={styles.deckcontainer}>
                <View style={styles.contentcontainer}>
                    <Text style={styles.deckTitle}>{data.title}</Text>
                    <Text style={styles.deckSub}>{data.questions.length} cards</Text>
                </View>
                <View style={styles.buttoncontainer}>
                    <TouchableHighlight onPress={this._onPressAdd} style={[styles.button, styles.buttonAdd]}>
                        <Text>Add Card</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this._onPressStart} style={[styles.button, styles.buttonStart]}>
                        <Text style={{color: 'white'}}>Start Quiz</Text>
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
        flex: 1
    },
    contentcontainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttoncontainer: {
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
        borderRadius: 5,
        borderWidth: 1,
        minWidth: 150,
        borderColor: 'black',
        alignItems: 'center',
    },
    buttonAdd: {
        backgroundColor:'white',
        marginBottom: 10
    },
    buttonStart: {
        backgroundColor:'black'
    }
});


export default DeckView
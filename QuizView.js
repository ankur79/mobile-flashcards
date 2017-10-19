import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, AsyncStorage, Dimensions } from 'react-native';
import { addCardToDeck } from './utils/api';

class QuizView extends Component {
    state = {
        questions: [],
        startQ: 0,
        answerView: false,
        result: 0,
        score: 0,
        showScore: false
    }
    componentDidMount = () => {
        const { navigate, state } = this.props.navigation;
        const { questions } = state.params.data;
        this.setState({questions: questions});
    }
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
      });
    resetQuiz = () => {
        this.setState({
            startQ: 0,
            answerView: false,
            result: 0,
            score: 0,
            showScore: false
        });
    }
    backtoDeck = () => {
        const { navigate, state } = this.props.navigation;
        navigate('DeckView', {data:state.params.data});
    }          
    _answerQues(res){
        let { startQ, result, questions } = this.state;
        startQ = startQ + 1;
        this.setState({startQ: startQ});
        if(res === 'correct'){
            result = result + 1;
        }
        this.setState({result: result}, ()=>{
            this.scoreCalc(result);
        });
    }
    scoreCalc(result){
        const { questions, startQ } = this.state;
        if(startQ === questions.length){
            let per = (result / questions.length) * 100
            this.setState({score: per, showScore: true});
        }
    }
    render(){
        const { questions, startQ, answerView, score, showScore } = this.state;
        return(
            <View style={styles.deckcontainer}>
                    {questions[startQ]?
                        <View>
                            <View style={styles.numbercontainer}>
                                <Text>{`${startQ+1}/${questions.length}`}</Text>
                            </View>
                            {answerView ?
                                <View style={styles.quescontainer}>
                                    <Text style={styles.question}>{questions[startQ].answer}</Text>
                                    <Text style={styles.labelTxt} onPress={() => this.setState({answerView: !this.state.answerView})}>Question</Text>
                                </View> :    
                            <View style={styles.quescontainer}>
                                <Text style={styles.question}>{questions[startQ].question}</Text>
                                <Text style={styles.labelTxt} onPress={() => this.setState({answerView: !this.state.answerView})}>Answer</Text>
                            </View>
                            }
                        </View>
                        :
                       <View></View>
                    }
               
                <View style={styles.btncontainer}>              
                    {showScore ?
                        <View style={styles.quescontainer}>
                            <Text style={styles.question}>{`You scored ${score}%`}</Text>
                            <TouchableHighlight onPress={() => this.resetQuiz()} style={[styles.button, styles.backbtns]}>
                                <Text style={{color: 'white'}}>Reset Quiz</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => this.backtoDeck()} style={[styles.button, styles.backbtns]}>
                                <Text style={{color: 'white'}}>Back To Deck</Text>
                            </TouchableHighlight>
                        </View> 
                        :
                        <View style={styles.quescontainer}>
                            <TouchableHighlight onPress={() => this._answerQues("correct")} style={[styles.button, styles.correct]}>
                                <Text style={{color: 'white'}}>Correct</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => this._answerQues("incorrect")} style={[styles.button, styles.incorrect]}>
                                <Text style={{color: 'white'}}>Incorrect</Text>
                            </TouchableHighlight>
                        </View>
                    }
                </View>
            </View>
        )
    }
}

const clrRed = 'red';
const clrGreen = 'green';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    deckcontainer: {
        flex: 1,
    },
    numbercontainer:{
        flex: 2,
        height: 20,
        flexDirection: 'column',
        width: width,
        padding: 20
    },
    quescontainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: width,
        padding: 40,
    },
    question: {
        fontSize: 40,
    },
    btncontainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        padding: 10,
        minWidth: 150,
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        padding: 10
    },
    correct:{
        backgroundColor:clrGreen,
        borderColor: clrGreen,
        marginBottom: 20
    },
    incorrect:{
        backgroundColor:clrRed,
        borderColor: clrRed,
    },
    backbtns: {
        backgroundColor:'#6d737c',
        borderColor: '#6d737c',
        marginBottom: 10
    },
    labelTxt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: clrRed
    }

});


export default QuizView
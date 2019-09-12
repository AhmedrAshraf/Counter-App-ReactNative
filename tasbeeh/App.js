import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 25,
  },
  HeadContainer: {
    backgroundColor: '#fff',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    padding: 5,
    alignItems: 'center',
  },
  header: {
    color: 'blue',
    fontWeight: "bold",
    fontSize: 25,
    textShadowColor: 'black',
  },
  goContainer: {
    borderWidth: 3,
    fontWeight: "bold",
    borderColor: 'black',
    marginTop: 100,
    width: 200,
    alignItems: 'center',
    height: 200,
    borderRadius: 1000,
    backgroundColor: 'teal',
    justifyContent: 'center',
  },
  goContainer: {
    borderWidth: 3,
    fontWeight: "bold",
    borderColor: 'black',
    marginTop: 150,
    width: 200,
    alignItems: 'center',
    height: 200,
    borderRadius: 1000,
    backgroundColor: 'teal',
    justifyContent: 'center',
  },
  counter: {
    color: '#fff',
    fontSize: 50,
  },
});


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counts: 0,
    }
  }

  countHandler() {
    this.setState({
      counts: this.state.counts + 1,
    })
  }

  countReset(){
    this.setState({
      counts: 0,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.HeadContainer}>
          <Text style={styles.header}>Counter Tasbeeh</Text>
        </View>

        <TouchableOpacity onLongPress={this.countReset.bind(this)} onPress={this.countHandler.bind(this)}>
          <View style={styles.goContainer}>
            <Text style={styles.counter}>{this.state.counts}</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}


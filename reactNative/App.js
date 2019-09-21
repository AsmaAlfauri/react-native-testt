import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Abd from './Components/Abdullah/Abd';
import Asmaa from './Components/Asmaa/Asma';
import Doha from './Components/Doha/Doha';
import Numan from './Components/Numan/Numan';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text> App Component </Text>
        <Abd />
        <Asmaa />
        <Doha />
        <Numan />
      </View>
    );
  }
}

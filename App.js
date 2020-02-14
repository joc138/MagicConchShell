/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground
} from 'react-native';
import Sound from 'react-native-sound';
import Draggable from 'react-native-draggable';

import no from './media/saysNo.mp3';
import yes from './media/saysYES.mp3';
import taa from './media/saysTaa.mp3';
import msd from './media/saysMaybeSomeday.mp3';
import idts from './media/saysIDTS.mp3';

const App: () => React$Node = () => {
  let sound1 = new Sound(taa);
  let sound2 = new Sound(no);
  let sound3 = new Sound(yes);
  let sound4 = new Sound(msd);

  let sounds = [sound1,sound2,sound3,sound4];

  playSound = () => {
    let random = Math.floor(Math.random() * sounds.length);
    console.log('works');
    let decision = sounds[random];
    decision.play();
    decision.setVolume(1.5);
  }

  return (
    <>
    <ImageBackground
      style={{
        flex: 2,
        alignItems: 'stretch',
        width: '100%',
        height: null
      }}
      source={require('./media/conchPic.jpg')}
    >
      <Draggable
        x={320} y={280}
        renderSize={45}
        renderColor='#b47ee7'
        renderText=''
        isCircle shouldReverse
        onDragRelease={this.playSound}
      />
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;

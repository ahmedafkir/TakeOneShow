//Import React
import React, { Component } from 'react';
//Import React Native Tools
import {
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
//Import Loading Icon
import { BarIndicator } from 'react-native-indicators';
//Import Idea Of Program Component Component
import IdeaOfProgramComponent from '../Component/IdeaOfProgramComponent';
//Import Firebase Database
import * as Database from '../Component/Database';

//Screen Dimension
const { width, height } = Dimensions.get('window');
//Firebase Database
const rootRef = Database.rootRef;
const TakeOneShowRef = rootRef.child('IdeaOfProgram');

//First Component
export default class IdeaOfProgram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IdeaOfProgram: [],
      loading: true,
    };
  }
  componentDidMount() {
    TakeOneShowRef.on('value', childSnapshot => {
      const IdeaOfProgram = [];
      childSnapshot.forEach(doc => {
        IdeaOfProgram.push({
          key: doc.toJSON().key,
          name: doc.toJSON().name,
          content: doc.toJSON().content,
        });
        this.setState({
          IdeaOfProgram: IdeaOfProgram.sort((a, b) => {
            return a.key > b.key;
          }),
          loading: false,
        });
      });
    });
  }
  render() {
    if (this.state.loading == true) {
      return (
        <View style={styles.MainContainer}>
          <ImageBackground
            style={[styles.fixed, styles.containter]}
            source={require('./../images/Background.png')}
          />
          <View style={styles.LoadingStyle}>
            <BarIndicator color="white" />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.MainContainer}>
          <ImageBackground
            style={[styles.fixed, styles.containter]}
            source={require('./../images/Background.png')}
          />
          <ScrollView>
            <View style={{ alignItems: 'center' }}>
              <Image
                style={styles.TopLogoStyle}
                source={require('./../images/Logo.png')}
              />
            </View>
            <View style={styles.containerevents}>
              {this.state.IdeaOfProgram.map(item => (
                <IdeaOfProgramComponent
                  key={item.key}
                  name={item.name}
                  content={item.content}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}

//Styles
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 30,
  },
  containter: {
    width: Dimensions.get('window').width, //for full screen
    height: Dimensions.get('window').height, //for full screen
  },
  fixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  LoadingStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: height / 3,
    margin: 0,
  },
  TopLogoStyle: {
    width: width * 0.4,
    height: width * 0.5,
  },
});

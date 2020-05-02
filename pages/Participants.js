//Import React
import React, { Component } from 'react';
//Import React Native Tools
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
//Import Small Item Component
import SmallItemComponent from './../Component/SmallItemComponent';
//import Firebase Call
import * as Database from './../Component/Database';

//Screen width Dimension
const { width } = Dimensions.get('window');
//Firebase Database
const rootRef = Database.rootRef;
const TakeOneShowRefSetting = rootRef.child('Setting').child('ActivePrimes');
const TakeOneShowRefPrime1 = rootRef.child('Participants').child('Prime1');
const TakeOneShowRefPrime2 = rootRef.child('Participants').child('Prime2');
const TakeOneShowRefPrime3 = rootRef.child('Participants').child('Prime3');
const TakeOneShowRefPrime4 = rootRef.child('Participants').child('Prime4');
const TakeOneShowRefFinal = rootRef.child('Participants').child('Prime5');

//First Component
export default class Participants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ActivePrimes: [],
      Prime1: [],
      Prime2: [],
      Prime3: [],
      Prime4: [],
      Final: [],
      loading: true,
    };
  }
  componentDidMount() {
    //ActivePrimes
    TakeOneShowRefSetting.on('value', childSnapshot => {
      const ActivePrimes = [];
      childSnapshot.forEach(doc => {
        ActivePrimes.push({
          Prime: doc.toJSON().Prime,
          Statut: doc.toJSON().Statut,
        });
        this.setState({
          ActivePrimes: ActivePrimes,
          loading: false,
        });
      });
    });
    //Prime1
    TakeOneShowRefPrime1.on('value', childSnapshot => {
      const Prime1 = [];
      childSnapshot.forEach(doc => {
        Prime1.push({
          key: doc.toJSON().key,
          name: doc.toJSON().name,
          image: doc.toJSON().image,
          description: doc.toJSON().description,
          berthday: doc.toJSON().berthday,
          ville: doc.toJSON().city,
        });
        this.setState({
          Prime1: Prime1.sort((a, b) => {
            return a.key > b.key;
          }),
          loading: false,
        });
      });
    });
    //Prime2
    TakeOneShowRefPrime2.on('value', childSnapshot => {
      const Prime2 = [];
      childSnapshot.forEach(doc => {
        Prime2.push({
          key: doc.toJSON().key,
          name: doc.toJSON().name,
          image: doc.toJSON().image,
          description: doc.toJSON().description,
          berthday: doc.toJSON().berthday,
          ville: doc.toJSON().city,
        });
        this.setState({
          Prime2: Prime2.sort((a, b) => {
            return a.key > b.key;
          }),
          loading: false,
        });
      });
    });
    //Prime3
    TakeOneShowRefPrime3.on('value', childSnapshot => {
      const Prime3 = [];
      childSnapshot.forEach(doc => {
        Prime3.push({
          key: doc.toJSON().key,
          name: doc.toJSON().name,
          image: doc.toJSON().image,
          description: doc.toJSON().description,
          berthday: doc.toJSON().berthday,
          ville: doc.toJSON().city,
        });
        this.setState({
          Prime3: Prime3.sort((a, b) => {
            return a.key > b.key;
          }),
          loading: false,
        });
      });
    });
    //Prime4
    TakeOneShowRefPrime4.on('value', childSnapshot => {
      const Prime4 = [];
      childSnapshot.forEach(doc => {
        Prime4.push({
          key: doc.toJSON().key,
          name: doc.toJSON().name,
          image: doc.toJSON().image,
          description: doc.toJSON().description,
          berthday: doc.toJSON().berthday,
          ville: doc.toJSON().city,
        });
        this.setState({
          Prime4: Prime4.sort((a, b) => {
            return a.key > b.key;
          }),
          loading: false,
        });
      });
    });
    //Final
    TakeOneShowRefFinal.on('value', childSnapshot => {
      const Final = [];
      childSnapshot.forEach(doc => {
        Final.push({
          key: doc.toJSON().key,
          name: doc.toJSON().name,
          image: doc.toJSON().image,
          description: doc.toJSON().description,
          berthday: doc.toJSON().berthday,
          ville: doc.toJSON().city,
        });
        this.setState({
          Final: Final.sort((a, b) => {
            return a.key > b.key;
          }),
          loading: false,
        });
      });
    });
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <ImageBackground
          style={[styles.fixed, styles.containter]}
          source={require('./../images/Background.png')}
        />
        <ScrollView>
          {this.state.ActivePrimes.map(doc => {
            if ((doc.Prime === 5) & (doc.Statut === true)) {
              return (
                <View key={doc.Prime}>
                  <View style={styles.TitleViewStyle}>
                    <Text style={styles.TitleTextStyle}>البرايم النهائي</Text>
                  </View>
                  <View style={styles.RowStyle}>
                    {this.state.Final.map(item => (
                      <SmallItemComponent
                        key={item.key}
                        name={item.name}
                        image={item.image}
                        description={item.description}
                        berthday={item.berthday}
                        ville={item.ville}
                        link="Participant"
                      />
                    ))}
                  </View>
                </View>
              );
            }
          })}
          {this.state.ActivePrimes.map(doc => {
            if ((doc.Prime === 4) & (doc.Statut === true)) {
              return (
                <View key={doc.Prime}>
                  <View style={styles.TitleViewStyle}>
                    <Text style={styles.TitleTextStyle}>البرايم الرابع</Text>
                  </View>
                  <View style={styles.RowStyle}>
                    {this.state.Prime4.map(item => (
                      <SmallItemComponent
                        key={item.key}
                        name={item.name}
                        image={item.image}
                        description={item.description}
                        berthday={item.berthday}
                        ville={item.ville}
                        link="Participant"
                      />
                    ))}
                  </View>
                </View>
              );
            }
          })}
          {this.state.ActivePrimes.map(doc => {
            if ((doc.Prime === 3) & (doc.Statut === true)) {
              return (
                <View key={doc.Prime}>
                  <View style={styles.TitleViewStyle}>
                    <Text style={styles.TitleTextStyle}>البرايم الثالث</Text>
                  </View>
                  <View style={styles.RowStyle}>
                    {this.state.Prime3.map(item => (
                      <SmallItemComponent
                        key={item.key}
                        name={item.name}
                        image={item.image}
                        description={item.description}
                        berthday={item.berthday}
                        ville={item.ville}
                        link="Participant"
                      />
                    ))}
                  </View>
                </View>
              );
            }
          })}
          {this.state.ActivePrimes.map(doc => {
            if ((doc.Prime === 2) & (doc.Statut === true)) {
              return (
                <View key={doc.Prime}>
                  <View style={styles.TitleViewStyle}>
                    <Text style={styles.TitleTextStyle}>البرايم الثاني</Text>
                  </View>
                  <View style={styles.RowStyle}>
                    {this.state.Prime2.map(item => (
                      <SmallItemComponent
                        key={item.key}
                        name={item.name}
                        image={item.image}
                        description={item.description}
                        berthday={item.berthday}
                        ville={item.ville}
                        link="Participant"
                      />
                    ))}
                  </View>
                </View>
              );
            }
          })}
          {this.state.ActivePrimes.map(doc => {
            if ((doc.Prime === 1) & (doc.Statut === true)) {
              return (
                <View key={doc.Prime}>
                  <View style={styles.TitleViewStyle}>
                    <Text style={styles.TitleTextStyle}>البرايم الأول</Text>
                  </View>
                  <View style={styles.RowStyle}>
                    {this.state.Prime1.map(item => (
                      <SmallItemComponent
                        key={item.key}
                        name={item.name}
                        image={item.image}
                        description={item.description}
                        berthday={item.berthday}
                        ville={item.ville}
                        link="Participant"
                      />
                    ))}
                  </View>
                </View>
              );
            }
          })}
        </ScrollView>
      </View>
    );
  }
}

//Styles
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
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
  TitleViewStyle: {
    backgroundColor: '#a5752f',
    width: width / 2,
    marginRight: (width - width / 2) / 2,
    marginLeft: (width - width / 2) / 2,
    borderRadius: 20,
    marginBottom: 30,
  },
  TitleTextStyle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RowStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

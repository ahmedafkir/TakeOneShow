//Import React
import React, { Component } from 'react';
//import React Native Tools
import { StyleSheet, View, Dimensions, ImageBackground } from 'react-native';
//Import Judes Component
import JudesComponent from '../Component/JudesComponent';
//Import Firebase Database
import * as Database from '../Component/Database';

//Firebase Database
const rootRef = Database.rootRef;
const TakeOneShowRef = rootRef.child('Judges');

//First Component
export default class Judges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Judges: [],
            loading: true,
        };
    }
    componentDidMount() {
        TakeOneShowRef.on('value', childSnapshot => {
            const Judges = [];
            childSnapshot.forEach(doc => {
                Judges.push({
                    key: doc.toJSON().key,
                    name: doc.toJSON().name,
                    image: doc.toJSON().image,
                    description: doc.toJSON().description,
                });
                this.setState({
                    Judges: Judges.sort((a, b) => {
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
                {this.state.Judges.map(item => (
                    <JudesComponent
                        key={item.key}
                        name={item.name}
                        image={item.image}
                        description={item.description}
                    />
                ))}
            </View>
        );
    }
}

//Styles
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        paddingTop: 10,
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
});

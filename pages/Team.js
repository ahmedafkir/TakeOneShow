//Import React
import React, { Component } from 'react';
//Import React Native Tools
import {
    View,
    Dimensions,
    StyleSheet,
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
const TakeOneShowRef = rootRef.child('Team');

//First Component
export default class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Team: [],
            loading: true,
        };
    }
    componentDidMount() {
        //Team Data
        TakeOneShowRef.on('value', childSnapshot => {
            const Team = [];
            childSnapshot.forEach(doc => {
                Team.push({
                    key: doc.toJSON().key,
                    name: doc.toJSON().name,
                    image: doc.toJSON().image,
                    description: doc.toJSON().description,
                    thefunction: doc.toJSON().function,
                });
                this.setState({
                    Team: Team.sort((a, b) => {
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
                    <View>
                        <View style={styles.RowStyle}>
                            {this.state.Team.map(item => (
                                <SmallItemComponent
                                    key={item.key}
                                    name={item.name}
                                    image={item.image}
                                    description={item.description}
                                    thefunction={item.thefunction}
                                    link="TeamProfil"
                                />
                            ))}
                        </View>
                    </View>
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

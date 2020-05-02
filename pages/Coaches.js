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
//Firebase Database
const rootRef = Database.rootRef;
const TakeOneShowRefTeamOne = rootRef.child('Coaches').child('EquipeOne');
const TakeOneShowRefTeamTwe = rootRef.child('Coaches').child('EquipeTwe');

//First Component
export default class Coaches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EquipeOne: [],
            EquipeTwe: [],
            loading: true,
        };
    }
    componentDidMount() {
        //TeamOne
        TakeOneShowRefTeamOne.on('value', childSnapshot => {
            const EquipeOne = [];
            childSnapshot.forEach(doc => {
                EquipeOne.push({
                    key: doc.toJSON().key,
                    name: doc.toJSON().name,
                    image: doc.toJSON().image,
                    description: doc.toJSON().description,
                });
                this.setState({
                    EquipeOne: EquipeOne.sort((a, b) => {
                        return a.key > b.key;
                    }),
                    loading: false,
                });
            });
        });
        //Team Twe
        TakeOneShowRefTeamTwe.on('value', childSnapshot => {
            const EquipeTwe = [];
            childSnapshot.forEach(doc => {
                EquipeTwe.push({
                    key: doc.toJSON().key,
                    name: doc.toJSON().name,
                    image: doc.toJSON().image,
                    description: doc.toJSON().description,
                });
                this.setState({
                    EquipeTwe: EquipeTwe.sort((a, b) => {
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
                        <Text style={styles.TitleStyle}>الفريق الأول</Text>
                    </View>
                    <View style={styles.RowStyle}>
                        {this.state.EquipeOne.map(item => (
                            <SmallItemComponent
                                key={item.key}
                                name={item.name}
                                image={item.image}
                                description={item.description}
                                link="Coache"
                            />
                        ))}
                    </View>
                    <View>
                        <Text style={styles.TitleStyle}>الفريق الثاني</Text>
                    </View>
                    <View style={styles.RowStyle}>
                        {this.state.EquipeTwe.map(item => (
                            <SmallItemComponent
                                key={item.key}
                                name={item.name}
                                image={item.image}
                                description={item.description}
                                link="Coache"
                            />
                        ))}
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
    TitleStyle: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Cairo-Bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    RowStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

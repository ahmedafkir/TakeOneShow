//Import React
import React, { Component } from 'react';
//import React Native Tools
import {
    StyleSheet,
    View,
    Dimensions,
    ImageBackground,
    ScrollView,
} from 'react-native';
//Import Loading Icon
import { BarIndicator } from 'react-native-indicators';
//Import Post Component
import PostComponent from '../Component/PostComponent';
//Import Firebase Database
import * as Database from './../Component/Database';

//Screen height Dimension
const { height } = Dimensions.get('window');
//Firebase Database
const rootRef = Database.rootRef;
const TakeOneShowRef = rootRef.child('Posts');

//First Component
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Posts: [],
            loading: true,
        };
    }
    componentDidMount() {
        TakeOneShowRef.on('value', childSnapshot => {
            const Posts = [];
            childSnapshot.forEach(doc => {
                Posts.push({
                    key: doc.toJSON().key,
                    title: doc.toJSON().title,
                    content: doc.toJSON().post,
                    image: doc.toJSON().image,
                });
                this.setState({
                    Posts: Posts.sort((a, b) => {
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
                        <View style={styles.containerevents}>
                            {this.state.Posts.map(item => (
                                <PostComponent
                                    key={item.key}
                                    title={item.title}
                                    content={item.content}
                                    image={item.image}
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
});

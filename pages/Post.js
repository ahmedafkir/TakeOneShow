//Import React
import React, { Component } from 'react';
//Import React Native Tools
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ImageBackground,
    Image,
    ScrollView,
    I18nManager,
} from 'react-native';

//Screen Width Dimension
const { width } = Dimensions.get('window');

//First Component
export default class Post extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        //Values
        const title = this.props.navigation.getParam('title');
        const content = this.props.navigation.getParam('content');
        const image = this.props.navigation.getParam('image');
        return (
            <View style={styles.MainContainer}>
                <ImageBackground
                    style={[styles.fixed, styles.containter]}
                    source={require('./../images/Background.png')}
                />
                <ScrollView>
                    <View
                        style={{
                            marginBottom: 20,
                        }}>
                        <Text style={styles.TitleStyle}>{title}</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={styles.ImageStyle} source={{ uri: image }} />
                    </View>
                    <Text style={styles.ContentStyle}>{content}</Text>
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
        fontFamily: 'Cairo-Bold',
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ImageStyle: {
        width: width * 0.8,
        height: width * 0.5,
    },
    ContentStyle: {
        fontSize: 14,
        fontFamily: 'Cairo-SemiBold',
        color: '#fff',
        writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
        textAlign: 'justify',
        paddingLeft: 20,
        paddingRight: 10,
        paddingTop: 10,
    },
});

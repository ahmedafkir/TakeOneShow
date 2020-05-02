//Import React
import React, { Component } from 'react';
//Import React Native Tools
import { View, Text, Dimensions, I18nManager, StyleSheet } from 'react-native';

//Screen Dimension
const { width } = Dimensions.get('window');

//First Component
export default class IdeaOfProgramComponent extends Component {
    render() {
        return (
            <View>
                <View style={styles.TitleViewStyle}>
                    <View>
                        <Text style={styles.TitleTextStyle}>{this.props.name}</Text>
                    </View>
                </View>
                <Text style={styles.ContentStyle}>{this.props.content}</Text>
            </View>
        );
    }
}

//Styles
const styles = StyleSheet.create({
    TitleViewStyle: {
        backgroundColor: '#a5752f',
        width: width / 2,
        marginRight: (width - width / 2) / 2,
        marginLeft: (width - width / 2) / 2,
        borderRadius: 20,
        marginTop: 20,
    },
    TitleTextStyle: {
        fontFamily: 'Cairo-Bold',
        fontSize: 15,
        textAlign: 'center',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
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

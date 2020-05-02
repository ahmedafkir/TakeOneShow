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
export default class Participant extends Component {
    //Screen Title
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.name}`,
    });

    constructor(props) {
        super(props);
    }
    render() {
        //Values
        const name = this.props.navigation.getParam('name');
        const description = this.props.navigation.getParam('description');
        const image = this.props.navigation.getParam('image');
        const berthday = this.props.navigation.getParam('berthday');
        const ville = this.props.navigation.getParam('ville');
        return (
            <View style={styles.MainContainer}>
                <ImageBackground
                    style={[styles.fixed, styles.containter]}
                    source={require('./../images/Background.png')}
                />
                <ScrollView>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={styles.ImageStyle} source={{ uri: image }} />
                    </View>
                    <View style={styles.TitleViewStyle}>
                        <Text style={styles.TitleTextStyle}>{name}</Text>
                    </View>
                    {ville !== '' ? (
                        <View style={styles.CityViewStyle}>
                            <Text style={styles.CityTextStyle}>المدينة : {ville}</Text>
                        </View>
                    ) : null}
                    {berthday !== '' ? (
                        <View style={styles.BerthdayViewStyle}>
                            <Text style={styles.BerthdayTextStyle}>
                                تاريخ الازدياد : {berthday}
                            </Text>
                        </View>
                    ) : null}

                    <Text style={styles.DescriptionStyle}>{description}</Text>
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
    ImageStyle: {
        width: width * 0.8,
        height: width * 0.5,
    },
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
        fontSize: 14,
        textAlign: 'center',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    CityViewStyle: {
        paddingTop: 20,
        paddingLeft: 10,
    },
    CityTextStyle: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'left',
        fontFamily: 'Cairo-Bold',
    },
    BerthdayViewStyle: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 20,
    },
    BerthdayTextStyle: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'left',
        fontFamily: 'Cairo-Bold',
    },
    DescriptionStyle: {
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

//Import React
import React, { Component } from 'react';
//Import React Native
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
//Import React Navigation Tools
import { withNavigation } from 'react-navigation';

//Screen Width Dimension
const { width } = Dimensions.get('window');

//Post Component
class PostComponent extends Component {
    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.BodyStyle}
                onPress={() =>
                    this.props.navigation.navigate('PostPage', {
                        title: this.props.title,
                        content: this.props.content,
                        image: this.props.image,
                    })
                }>
                <Image style={styles.ImageStyle} source={{ uri: this.props.image }} />
                <View style={styles.BackGroundTextStyle}>
                    <Text style={styles.TextStyle}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

//Styles
const styles = StyleSheet.create({
    BodyStyle: {
        marginBottom: 20,
    },
    BackGroundTextStyle: {
        backgroundColor: '#3c0f50',
        width: width,
        height: width / 8,
        position: 'absolute',
        bottom: 0,
        opacity: 0.6,
        elevation: 5,
    },
    TextStyle: {
        fontFamily: 'Cairo-Bold',
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        position: 'absolute',
        bottom: width / 8 / 4,
        width: width,
    },
    ImageStyle: {
        width: width,
        height: width * 0.6,
        opacity: 0.9,
    },
});

export default withNavigation(PostComponent);

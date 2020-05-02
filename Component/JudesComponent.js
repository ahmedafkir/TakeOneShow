//Import React
import React, { Component } from 'react';
//import React Native Tools
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

//Screen width Dimension
const { width } = Dimensions.get('window');

//First Component
class JudesComponent extends Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.BodyStyle}
                activeOpacity={0.8}
                onPress={() =>
                    this.props.navigation.navigate('Judge', {
                        name: this.props.name,
                        description: this.props.description,
                        image: this.props.image,
                    })
                }>
                <Image style={styles.ImageStyle} source={{ uri: this.props.image }} />
                <View style={styles.TitleViewStyle}>
                    <Text style={styles.TitleTextStyle}>{this.props.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

//Styles
const styles = StyleSheet.create({
    BodyStyle: {
        alignItems: 'center',
        padding: 5,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 5,
        borderRadius: 10,
        borderWidth: 1,
    },
    ImageStyle: {
        width: width * 0.8,
        height: width * 0.5,
        borderRadius: 10,
    },
    TitleViewStyle: {
        backgroundColor: '#a5752f',
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 10,
        marginTop: 10,
        width: width * 0.8,
        borderRadius: 10,
    },
    TitleTextStyle: {
        fontFamily: 'Cairo-Bold',
        fontSize: 14,
        textAlign: 'center',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default withNavigation(JudesComponent);

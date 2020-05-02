//Import React
import React, { Component } from 'react';
//Import React Native Tools
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

//Mobile Width Dimension
const { width } = Dimensions.get('window');

//First Component
class SmallItemComponent extends Component {
    render() {
        return (
            <TouchableOpacity
                key={this.props.key}
                activeOpacity={0.8}
                onPress={() =>
                    this.props.navigation.navigate(this.props.link, {
                        id: this.props.key,
                        name: this.props.name,
                        description: this.props.description,
                        image: this.props.image,
                        berthday: this.props.berthday,
                        ville: this.props.ville,
                        thefunction: this.props.thefunction,
                        facebook: this.props.facebook,
                        youtube: this.props.youtube,
                    })
                }>
                <View>
                    <View style={styles.BodyStyle}>
                        <Image style={styles.ImageStyle} source={{ uri: this.props.image }} />
                        <Text style={styles.TextStyle}>{this.props.name}</Text>
                        {this.props.thefunction !== '' ? (
                            <Text style={styles.Function}>{this.props.thefunction}</Text>
                        ) : null}
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

//Styles
const styles = StyleSheet.create({
    BodyStyle: {
        width: width / 2,
        height: width / 2,
        alignItems: 'center',
    },
    ImageStyle: {
        width: width / 3,
        height: width / 3,
        borderRadius: width / 3 / 2,
    },
    TextStyle: {
        fontFamily: 'Cairo-Bold',
        fontSize: 11,
        color: '#FFF',
    },
    Function: {
        fontFamily: 'Cairo-Bold',
        fontSize: 9,
        color: '#bf903e',
    },
});

export default withNavigation(SmallItemComponent);

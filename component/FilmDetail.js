import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default class FilmDetail extends React.Component {
    render(){
        return(
            <View style={styles.main_container}>
                <View style={styles.container_style}>
                    <View style={styles.image_container}>
                        <Image style={styles.image_style} source={require('../assets/icon.png')}></Image>
                    </View>
                    <View style={styles.header_style}>
                        <Text style={styles.title_style}>Title</Text>
                    </View>
                    <View style={styles.description_style}>
                        <Text style={{fontStyle:"italic"}}> Descriiiption</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 5,
        flexDirection: 'column',
        height: 200,
    },
    container_style: {
        flex: 2,
        backgroundColor: 'grey',
        // alignItems: 'center',
        padding: 20,
    },
    image_style:{
        height:200,
        width:200,
        alignSelf:'center',
        borderRadius:10,
        resizeMode:'center',
        margin:30,
    },
    header_style: {
        flex: 2,
    },
    title_style: {
        flex: 5,
        flexWrap: 'wrap',
        fontWeight: 'bold',
        fontSize: 30,
        backgroundColor: 'green',
    },
    description_style: {
        flex: 3,
    }
});
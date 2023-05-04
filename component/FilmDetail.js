import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { getDetailsfromTmdbApi, getImagefromTmdbApi, getMovieVideosFromApi } from '../Apitmdb/api';
import {Video} from 'expo-av';

function FilmDetail(props) {
    const id = props.route.params.id;
    const [film, setFilm] = useState([]);

    useEffect(() => {
        const getfilm = async () => {
            try {
                const res = await getDetailsfromTmdbApi(id);
                console.log('res ::::::::::::', res); // Log the response object
                if (res) {
                    console.log('Setting film data: /////////////////////////', res);
                    setFilm(res);
                    console.log('FILLLLLLM : ', film);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        getfilm();
    }, [id]);

    console.log(film.title);
    if (!film) {
        return <Text>Chargement...</Text>;
    } else {
        return (
            <View style={styles.main_container}>
                <ScrollView>
                    <View style={styles.container_style}>
                        <Image
                            style={styles.image_style}
                            source={{ uri: getImagefromTmdbApi(film.poster_path) }}
                        />
                        <View style={styles.header_style}>
                            <View style={styles.video_container}>
                                <Video
                                    source={{ uri: getMovieVideosFromApi(id) }}
                                    style={styles.video_style}
                                    controls={true}
                                    resizeMode="contain"
                                />
                            </View>
                            <Text style={styles.title_style}>{film.title}</Text>
                        </View>
                        <View style={styles.description_style}>
                            <Text style={styles.overview}>{film.overview}</Text>
                            <Text style={styles.release_date}>
                                Release date: {film.release_date}
                            </Text>
                            <Text style={styles.vote}>
                                Vote average: {film.vote_average}
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export { FilmDetail };
const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#649197',
    },
    container_style: {
        padding: 20,
    },
    image_style: {
        height: 400,
        borderRadius: 10,
        resizeMode: 'cover',
        marginBottom: 20,
    },
    header_style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title_style: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#F5F5F5',
        flexWrap: 'wrap',
        flex: 1,
    },
    description_style: {},
    overview: {
        color: '#F5F5F5',
        fontSize: 16,
        marginBottom: 10,
    },
    release_date: {
        color: '#900C3F',
        fontSize: 16,
        marginBottom: 10,
    },
    vote: {
        color: '#FEC260',
        fontSize: 16,
        marginBottom: 10,
    },
});
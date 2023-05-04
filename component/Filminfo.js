import React, {useEffect, useState} from 'react'
import { TouchableOpacity, ScrollView } from 'react-native'
import {View, Image, Text, StyleSheet, TextInput} from 'react-native'
import {api, getFilmfromTmdbApi, getTrendingFilmsFromApi} from '../Apitmdb/api'
import FilmCard from './FilmCard';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#375a64',
      },
      globalContainer_style:{
        flexDirection:'column',       
      },
    input_style: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
      },
      scrollView: {
        paddingBottom: 10,
      },
    })

function Filminfo({navigation}) {
       
    const api_key = api;
    const [listFilm, setListFilm] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [trendingFilms, setTrendingFilms] = useState([]);

    useEffect( () =>{
        const getallfilm = async () =>{
            try {
                const res = await getFilmfromTmdbApi(searchText,1);
                if (res){
                    console.log(res)
                    setListFilm(res.results);
                } 
            } catch (error) {
                console.log(error)
            }
        }
        getallfilm();
    }, [searchText])

    useEffect( () =>{
        const getTrendingFilm = async () =>{
            try {
                const res = await getTrendingFilmsFromApi(1);
                if (res){
                    console.log(res)
                    setTrendingFilms(res.results);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getTrendingFilm();
    }, [])

    const filterFilm = listFilm.filter((film) => {
        return film.id && film.original_title && film.original_title.toLowerCase().includes(searchText.toLowerCase());
    });
      
    const displayFilms = searchText ? filterFilm : trendingFilms;

  return (
    <View style={styles.container}>
        <View style={styles.globalContainer_style}>
            <TextInput style={styles.input_style} placeholder="Rechercher" onChangeText={(text) => setSearchText(text)} value={searchText}></TextInput>
        </View>
        <ScrollView>
            {displayFilms.map((f) => (
                <TouchableOpacity key={f.id} onPress={() => navigation.navigate('Details', {id: f.id})}> 
                    <FilmCard  original_title={f.original_title} poster_path={f.poster_path} vote_average={f.vote_average} release_date={f.release_date} overview={f.overview}/>
                </TouchableOpacity>
            ))}
        </ScrollView>
    </View>
  )
}


export {Filminfo};
import React, {useEffect, useState} from 'react'
import { TouchableOpacity } from 'react-native'
import {View, Image, Text, StyleSheet, TextInput} from 'react-native'
import {api, getFilmfromTmdbApi} from '../Apitmdb/api'
import FilmCard from './FilmCard';

function Filminfo() {
    const styles = StyleSheet.create({
        globalContainer_style:{
            flexDirection:'row',
            height:140,        
        },
        image_style:{
            height:140,
            width:120,
            margin:10
        },
        container_style:{
            flex:1,
        },
        header_style:{
            flex:3,
            flexDirection:'row',
        },
        title_style:{
            flex:1,
            flexWrap:"wrap", //pour le retour a la ligne pour prendre l'espace nece
            fontWeight:"bold",
            fontSize:20
        },
        vote_style:{
            fontSize:24
        },
        input_style: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10,
            paddingHorizontal: 10,
          },
        })
    
    const api_key = api;
    const [listFilm, setListFilm] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect( () =>{
        const getallfilm = async () =>{
            try {
                const res = await getFilmfromTmdbApi(searchText,1);
                if (res){
                    // for(let i=0; i<res.results.length; i++){
                    // console.log(res.results[i]);
                    // console.log(res.results[i].original_title)
                    // console.log(res.results[i].id)
                    // console.log(res.results[i].poster_path)
                    // }
                    console.log(res)
                    console.log(res.results)
                    setListFilm(res.results);
                } 
            } catch (error) {
                console.log(error)
            }
        }
        getallfilm();
    }, [searchText])

    const filterFilm = listFilm.filter((film) => {
        return film.original_title && film.original_title.toLowerCase().includes(searchText.toLowerCase());
      });
      


  return (
    <View>
    
        <View style={styles.globalContainer_style}>
            <TextInput style={styles.input_style} placeholder="Rechercher" onChangeText={(text) => setSearchText(text)} value={searchText}></TextInput>
        </View>
        
        {filterFilm.map((f) => (
            <TouchableOpacity> 
            {/* //onPress={() => navigation.navigate('Details', {id: f.id})} */}
                <FilmCard original_title={f.original_title} poster_path={f.poster_path} vote_average={f.vote_average} release_date={f.release_date} overview={f.overview}/>
            </TouchableOpacity>
        ))}
        
    </View>
  )
}


export {Filminfo};
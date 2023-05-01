import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import {getImagefromTmdbApi} from '../Apitmdb/api'

function FilmCard({original_title, poster_path, vote_average, release_date, overview}) {
  return (
    <View>
      <Image style={styles.image_style} source={getImagefromTmdbApi(poster_path)}>

      </Image>
      <View style={styles.container_style}>
          <View style={styles.header_style}>
              <Text style={styles.title_style}>{original_title}</Text>
              <Text style={styles.vote_style}>{vote_average}</Text>
          </View>
          <View style={{flex:6}}>
              <Text style={{fontStyle:"italic", flex:1, flexWrap:"wrap"}}>{overview}</Text>
          </View>
          <View style={{flex:4}}>
              <Text style={{textAlign:"right"}}>{release_date}</Text>
          </View>
      </View>
    </View>
  )
}
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
      flex:4,
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
  }
  })

export default FilmCard

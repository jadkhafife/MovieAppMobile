import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import {getImagefromTmdbApi} from '../Apitmdb/api'

function FilmCard(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{
            uri: getImagefromTmdbApi(props.poster_path)
          ,}}>
      </Image>
      <View style={styles.detailscontainer}>
          <View style={styles.header}>
              <Text style={styles.title}>{props.original_title}</Text>
              <Text style={styles.vote}>{props.vote_average}</Text>
          </View>
              <Text style={styles.description}>{props.overview}</Text>
              <Text style={styles.date}>{props.release_date}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
    },
    image:{
        width:100,
        height:100,
        marginRight:8,
    },
    detailscontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        flex:1,
        flexWrap:'wrap',
        marginRight:8,
    },
    vote:{
        fontSize:18,
    },
    description:{
        flexWrap:'wrap',
        fontStyle:'italic',
    },
    date:{
        flex:1,
        textAlign:'right',
    }

//   globalContainer_style:{
//       flexDirection:'row',
//       height:140,
//   },
//   image_style:{
//       height:100,
//       width:120,
//   },
//   container: {
//     flexDirection: "column",
//     backgroundColor: "#121212",
//     borderTopColor: "white",
//     borderTopWidth: 2,
//   },
//   header_style:{
//       flex:3,
//       flexDirection:'row',
//   },
//   banner: {
//      width: 200,
//      height: 200 
//     },
//   title_style:{
//       flexWrap:"wrap", //pour le retour a la ligne pour prendre l'espace nece
//       fontWeight:"bold",
//       fontSize:20
//   },
//   vote_style:{
//       fontSize:24
//   }
});

export default FilmCard;
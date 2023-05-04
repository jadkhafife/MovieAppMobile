import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import {getImagefromTmdbApi} from '../Apitmdb/api'

function FilmCard(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: getImagefromTmdbApi(props.poster_path) }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{props.original_title}</Text>
        <View style={styles.details}>
          <Text style={styles.date}>{props.release_date}</Text>
          <View style={styles.voteContainer}>
            <Text style={styles.vote}>{props.vote_average}</Text>
          </View>
        </View>
        <Text style={styles.description} numberOfLines={3}>{props.overview}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 3,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 12,
    padding: 12,
  },
  image: {
    width: 80,
    height: 120,
    borderRadius: 8,
    marginRight: 12,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    color: '#999',
    marginRight: 8,
  },
  voteContainer: {
    backgroundColor: '#E50914',
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  vote: {
    fontSize: 16,
    color: '#fff',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#444',
  },
});

export default FilmCard;
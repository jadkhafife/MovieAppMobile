
export const api = 'ebc9c5a02d3ceea2e750d30c66e3e2d5'

export function getFilmfromTmdbApi(text,page){
    const url = 'https://api.themoviedb.org/3/search/movie?api_key='+api+'&language=fr&query='+text+'&page='+page
    return(
        fetch(url)
    .then(response=>response.json())
    .catch((error)=>console.log(error))
    )
}

export function getMovieVideosFromApi(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api}&language=en-US`;
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
}

export function getTrendingFilmsFromApi(page) {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${api}&language=en&page=${page}`;

    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }

export function getImagefromTmdbApi(name){
    console.log('https://image.tmdb.org/t/p/w300/'+name)
    return 'https://image.tmdb.org/t/p/w300'+name
}

export function getDetailsfromTmdbApi(id){
    const url = 'https://api.themoviedb.org/3/movie/'+id+'?api_key='+api+'&language=fr'
    return(
        fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log(error))
    )
}

export function getTrendingfromTmdbApi(){
    const url = 'https://api.themoviedb.org/3/trending/all/day?api_key='+api
    return(
        fetch(url)
        .then((response)=>response.json())
        .catch((error)=>console.log(error))
    )
}
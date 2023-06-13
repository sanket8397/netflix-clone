const APIKEY = "b0bee0ed9ce8a662851cd0dfa8c613ed";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&languages=en-US`,
    fetchNetflixOriginals: `discover/movie?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&languages=en-US`,
    fetchActionMovies: `discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchCommedyMovies: `discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanticMovies: `discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries: `discover/movie?api_key=${APIKEY}&with_genres=99`,
}

export default requests;
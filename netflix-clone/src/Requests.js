//Typicall store api key in process.env.API_KEY
const API_KEY = "918fef4b4c45679ede27f01c5493b1b9";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchNetflixOrginal: `/discover/tv?api_key=${API_KEY}&lwith_networks=213`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&width_genres=99`,
}

export default requests;
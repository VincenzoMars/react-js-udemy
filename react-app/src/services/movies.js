const APIKey = '3eacc095'
const APIurl = `http://www.omdbapi.com/?apikey=${APIKey}&s=game&page=1`

export const getInitialMovies = () => fetch(APIurl).then((response) => response.json()).then(movies => movies.Search)


const requests = {
  fetchPage1: `https://api.themoviedb.org/4/list/634?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=`,
  fetchPage2: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=2`,
  fetchPage3: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=3`,
  fetchPage4: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=4`,
  fetchPage5: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=5`,
  fetchPage6: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=6`,
  fetchPage7: `https://api.themoviedb.org/3/keyword/210024/movies?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`,
  fetchPage8: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`,
};

export default requests;

export const info = [
  {
    backdrop_path: "/A9sCKnxgTTapzu307ybdXCJQEqD.jpg",
    id: 60625,
    name: "Rick and Morty",
    overview:
      "Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
    poster_path: "/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg",
    vote_average: 8.8,
  },
];

import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '5071f59330ff5aee253fd23cf6f8f21e',
    language: 'es-ES',
  },
});

export default movieDB;

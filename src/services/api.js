// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjRkN2IwNzg5OTQwOGM1MTBlM2RmYzgwYTU2ZjUwOSIsInN1YiI6IjY2MjA0NzEzZWNhZWY1MDE2M2Y5Yjk5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zePi9NJQsYyKYadY4o_bn0PQ2z4Myq9X5-gv6YSxrWI


import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/movie/day',
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjRkN2IwNzg5OTQwOGM1MTBlM2RmYzgwYTU2ZjUwOSIsInN1YiI6IjY2MjA0NzEzZWNhZWY1MDE2M2Y5Yjk5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zePi9NJQsYyKYadY4o_bn0PQ2z4Myq9X5-gv6YSxrWI'
  }
};


export const requestMovies = async ()=>{
    axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data
    })
    .catch(function (error) {
      console.error(error);
    });
} 



// export const api = axios.create({baseUrl: ""})
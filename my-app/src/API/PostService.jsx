import axios from 'axios';

const key = 'e3aa9904c237de54a08937f1d052f5f4';

class PostService {
   static async getWeatherCity(city) {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
      return response.data;
   }
   static async getComments() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
      return response.data
   }
}

export default PostService;
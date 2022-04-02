import axios from 'axios';

class PostService {
   static async getWeatherCity() {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=e3aa9904c237de54a08937f1d052f5f4`);
      return response;
   }
}

export default PostService;
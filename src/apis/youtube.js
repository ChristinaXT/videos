import axios from 'axios';

const KEY = 'AIzaSyAefFzy08JxCa65lYKR_SiyAtI0PuRwHz8';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
  }
})

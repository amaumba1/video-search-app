// UpperCase KEY coz this is constant value it will never be changed 
// Unless you know what you are doing 

import axios from 'axios'


const KEY = 'AIzaSyCoNcvSufiGs53T3JFT9xY4eQOwZHknDIc'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY
  }
})
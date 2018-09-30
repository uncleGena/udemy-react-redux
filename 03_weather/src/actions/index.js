import axios from 'axios'
import keys from '../keys'
const API_KEY = keys.weather
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ua`
  const request = axios.get(url)
// console.log('request::', request)
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
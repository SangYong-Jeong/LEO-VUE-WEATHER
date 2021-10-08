import axios from 'axios'

const appid = '7f65332e6d33816b773f35daec5e2d44'
const url = 'https://api.openweathermap.org/data/2.5/weather'
// const icons = ['http://openweathermap.org/img/wn/', '@2x.png']
const params = { units: 'metric', lang: 'kr', appid }

const apiDaily = options => {
  params.lang = options.lang || 'kr'
  if (options.id) {
    params.id = options.id
  } else if (options.lat && options.lon) {
    params.lat = options.lat
    params.lon = options.lon
  } else {
    throw new Error('Error')
  }
  return axios.get(url, { params })
}

export default apiDaily

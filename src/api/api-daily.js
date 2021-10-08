import axios from ''

const appid = '7f65332e6d33816b773f35daec5e2d44'
const url = 'https://api.openweathermap.org/data/2.5/weather'
// const icons = ['http://openweathermap.org/img/wn/', '@2x.png']
const params = { units: 'metric', appid }

const apiDaily = (options) => {
  params.lat = options.lat
  params.lon = options.lon
  return axios.get(url, { params })
}

export default apiDaily

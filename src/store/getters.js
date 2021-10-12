export default {
  GET_COORDS: function (state) {
    console.log('getter-coords')
    return state.coords
  },
  GET_DAILY: function (state) {
    console.log('getter-daily')
    return state.daily
  },
  GET_DAYS: function (state) {
    console.log('getter-days')
    return state.days
  },
  GET_CITY: function (state) {
    console.log('getter-city')
    return state.city
  }
}

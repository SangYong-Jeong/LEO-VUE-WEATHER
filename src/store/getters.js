export default {
  GET_COORDS: function (state) {
    console.log('coords')
    return state.coords
  },
  GET_DAILY: function (state) {
    console.log('daily')
    return state.daily
  },
  GET_DAYS: function (state) {
    console.log('days')
    return state.days
  },
  GET_CITY: function (state) {
    console.log('city-getter')
    return state.city
  }
}

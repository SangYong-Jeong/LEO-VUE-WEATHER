export default {
  GET_COORDS: function (state) {
    console.log('coords')
    return state.coords
  },
  GET_DAILY: function (state) {
    return state.daily
  },
  GET_DAYS: function (state) {
    console.log('days')
    return state.days
  },
  GET_CITY: function (state) {
    return state.city
  }
}

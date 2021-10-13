export default {
  GET_COORDS: function (state) {
    console.log(this)
    console.log(state.coords)
    console.log('getter-coords')
    return state.coords
  }
}

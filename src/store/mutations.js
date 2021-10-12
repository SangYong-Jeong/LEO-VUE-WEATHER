// 상태(History)를 관리 함 => state의 값을 변화시킨다.
export default {
  MUT_COORDS (state, v) {
    console.log('mut-coords')
    state.coords = v
  },
  MUT_DAILY (state, v) {
    console.log('mut-daily')
    state.daily = v
  },
  MUT_DAYS (state, v) {
    console.log('mut-days')
    state.days = v
  },
  MUT_CITY (state, v) {
    console.log('mut-city')
    state.city = v
  }
}

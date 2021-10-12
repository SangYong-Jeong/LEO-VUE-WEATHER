<template>
  <div>
    <h1>Count: {{ at }}</h1>
    <button @click="updateCounter">카운트 올리기</button>
    <button @click="getLocation">위치정보 가져오기</button>
    <h2>{{ at2 }} / {{ getLon }}</h2>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

import { apiCoords } from './api/api-coords'

export default {
  name: 'Getters01',
  data () {
    console.log('hi-data')
    return {
      at: 0,
      lon: 0,
      count: 0
    }
  },
  computed: {
    // 1. 내가 참조하고 있는 변수값이 바뀌면 내가 바뀐다.
    // 2. 참조변수를 가공해서 새로운 값을 리턴
    at2: function () {
      console.log('hi-computed')
      return this.at
    },
    counter: function () {
      console.log('hi-computed2')
      return this.count + '입니다'
    },
    getLon: function () {
      console.log('hi-computed3')
      return `경도는 ${this.lon.toFixed(4)} 입니다.`
    }
  },
  watch: {
    count: function () {
      console.log('hi-watch')
    },
    counter: function () {
      console.log('hi-watch2')
    }
  },
  methods: {
    updateCounter () {
      this.count++
    },
    async getLocation () {
      try {
        const { coords } = await apiCoords()
        this.lat = coords.latitude
        this.lon = coords.longitude
      } catch (err) {
        console.log(err)
      }
    }
  },
  created () {
    console.log('hi-create')
    // this.count = this.count + 1
  }
}
</script>

<style lang="scss">

</style>

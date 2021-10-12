<template>
  <li class="list">
    <div class="img-wrap">
      <Icon
        :styled="{ width: '100px' }"
        :src="src"
        class="icon" />
    </div>
    <div class="info-wrap">
      <Temp
        :styled="{ size: '1.25em', color: '#337' }"
        :temp="temp"
        class="temp"/>
      <Description
      :styled="{ size: '1.25em'}"
      :desc="desc"
      class="desc" />
      <Wind
      :speed="speed"
      :deg="deg"
      class="wind" />
      <Date
      :styled="{ color: '#999'}"
      :date="date"
      class="date"  />
    </div>
  </li>
</template>

<script>
import moment from 'moment'
import Icon from './Icon.vue'
import Temp from './Temp.vue'
import Wind from './Wind.vue'
import Description from './Description.vue'
import Date from './Date.vue'

import { getIcon } from '../modules/util.js'

export default {
  name: 'List',
  props: ['v'],
  components: { Temp, Description, Wind, Date, Icon },
  computed: {
    src: function () {
      return getIcon(this.v.weather[0].icon) || ''
    },
    temp: function () {
      return this.v.main.temp + '℃' || ''
    },
    desc: function () {
      return this.v.weather[0].description + ' / ' + this.v.weather[0].main || ''
    },
    deg: function () {
      return this.v.wind.deg || ''
    },
    speed: function () {
      return this.v.wind.speed || ''
    },
    date: function () {
      moment.locale('ko')
      return moment(this.v.dt * 1000).format('YYYY년 M월 D일(dd) HH시 예보') || ''
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  padding: 1em;
  border-bottom: 1px solid $secondary-color;
  @include flex;
  .img-wrap {
    margin-right: 1em;
  }
  .info-wrap {
    .temp,
    .desc,
    .wind {
      margin-bottom: .5em;
    }
  }
}
</style>

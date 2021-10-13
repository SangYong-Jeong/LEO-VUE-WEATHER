<template>
  <div>
    <div>{{ GET_COORDS.a }}</div>
    <div>{{ b }}</div>
    <div>{{ c }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    console.log('data')
    return {
      b: 'hi2'
    }
  },
  computed: {
    ...mapGetters(['GET_COORDS', 'GET_DAILY']),
    c: function () {
      console.log('c-computed')
      return 'hi3'
    }
  },
  created () {
    this.GET_COORDS.a = 'hi'
    console.log('created')
  }
}
</script>

<style lang="scss" scoped>
/*  */
</style>

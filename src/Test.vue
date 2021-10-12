<template>
  <div>
    <div>{{c}}</div>
    <div>{{b}}</div>
    <div>{{a}}</div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    console.log('hi-data')
    return {
      a: 0,
      b: 1,
      c: 2
    }
  },
  created () {
    console.log('created')
    console.log(this.a)
    console.log(this.b)
    console.log(this.c)
    console.log(this.a1)
    console.log(this.b1) // 각각이 computed 된 이후에 다시 created 실행 이 변수 관련된 부분만 실행된다.
    console.log(this.c1) // 각각이 computed 된 이후에 다시 created 실행 이 변수 관련된 부분만 실행된다.
    this.a = this.a + 3
  },
  computed: {
    a1: function () {
      console.log('hi-computed')
      return this.a
    },
    b1: function () {
      console.log('hi-computed2')
      return this.b
    },
    c1: function () {
      console.log('hi-computed3')
      return this.c
    }
  },
  watch: {
    a: function () {
      console.log('hi-watch1')
      console.log(this.a)
    },
    b: function () {
      console.log('hi-watch2')
    },
    c: function () {
      console.log('hi-watch3')
    },
    a1: function () {
      console.log('hi-watch4')
    }
  }
}
</script>

<style>

</style>

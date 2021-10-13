<template>
  <div :style="style">{{ temp }}</div>
</template>

<script>
import { withComputed } from './mixins/mixinComputed.js'

export default {
  name: 'Temp',
  props: ['temp', 'styled'],
  mixins: [withComputed]
}
</script>

<style lang="scss" scoped>

</style>

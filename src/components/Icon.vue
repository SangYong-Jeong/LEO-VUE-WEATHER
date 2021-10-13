<template>
  <div :style="style">
    <img :src="src" :alt="title || 'icon'" class="w-100">
  </div>
</template>

<script>
import { withIconComputed } from './mixins/mixinComputed.js'

export default {
  name: 'Icon',
  props: ['src', 'title', 'styled'],
  mixins: [withIconComputed]
}
</script>

<style lang="scss" scoped>

</style>

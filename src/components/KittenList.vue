<template>
  <div class="c-kittens">
    <div v-for="kitten in kittens" class="c-kittens__item">
      <kitten-item :kitten="kitten"></kitten-item>
    </div>
  </div>
</template>

<script>
import KittenItem from './KittenItem'
export default {
  name: 'kitten-list',
  props: ['kittens'],
  data () {
    return {
    }
  },
  components: {
    KittenItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.c-kittens {
  position: absolute;
  top: 64px;
  left:0;
  bottom: 0;
  right: 0;
  margin: auto;
  text-align: center;
  overflow: auto;
}
.c-kittens__item {
  width: 300px;
  display: inline-block;
  margin: 30px;
}
</style>

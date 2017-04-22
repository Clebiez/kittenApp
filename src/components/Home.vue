<template>
  <div>
    <kitten-info></kitten-info>
    <div class="c-home__content">
      <kitten-list :kittens="getKittens"></kitten-list>
    </div>
  </div>

</template>

<script>
import KittenList from './KittenList'
import KittenInfo from './KittenInfo'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    KittenList,
    KittenInfo
  },
  created () {
    this.retrieveKittens()
  },
  computed: {
    ...mapGetters([
      'getKittens'
    ])
  },
  methods: {
    ...mapActions([
      'retrieveKittens'
    ]),
    kittens () {
      return this.getKittens()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.c-home__content {
  position: absolute;
  width: 100%;
  bottom: 0;
  top: 64px;
}
</style>

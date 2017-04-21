<template>
  <div>
    <!--<search-input></search-input>-->
    <!-- <kitten-detail></kitten-detail> -->
    <div class="c-home__content">
      <kitten-list :kittens="getKittens"></kitten-list>
    </div>
  </div>

</template>

<script>
import KittenList from './KittenList'
import KittenDetail from './KittenDetail'
import SearchInput from './SearchInput'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    KittenList,
    KittenDetail,
    SearchInput
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
  top: 120px;
}
</style>

<template>
    <div class="c-search-input">
      <md-input-container>
        <md-icon>search</md-icon>
        <label>Rechercher</label>
        <md-input type="text"></md-input>
      </md-input-container>
    </div>
</template>

<script>

export default {
  name: 'search-input',
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.c-search-input {
    width: 80%;
    margin: auto;
}
</style>

<template>
  <div class="c-kitten-item">
    <md-card md-with-hover>
        <md-card-media>
          <img v-bind:src="kitten.picture">
        </md-card-media>

        <md-card-header>
          <div class="md-title">{{kitten.name}} ({{kitten.age}} ans)</div>
        </md-card-header>

        <md-card-actions>
          <md-button class="md-icon-button md-raised md-primary">
            <md-icon>visibility</md-icon>
          </md-button>
          <md-button class="md-icon-button md-raised md-warn">
            <md-icon>delete</md-icon>
          </md-button>
        </md-card-actions>
      </md-card>
  </div>
</template>

<script>

export default {
  name: 'kitten-item',
  props: ['kitten'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-title {
  color: black;
}
img {
  width: 300px;
  min-height: 225px;
}
</style>

<template>
    <div class="c-kitten-detail">
        <md-button class="md-raised md-accent" @click.native="toggleSidenav">Toggle</md-button>
        <md-sidenav class="md-right md-warn" ref="rightSidenav" @open="open('Right')" @close="close('Right')">
            <md-toolbar class="md-warn">
                <div class="md-toolbar-container">
                    <h3 class="md-title">{{kitten.name}}</h3>
                </div>
            </md-toolbar>

             <img class="c-kitten-detail__img" v-bind:src="kitten.picture">
            <div class="c-kitten-detail__info">Age: {{kitten.age}} an(s)</div>
            <div class="c-kitten-detail__info">Sexe: {{kitten.gender}}</div>
            <div class="c-kitten-detail__info">{{kitten.type}}</div>
            <div class="c-kitten-detail__info">Taille: {{kitten.size}} cm</div>
            <div class="c-kitten-detail__info">Poids: {{kitten.weight}} kg</div>
            <div class="c-kitten-detail__info"><span v-for="aptitude of kitten.aptitudes">{{aptitude}}&nbsp;</span> </div>

        </md-sidenav>
    </div>
</template>

<script>

export default {
  name: 'kitten-detail',
  props: ['kitten'],
  data () {
    return {

    }
  },
  methods: {
    toggleSidenav () {
      this.$refs.rightSidenav.toggle()
    },
    closeSidenav () {
      this.$refs.rightSidenav.close()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-sidenav-content {
    background-color: blue !important;
}
.md-toolbar {
    overflow: hidden;
}
.md-title {
  text-align: center;
  width: 100%;
  font-size: 32px !important;
}
.c-kitten-detail__title {
    font-size: 1.8em;
    padding: 20px 0;
}
.c-kitten-detail__img {
    width: 100%;
}
.c-kitten-detail__info {
    line-height: 1.5em;
    margin: 20px;
    width: 100%;
    font-size: 24px;
    display: block;
}
</style>

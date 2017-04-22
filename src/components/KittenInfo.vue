<template>
    <div class="c-kitten-info" v-if="kitten">
        <md-sidenav class="md-right md-warn" ref="rightSidenav">
            <md-toolbar class="md-warn">
                <div class="md-toolbar-container">
                    <h3 class="md-title">{{kitten.name}}</h3>
                </div>
            </md-toolbar>

            <img class="c-kitten-info__img" v-bind:src="kitten.picture">
            <div class="c-kitten-info__item">Age: {{kitten.age}} an(s)</div>
            <div class="c-kitten-info__item">Sexe: {{kitten.gender}}</div>
            <div class="c-kitten-info__item">{{kitten.type}}</div>
            <div class="c-kitten-info__item">Taille: {{kitten.size}} cm</div>
            <div class="c-kitten-info__item">Poids: {{kitten.weight}} kg</div>
            <div class="c-kitten-info__item"><span v-for="aptitude of kitten.aptitudes">{{aptitude}}&nbsp;</span> </div>

        </md-sidenav>
    </div>
</template>

<script>
export default {
  name: 'kitten-info',
  data () {
    return {
    }
  },
  computed: {
    kitten () {
      return this.$store.state.currentKittenViewed
    }
  },
  watch: {
    kitten () {
      this.$refs.rightSidenav.toggle()
    }
  },
  methods: {
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
.c-kitten-info__title {
    font-size: 1.8em;
    padding: 20px 0;
}
.c-kitten-info__img {
    width: 100%;
}
.c-kitten-info__item {
    line-height: 1.5em;
    margin: 20px;
    width: 100%;
    font-size: 24px;
    display: block;
}
</style>

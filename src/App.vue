<template>
  <z-canvas :views="$options.components" @currentViewChanged="currentViewChanged"/>
</template>
<script>
export default {
  components: {
    home: () => import('./demo/home'),
    docs: () => import('./demo/docs')
  },
  mounted () {
    this.$zircle.config({
      debug: false,
      transition: '800ms ease',
      style: {
        theme: 'blue'
      }
    })
    this.$zircle.setView('home')
  },
  methods: {
    currentViewChanged (e) {
      console.log(e)
    }
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
  @import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css');
</style>

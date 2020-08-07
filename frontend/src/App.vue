<template>
  <div id="app">
    <TopBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    TopBar,
    Footer,
  },
};
</script>

<style>
#app {
  min-height: 100%;
  font-family: 'Vollkorn', Georgia, 'Times New Roman', serif;
}
</style>

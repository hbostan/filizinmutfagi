<template>
  <div>
    <div class="meals">
      <div class="container">
        <div class="row row-cols-sm-3">
          <Recipie v-for="(item, index) in recipies" :key="index" v-bind:recipie="item" />
        </div>
      </div>
    </div>
    <div class="text-center spinners">
      <div
        class="spinner-grow spinner text-secondary dot1"
        role="loading"
        v-if="isFetching"
      ></div>
      <div
        class="spinner-grow spinner text-secondary dot2"
        role="loading"
        v-if="isFetching"
      ></div>
      <div
        class="spinner-grow spinner text-secondary dot3"
        role="loading"
        v-if="isFetching"
      ></div>
    </div>
    <Observer v-on:intersect="onIntersect" />
  </div>
</template>

<script>
import Recipie from '@/components/Recipie.vue';
import Observer from '@/components/Observer.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Recipie,
    Observer,
  },
  computed: {
    ...mapGetters({
      recipies: 'getRecipies',
      page: 'getPage',
      isFetching: 'getIsFetching',
    }),
  },
  data() {
    return {};
  },
  methods: {
    async collectRecipies() {
      await this.$store.dispatch('fetchRecipies');
    },
    onIntersect() {
      this.collectRecipies();
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
}

.meals {
  max-height: 90%;
}

.spinner {
  width: 1em;
  height: 1em;
  margin: 0.25em;
}
.spinners {
  padding: 5rem;
}

.dot1 {
  animation-delay: -0.45s;
}
.dot2 {
  animation-delay: -0.22s;
}
.dot3 {
}
</style>
